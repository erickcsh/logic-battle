/*
 *
 * Template actions for room related views
 *
 */

Template.roomNew.events({
  'click #create-game': function(evt, template) {
    evt.preventDefault();
    var privacyField = template.find('input[name=privacy]:checked')
    var privacy = (privacyField ? privacyField.value : '')
    Meteor.call('createRoom', Meteor.userId(), privacy, function(error, result) {
      if(error) {
        Meteor.messageHelpers.showMessage(error.reason);
      } else {
        Router.go('room.play', {_id: result});
      }
    });
  }
})

Template.roomJoin.events({
  'click #search': function(evt, template) {
    evt.preventDefault();
    var roomCode = template.find('#room-code').value;
    Meteor.call('joinRoom', roomCode, Meteor.userId(), function(error, result) {
      if(error) {
        Meteor.messageHelpers.showMessage(error.reason);
      } else {
        Router.go('room.play', {_id: roomCode});
      }
    });
  }
});

Template.roomWait.events({
  'click #start-game': function(evt, template) {
    evt.preventDefault();
    Meteor.call('startGame', template.data._id, function(error, result) {
      if(error) {
        Meteor.messageHelpers.showMessage(error.reason);
      }
    });
  },
  'click #leave-room': function(evt, template) {
    evt.preventDefault();
    Meteor.call('leaveRoom', template.data._id, Meteor.userId());
  }
});

Template.questionAnswer.events({
  'click button': function(evt, template) {
    evt.preventDefault();
    var roomId = Template.parentData()._id;
    Meteor.call('answerQuestion', roomId, template.data.answer);
  }
});

Template.roomGame.events({
  'click .questionModal': function(evt, template) {
    Session.set("seingQuestion", false);
  },
  'click .questionContainer': function(evt, template) {
    Session.set("seingQuestion", true);
  }
});

Template.roomGame.helpers({
  currentQuestion: function() {
    var room = this;
    var game = room.game;
    return game.questions[0];
  },
  seeQuestion: function() {
    return Session.get("seingQuestion");
  },
  reducedQuestion: function(question) {
    if(question.length > 93) {
      return question.substr(0, 70) + "... Click to read more.";
    }
    return question;
  }
});

Template.roomResults.helpers({
  winner: function() {
    var room = this;
    return Games.getResults(room.game)[0];
  },
  sortResults: function() {
    var room = this;
    return Games.getResults(room.game);
  },
  secondsLeft: function() {
    return Session.get('timer');
  }
});

Template.roomResults.events({
  'click #leave-room': function(evt, template) {
    evt.preventDefault();
    Meteor.call('leaveRoom', template.data._id, Meteor.userId());
  }
});

Template.roomResults.rendered = function() {
  var timer = 5;
  Session.set('timer', timer);
  var interval = setInterval(function() {
    if(timer > 0) {
      timer--;
      Session.set('timer', timer);
    } else {
      clearInterval(interval);
    }
  }, 1000);
};

