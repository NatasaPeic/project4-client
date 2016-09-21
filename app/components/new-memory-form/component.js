import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],

  memory: {},

  actions: {
   submit () {
     this.sendAction('createMemory', this.get('memory'));
   },

   reset () {
     this.set('memory', {});
     this.sendAction('goToMemory');
   },
 },
});
