Meteor.messageHelpers = {
  showMessage: function(message) {
    $('.toastMessage p').text(message);
    $('.toastMessage').fadeIn('slow');
    setTimeout(function() {
      $('.toastMessage').fadeOut('slow');
    }, 3000);
  }
}

