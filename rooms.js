Rooms = new Meteor.Collection('rooms');

if(Meteor.isServer) {
  Meteor.publish('rooms', function() {
    return Rooms.find({ playing: false, full: false });
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
    getRandomRoom: function() {
      // TODO remove rooms where user is present
      return Rooms.findOne({ playing: false, full: false });
    }
  });
}

if(Meteor.isClient) {
  Meteor.subscribe('rooms');

  Meteor.methods({
    createRoom: function(playerID, privacy) {
      var room = RoomFactory.createRoom(privacy);
      Rooms.insert(room, function(error, result) {
        Router.go('room.wait', {_id: result});
      });
    },
    joinRoom: function(roomCode, playerID) {
      var room = Rooms.findOne(roomCode);
      RoomFactory.addPlayer(room, playerID);
      Rooms.update(room._id, room, function(error, result) {
        Router.go('room.wait', {_id: room._id});
      });
    }
  })
}

Meteor.methods({
  deleteRoom: function(roomCode) {
    Rooms.findOne({ roomCode: roomCode });
  },
  leaveRoom: function(roomCode, playerID) {
  }
});
