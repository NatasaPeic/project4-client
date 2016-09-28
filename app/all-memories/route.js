
import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  sortProps: ['memory'],

   memory: Ember.computed('content', function(){
       return this.get('content').sortBy('memory');
   }),
  activate: function(){
        $('body').css('background', "url('http://i.imgur.com/ZZnpGYB.jpg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append()
      },
  deactivate: function(){
        $('body').css('background', "none");

      },
      // model() {
      //   return this.get('store').findAll('memory');
      // },

model: function(params){
    // this.set('memories', params.memory);
    console.log(params);
    return this.get('ajax').request(`/memories?all=true`, {  method: 'GET' })
    .then((data) => {
      console.log(data);
      return data.memories;
    });

  },


});
