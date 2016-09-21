import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-memory-name', 'Integration | Component | new memory name', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-memory-name}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-memory-name}}
      template block text
    {{/new-memory-name}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
