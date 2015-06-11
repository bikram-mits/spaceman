Things = new Mongo.Collection('things');

Things.allow({
  insert: function(userId, thing) {
    return true;
  },
  update: function(userId, thing, fields, modifier) {
    return true;
  },
  remove: function(userId, thing) {
    return true;
  }
});
