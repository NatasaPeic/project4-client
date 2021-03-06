import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
        // this redirects / to /dashboard
        this.transitionTo('about');
    },

  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  // activate: function(){
  //       $('body').css('background', "url('http://i.imgur.com/EPPfWf1.jpg') no-repeat center center fixed");
  //       $('body').css('background-size', 'cover');
  //       Ember.$('body').append()
  //     },
  // deactivate: function(){
  //       $('body').css('background', "none");
  //
  //     },

  actions: {
    signOut () {
      this.get('auth').signOut()
      .then(() => this.transitionTo('about'))
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      });

      this.store.unloadAll();
    },

    error (reason) {
      let unauthorized = reason.errors.some((error) =>
        error.status === '401'
      );

      if (unauthorized) {
        this.get('flashMessages')
        .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }

      return false;
    },
  },


});
