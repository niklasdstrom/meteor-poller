Meteor.methods({
  '/polls/create': function(poll){
    // method for creating a poll
    return Polls.insert(poll);
  }
});
