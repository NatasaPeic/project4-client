import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],

  memory: {},

  actions: {
    update () {
      this.sendAction('updateMemory', this.get('memory'));

    },

    reset () {
      this.set('memory', {});
      this.sendAction('goToMemories');
    },
  },
});
