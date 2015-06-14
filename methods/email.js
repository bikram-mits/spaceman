Meteor.methods({
  sendWelcomeEmail: function(userData) {
    var emailTemplate;
    check(userData, {
      email: String,
      name: String
    });
    SSR.compileTemplate('welcomeEmail', Assets.getText('email/welcome-email.html'));
    emailTemplate = SSR.render('welcomeEmail', {
      email: userData.email,
      name: userData.name !== "" ? userData.name : null,
      url: "http://localhost:3000"
    });
    return Email.send({
      to: userData.email,
      from: "The Meteor Chef - Demo <demo@themeteorchef.com>",
      subject: "Welcome aboard, team matey!",
      html: emailTemplate
    });
  }
});
