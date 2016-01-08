Template.roomNew.events({
  'click #create-game': function(evt, template) {
    evt.preventDefault();
    var privacy = template.find('input[name=privacy]:checked').value
    Meteor.call('createRoom', Meteor.userId(), privacy, function(error, result) {
      Router.go('room.play', {_id: result});
    });
  }
})

Template.roomJoin.events({
  'click #search': function(evt, template) {
    evt.preventDefault();
    var roomCode = template.find('#room-code').value;
    Meteor.call('joinRoom', roomCode, Meteor.userId(), function(error, result) {
      Router.go('room.play', {_id: roomCode});
    });
  }
});

Template.roomWait.events({
  'click #start-game': function(evt, template) {
    evt.preventDefault();
    Meteor.call('startGame', template.data._id);
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

Template.roomGame.helpers({
  currentQuestion: function() {
    var room = this;
    var game = room.game;
    return game.questions[0];
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

