Games = {}

Games.answerQuestion = function(roomCode, playerAnswer) {
  var room = Rooms.findOne(roomCode);
  var game = room.game;
  var currentQuestion = game.questions[0];
  var currentPlayer = game.players.find(function(player) { return player.player === Meteor.userId(); });

  var selectedAnswer = currentQuestion.responses.find(function(answer) {
    return answer.answer === playerAnswer;
  });

  selectedAnswer.selected = true;
  if(selectedAnswer.correct) {
    currentPlayer.score += 50;
    game.questions.shift();

    if(game.questions.length === 0) {
      room.playing = false;
      room.displayingResults = true;
    }
  } else {
    currentPlayer.score -= 75;
  }

  return room;
}

Games.getResults = function(game) {
  var players = game.players;
  return players.sort(function(a, b) { return a.score < b.score });
}
