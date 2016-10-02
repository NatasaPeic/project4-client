
import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  activate: function(){
        $('body').css('background', "url('https://i.imgur.com/ZZnpGYB.jpg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append()
      },
  deactivate: function(){
        $('body').css('background', "none");
      },


model: function(params){
    console.log(params);
    return this.get('ajax').request(`/memories?all=true`, {  method: 'GET' })
    .then((data) => {
      console.log(data);
      return data.memories;
    });
  },
});
