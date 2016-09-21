import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('memory', params.id);
  },

  actions: {

    deleteMemory (memory) {
      memory.destroyRecord()
      .then(() => this.transitionTo('all-memories'));
    },

    updateMemory (memory) {
      this.transitionTo('update-memory', memory);
    },
  },
});
