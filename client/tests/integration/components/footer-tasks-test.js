import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

let tasksListMock = [
  EmberObject.create({
    name: 'test1',
    done: true
  }),
  EmberObject.create({
    name: 'test2',
    done: false
  }),
  EmberObject.create({
    name: 'test3',
    done: true
  })
] ;

moduleForComponent('footer-tasks', 'Integration | Component | footer tasks', {
  integration: true,
  beforeEach: function () {
    this.set('tasksList', tasksListMock);
    this.render(hbs`{{footer-tasks tasksList=tasksList}}`);
  }
});

test('it shows total number of tasks', function(assert) {

  assert.equal(this.$('.tasks-total').text().includes('3'), true);

});

test('it shows number of unfinished tasks', function(assert) {

  assert.equal(this.$('.tasks-unfinished').text().includes('1'), true);

});

test('it shows number of finished tasks', function(assert) {

  assert.equal(this.$('.tasks-finished').text().includes('2'), true);

});
