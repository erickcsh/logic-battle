Template.roomNew.events({
  'click #create-game': function(evt, template) {
    evt.preventDefault();
    var privacy = template.find('input[name=privacy]:checked').value
    Meteor.call('createRoom', Meteor.userId(), privacy, function(error, result) {
      Router.go('room.wait', {_id: result});
    });
  }
})

Template.roomJoin.events({
  'click #search': function(evt, template) {
    evt.preventDefault();
    var roomCode = template.find('#room-code').value;
    Meteor.call('joinRoom', roomCode, Meteor.userId(), function(error, result) {
      Router.go('room.wait', {_id: roomCode});
    });
  }
});

