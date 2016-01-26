/*
 *
 * Subscribes the clients to the Users collection fields published by
 * the server
 *
 */

if(Meteor.isServer) {
  Meteor.publish('users', function() {
    return Meteor.users.find({}, {fields: { username: 1} });
  });
}

if(Meteor.isClient) {
  Meteor.subscribe('users');
}
