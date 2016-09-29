import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    createMemory (data) {
      let memory = this.get('store').createRecord('memory', data);
      console.log(data);
      return memory.save()
      .then(() => this.transitionTo('about'));
    },
  },
});
