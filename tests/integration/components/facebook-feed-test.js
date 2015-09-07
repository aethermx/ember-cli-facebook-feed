import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('facebook-feed', 'Integration | Component | facebook feed', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#facebook-feed appId='1234567890'}}
      <a>template block text</a>
    {{/facebook-feed}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
