import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-memory-form', 'Integration | Component | update memory form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{update-memory-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#update-memory-form}}
      template block text
    {{/update-memory-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
