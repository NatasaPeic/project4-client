import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      this.sendAction('deleteMemory', this.get('memory'));
    },
  },
});
