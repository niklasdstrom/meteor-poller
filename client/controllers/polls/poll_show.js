PollShowController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('poll', this.params._id)
  },

  data: function () {
    return Polls.findOne(this.params._id);
  },

  action: function () {
    this.render();
  }
});