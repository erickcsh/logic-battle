Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('roomJoin', { path: 'room/join' });
  this.route('roomNew', { path: 'room/new' });
  this.route('roomWait', {
    path: 'room/:_id', name: 'room.wait',
    data: function() {
      var room = Rooms.findOne(this.params._id);
      if(room) {
        room.players = room.players.map(function(id) { return Meteor.users.findOne(id); });
        return room;
      }
      return {};
    }
  });
});
