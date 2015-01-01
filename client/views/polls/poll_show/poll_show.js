/*****************************************************************************/
/* PollShow: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PollShow.events({
   'click [name="submit"]': function(e, t){
      var selectedId = t.find('paper-radio-group').selected;
      var successUrl = '/polls/'+this._id+'/results'

      Meteor.call('/polls/vote', this._id, selectedId, function(err, result){
        if (!err){
          // success
          Router.go(successUrl);
        }
      });
   }
});

Template.PollShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PollShow: Lifecycle Hooks */
/*****************************************************************************/
Template.PollShow.created = function () {
};

Template.PollShow.rendered = function () {
};

Template.PollShow.destroyed = function () {
};