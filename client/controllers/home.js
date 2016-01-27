/*
 *
 * Template actions for home View.
 * When #play-now is clicked, the user is added, if available, to a room
 *
 */

Template.optionsList.events({
  'click #play-now': function(evt, template) {
    evt.preventDefault();
    Meteor.call('getRandomRoom', function(err, result) {
      if(result) {
        Meteor.call('joinRoom', result._id, Meteor.userId(), function(error, res) {
          if(err) {
            Meteor.messageHelpers.showMessage('Failed to join room. Plase try again');
          } else {
            Router.go('room.play', {_id: result._id});
          }
        });
      } else if(err) {
        Meteor.messageHelpers.showMessage(err.reason);
      }
    });
  }
});

Template.optionsList.helpers({
  availableRooms: function() {
    return !!Rooms.findOne({ playing: false, full: false, privateRoom: false, players: {$nin: [this.userId] } });
  }
});
