
Meteor.publish('poll', function(_id){
  return Polls.find(_id);
});