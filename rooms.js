Rooms = new Meteor.Collection('rooms');

if(Meteor.isServer) {
  Meteor.publish('rooms', function() {
    return Rooms.find({$or: [{full: false, playing: false}, {players: this.userId}] });
  });

  Meteor.methods({
    createRoom: function(playerID, privacy) {
      var room = RoomFactory.createRoom(privacy);
      return Rooms.insert(room);
    },
    joinRoom: function(roomCode, playerID) {
      var room = Rooms.findOne(roomCode);
      RoomFactory.addPlayer(room, playerID);
      return Rooms.update(room._id, room);
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
      // TODO remove rooms where user is present
      return Rooms.findOne({ playing: false, full: false });
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
    createRoom: function(playerID, privacy) {
      var room = RoomFactory.createRoom(privacy);
      Rooms.insert(room, function(error, result) {
        Router.go('room.play', {_id: result});
      });
    },
    joinRoom: function(roomCode, playerID) {
      var room = Rooms.findOne(roomCode);
      RoomFactory.addPlayer(room, playerID);
      Rooms.update(room._id, room, function(error, result) {
        Router.go('room.play', {_id: room._id});
      });
    },
    leaveRoom: function(roomCode, playerID) {
      var room = Rooms.findOne(roomCode);
      RoomFactory.removePlayer(room, playerID);
      Rooms.update(room._id, room, function(error, result) {
        Router.go('home');
      });
    }
  })
}

Meteor.methods({
  startGame: function(roomCode) {
    var room = Rooms.findOne(roomCode);
    RoomFactory.startGame(room);
    Rooms.update(room._id, room);
    return room;
  },
  deleteRoom: function(roomCode) {
    Rooms.findOne({ roomCode: roomCode });
  }
});
