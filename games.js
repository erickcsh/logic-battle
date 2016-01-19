/*
 *
 * Game model.
 * answerQuestion: Determine the actions that ocurred once a user answer a
 * question. If the answer is correct then the user score 50 points and
 * the next question is shown. If it is the last question the game is
 * finished and the room is set as displaying results. If answer is
 * icorrect the user scores -75 points and the option is removed from
 * posible answers
 *
 * getResults: sorts the users based on their score at the end of the
 * game
 *
 */

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
