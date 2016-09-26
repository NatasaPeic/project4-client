import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  activate: function(){
        $('body').css('background', "url('http://i.imgur.com/EPPfWf1.jpg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append()
      },
  deactivate: function(){
        $('body').css('background', "none");

      },

  actions: {
    signOut () {
      this.get('auth').signOut()
      .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      });
      // .catch(() => {
      //   this.get('flashMessages')
      //   .danger('There was a problem. Are you sure you\'re signed-in?');
      // });
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
