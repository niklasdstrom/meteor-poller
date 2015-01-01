/*****************************************************************************/
/* PollCreate: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PollCreate.events({

  'click [name="submit"]': function(e, t){
    // submit. 
    var poll = {
      question: t.find('[name="question"]').value,
      options: []
    };

    _.each(t.findAll('[name="option"]'), function(option, i){
      poll.options.push({title: option.value});
    })

    Meteor.call('/polls/create', poll, function(err, result){
      if(!err){
        // success;
        Router.go('/polls/'+result);
      }
    });
  }

});

Template.PollCreate.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PollCreate: Lifecycle Hooks */
/*****************************************************************************/
Template.PollCreate.created = function () {
};

Template.PollCreate.rendered = function () {
};

Template.PollCreate.destroyed = function () {
};