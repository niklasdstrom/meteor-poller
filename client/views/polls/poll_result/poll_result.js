/*****************************************************************************/
/* PollResult: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PollResult.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PollResult.helpers({
  sortedOptions: function(){
    var options = this.options;
    return _.sortBy(options, function(option){
      return -option.votes;
    });
  }
});

/*****************************************************************************/
/* PollResult: Lifecycle Hooks */
/*****************************************************************************/
Template.PollResult.created = function () {
};

Template.PollResult.rendered = function () {
};

Template.PollResult.destroyed = function () {
};