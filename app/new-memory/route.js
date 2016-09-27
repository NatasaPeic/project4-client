import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    createMemory (data) {
      let memory = this.get('store').createRecord('memory', data);
      return memory.save()
      .then(() => this.transitionTo('about'));
    },

    // goToMemory () {
    //   this.transitionTo('memories');
    // },
  },
});
