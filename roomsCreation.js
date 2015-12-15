RoomFactory = {}

RoomFactory.createRoom = function(privacy) {
  var privateRoom = privacy === 'private';

  var room = {
    privateRoom: privateRoom,
    players: [],
    playersCount: 0,
    playing: false,
    full: false,
    game: null
  };

  RoomFactory.addPlayer(room, Meteor.userId());

  return room;
};

RoomFactory.addPlayer = function(room, playerId) {
  room.players.push(playerId);
  room.playersCount++;

  if(room.playersCount == 4) { room.full = true; }
}

RoomFactory.removePlayer = function(room, playerId) {
  room.players.playerId;
  room.playersCount--;

  if(room.playersCount != 4) { room.full = false; }
}
