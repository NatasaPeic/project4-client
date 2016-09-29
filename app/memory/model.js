import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  cohort: DS.attr('string'),
  date: DS.attr('string'),
  user: DS.belongsTo('user')
});
