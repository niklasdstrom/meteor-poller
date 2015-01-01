Meteor.methods({
  '/polls/create': function(poll){
    // method for creating a poll
    return Polls.insert(poll);
  },
  '/polls/vote': function(pollId, optionId){
    // method for creating a poll
    // TODO : validate that pollId is a valid poll and that optionId is a valid option for that poll
    return Answers.insert({
      pollId: pollId,
      optionId: optionId
    });
  }
});
