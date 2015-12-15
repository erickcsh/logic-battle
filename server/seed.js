Seeds = {};

var questions = [
  { question: '2 + 2', correctAnswer: 4, otherAnswers: [1, 5, 8, 9] },
  { question: '8 + 2', correctAnswer: 10, otherAnswers: [11, 5, 8, 9] },
  { question: '2 + 5', correctAnswer: 7, otherAnswers: [1, 15, 8, 9] }
]

Seeds.run = function() {
  questions.forEach(function(question) {
    Questions.insert(question);
  });
};

Meteor.startup(function () {
  if (Questions.find().count() === 0) {
    Seeds.run();
  }
});
