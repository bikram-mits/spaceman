var determineEmail;

determineEmail = function(user) {
  var emailAddress, services;
  if (user.emails) {
    return emailAddress = user.emails[0].address;
  } else if (user.services) {
    services = user.services;
    return emailAddress = (function() {
      switch (false) {
        case !services.facebook:
          return services.facebook.email;
        case !services.github:
          return services.github.email;
        case !services.google:
          return services.google.email;
        case !services.twitter:
          return null;
        default:
          return null;
      }
    })();
  } else {
    return null;
  }
  // if (userData.email !== null) {
  // Meteor.call('sendWelcomeEmail', userData, function(error) {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   });
  // }
};
Accounts.onCreateUser(function(options, user) {
  var userData;
  userData = {
    email: determineEmail(user),
    username: options.profile ? options.profile.name : ""
  };
  if (userData.email !== null) {
    Meteor.call('sendWelcomeEmail', userData, function(error) {
      if (error) {
        return console.log(error);
      }
    });
  }
  if (options.profile) {
    user.profile = options.profile;
  }
  console.log(userData);
  return userData;
});