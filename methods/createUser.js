if (Meteor.isServer){


 Meteor.methods({

  'createNewUser': function(options){
    console.log(options);
    console.log('i m logged here...')
// 
    var id = Accounts.createUser(options)
    return id;
  }
 })
}