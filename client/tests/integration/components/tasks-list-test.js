import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tasks-list', 'Integration | Component | tasks list', {
  integration: true
});

test('it renders empty list', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tasks-list}}`);

  assert.equal(this.$(".empty-message").text().includes('לא'), true);
});
