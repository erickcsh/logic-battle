/*
 *
 * Template actions for sign in/log out/log in Views.
 * In signIn template when button is clicked an account is created and
 * logged in with the fields values if they are valid. If not, error message is shown
 *
 */

Template.signIn.events({
  'click button': function (evt, template) {
    evt.preventDefault();
    var email = template.find('#su-email').value;
    var username = template.find('#su-username').value;
    var password = template.find('#su-password').value;
    if(!AccountsValidator.validEmail(email)) {
      Meteor.messageHelpers.showMessage('Email format invalid.');
    } else if(!AccountsValidator.validUsername(username)) {
      Meteor.messageHelpers.showMessage('Username inavalid. It has to be shorter than 16 characters');
    } else if(!AccountsValidator.validPassword(password)) {
      Meteor.messageHelpers.showMessage('Password invalid');
    } else {
      createAccount(email, username, password);
    }
  }
})

var createAccount = function(email, username, password) {
  Accounts.createUser({
    email: email,
    username: username,
    password: password
  }, function(err) {
    if(err) {
      Meteor.messageHelpers.showMessage('Account cannot be created. Plase review the data and try again');
    } else {
      Router.go('home');
    }
  });
}

Template.login.events({
  'click button': function (evt, template) {
    evt.preventDefault();
    Meteor.loginWithPassword(
      template.find('#li-username').value,
      template.find('#li-password').value,
      function(err) {
        if(err) {
          Meteor.messageHelpers.showMessage('Username and password are invalid');
        }
      }
    );
  }
});

Template.logout.events({
  'click button': function (evt, template) {
    evt.preventDefault();
    Meteor.logout(function(err) {
      if(err) {
        Meteor.messageHelpers.showMessage('Failed to log out');
      } else {
        Router.go('home');
      }
    });
  }
});
