/*
 *
 * Creates the room model and performs actions on them.
 * room = {
 *  privateRoom: boolean,
 *  players: [1..4],
 *  playersCount: integer,
 *  playing: boolean,
 *  displayingResults: boolean,
 *  full: boolean,
 *  game: Game
 * }
 *
 * createRoom: creates a new Room instance
 * addPlayer: adds a player to the room if not full
 * removePlayer: removes a player from the room
 * startGame: create a new game instance and associates it to the room,,
 *            start the game
 *
 */

RoomFactory = {}

RoomFactory.createRoom = function(privacy) {
  var privateRoom = privacy === 'private';

  var room = {
    privateRoom: privateRoom,
    players: [],
    playersCount: 0,
    playing: false,
    displayingResults: false,
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
  room.players = _.without(room.players, playerId);
  room.playersCount = room.players.length;

  if(room.playersCount != 4) { room.full = false; }
}

RoomFactory.startGame = function(room) {
  if(room.playersCount > 1) {
    var game = GameFactory.createGame(room.players);
    room.game = game;
    room.playing = true;
    room.displayingResults = false;
    return true;
  }
  return false;
}

