import DS from 'ember-data';
// import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  cohort: DS.attr('string'),
  user: DS.belongsTo('user')
});
