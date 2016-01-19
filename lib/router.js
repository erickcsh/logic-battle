Router.configure({
  layoutTemplate: 'layout'
});

Router.onBeforeAction(function(pause) {
  var routeName = this.route.name;

  if(! Meteor.userId()) {
    this.render('home');

    pause();
  } else{
    this.setLayout(this.next());
  }
}, { except: ['home', 'signIn'] });

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('signIn', { path: '/signIn' });
  this.route('roomJoin', { path: 'room/join' });
  this.route('roomNew', { path: 'room/new' });
  this.route('roomPlay', {
    path: 'room/:_id', name: 'room.play',
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
