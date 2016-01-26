/*
 *
 * Validates account fields: Username, Email, Password
 *
 */

AccountsValidator = {}

AccountsValidator.validEmail = function(email) {
  if(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  return false;
}

AccountsValidator.validUsername = function(username) {
  return username && username.length > 0 && username.length <= 16;
}

AccountsValidator.validPassword = function(password) {
  return password && password.length > 0;
}
