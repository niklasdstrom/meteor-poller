/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/
Router.route('/', {name: 'poll.create'});
Router.route('/polls/:_id', {name: 'poll.show'});
Router.route('/polls/:_id/results', {name: 'poll.result'});
