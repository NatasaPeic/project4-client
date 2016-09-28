

export default Ember.Route.extend({
  activate: function(){
        $('body').css('background', "url('http://i.imgur.com/ZZnpGYB.jpg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append()
      },
  deactivate: function(){
        $('body').css('background', "none");

      },
      model() {
        return this.get('store').findAll('memory');
      },
      actions: {

        deleteMemory (memory) {
          memory.destroyRecord()
          .then(() => this.transitionTo('admin-memories'));
        },

      },


});
