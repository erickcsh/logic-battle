Template.optionsList.events({
  'click #play-now': function(evt, template) {
    evt.preventDefault();
    Meteor.call('getRandomRoom', function(err, result) {
      if(result) {
        Meteor.call('joinRoom', result._id, Meteor.userId(), function(error, result) {
          Router.go('room.wait', {_id: result._id});
        });
      }
    });
  }
});
