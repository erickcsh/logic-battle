/*
 *
 * Helper to show username from the userId on templates
 *
 */

Handlebars.registerHelper('userName', function (userId) {
  var user = Meteor.users.findOne(userId);
  if (_.isUndefined(user) || _.isNull(user)) {
    return new Handlebars.SafeString("");
  }
  return user.username;
});
