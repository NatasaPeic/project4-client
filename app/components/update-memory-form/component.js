import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],

  memory: {},

  actions: {
    update () {
      this.sendAction('updateMemory', this.get('memory'));
      // .catch(() => {
      //    this.get('flashMessages')
      //    .danger('Sorry, you must be admin to update memory!.');
      //  });

    },

    reset () {
      this.set('memory', {});
      // this.sendAction('goToMemories');
    },
  },
});
