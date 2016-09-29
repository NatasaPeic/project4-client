import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
        $('body').css('background', "url('http://i.imgur.com/EPPfWf1.jpg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append()
      },
  deactivate: function(){
        $('body').css('background', "none");

      },
      model() {
        return this.get('store').findAll('memory');
  
},
});
