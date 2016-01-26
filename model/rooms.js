/*
 * Declares the Rooms model collection.
 * Defines all the methods in which client interacts with
 * the server.
 *
 * Methods:
 *  createRoom: creates a new room and adds it to the collection
 *  joinRoom: add player to a room
 *  leaveRoom: removes a player from the room
 *  getRandomRoom: return a random room where a user can be added
 *  startGame: starts a game in a room with the current players waiting
 *  answerQuestion: records the answer of a player for a question
 *
 */

Rooms = new Meteor.Collection('rooms');

if(Meteor.isServer) {
  Meteor.publish('rooms', function() {
    return Rooms.find({$or: [{full: false, playing: false}, {players: this.userId}] });
  });

  Meteor.methods({
    createRoom: function(playerID, privacy) {
      var room = RoomFactory.createRoom(privacy);
      return Rooms.insert(room, function(error, result) {
        if(error) {
          throw new Meteor.Error( 500, 'Failed to create room. Try again' );
        }
        return result;
      });
    },
    joinRoom: function(roomCode, playerID) {
      var room = Rooms.findOne(roomCode);
      if(!room) {
        throw new Meteor.Error( 500, 'Room not found. Please review the room code' );
      }
      if(RoomFactory.addPlayer(room, playerID)) {
        return Rooms.update(room._id, room);
      } else {
        throw new Meteor.Error( 500, 'Room not accesible' );
      }
    },
    leaveRoom: function(roomCode, playerID) {
      var room = Rooms.findOne(roomCode);
      RoomFactory.removePlayer(room, playerID);
      Rooms.update(room._id, room);
      if(room.playersCount == 0) {
        Rooms.remove(room._id);
      }
    },
    getRandomRoom: function() {
      var room = Rooms.findOne({ playing: false, full: false, privateRoom: false, players: {$nin: [this.userId] } });
      if(!room) {
        throw new Meteor.Error( 500, 'No games available. Please try again later' );
      }
      return room;
    },
    startGame: function(roomCode) {
      var room = Rooms.findOne(roomCode);
      if(RoomFactory.startGame(room)) {
        Rooms.update(room._id, room);
        return room;
      } else {
        throw new Meteor.Error( 500, 'At least one more player is needed to start. Please wait' );
      }
    },
    answerQuestion: function(roomCode, answer) {
      var room = Games.answerQuestion(roomCode, answer);
      Rooms.update(room._id, room);
      if(!room.playing && room.displayingResults) {
        Meteor.setTimeout(function() {
          room.displayingResults = false;
          Rooms.update(room._id, room);
        }, 5000);
      }
    }
  });
}

if(Meteor.isClient) {
  Meteor.subscribe('rooms');

  Meteor.methods({
    leaveRoom: function(roomCode, playerID) {
      var room = Rooms.findOne(roomCode);
      RoomFactory.removePlayer(room, playerID);
      Rooms.update(room._id, room, function(error, result) {
        Router.go('home', {}, { replaceState: true });
      });
    }
  })
}

Meteor.methods({
  deleteRoom: function(roomCode) {
    Rooms.findOne({ roomCode: roomCode });
  }
});
