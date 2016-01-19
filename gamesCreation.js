/*
 *
 * Builds the Game object  Associates random questions to it
 * game = {
 *  questions: [10] { question: string, responses: [5]},
 *  players: [1..4] { player: player, score: int }
 * }
 *
 */

GameFactory = {}

GameFactory.createGame = function(players) {
  var questions = getQuestions();
  var arrangedPlayers = players.map(function(player) { return { player: player, score: 0 }; });

  return {
    questions: questions,
    players: arrangedPlayers
  }
}

function getQuestions() {
  var questions = Questions.find({}, { limit: 2 });
  var arrangedQuestions = questions.map(function(question) {
    var responses = [{ answer: question.correctAnswer, selected: false, correct: true }];
    var incorrectResponses = question.otherAnswers.forEach(function(answer) {
      responses.push({ answer: answer, selected: false, correct: false });
    });
    responses = _.shuffle(responses);
    return { question: question.question, responses: responses }
  })

  return arrangedQuestions;
}
