export default Ember.Route.extend({
  activate: function(){
        $('body').css('background', "url('http://i.imgur.com/XnOLuOu.jpg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append()
      },
  deactivate: function(){
        $('body').css('background', "none");

      },

});
