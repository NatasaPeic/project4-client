import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-memory-cohort', 'Integration | Component | new memory cohort', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-memory-cohort}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-memory-cohort}}
      template block text
    {{/new-memory-cohort}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
