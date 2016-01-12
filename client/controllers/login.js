Template.signIn.events({
  'click button': function (evt, template) {
    evt.preventDefault();
    Accounts.createUser({
      email: template.find('#su-email').value,
      username: template.find('#su-username').value,
      password: template.find('#su-password').value
    }, function() {
      Router.go('home');
    });
  }
})

Template.login.events({
  'click button': function (evt, template) {
    evt.preventDefault();
    Meteor.loginWithPassword(
      template.find('#li-username').value,
      template.find('#li-password').value
    );
  }
});

Template.logout.events({
  'click button': function (evt, template) {
    evt.preventDefault();
    Meteor.logout(function(err) {
      Router.go('home');
    });
  }
});
