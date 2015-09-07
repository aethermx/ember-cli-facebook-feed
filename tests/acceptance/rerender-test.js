import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | rerender', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    expectComponent('facebook-feed');
    expectElement('.facebook_feed > .fb-page');
  });
});

test('visiting /no-feed first', function(assert) {
  visit('/no-feed').then(function() {
    visit('/');
  });

  andThen(function() {
    assert.equal(currentURL(), '/');
    expectComponent('facebook-feed');
    expectElement('.facebook_feed > .fb-page');
  });
});

test('visiting /no-feed second', function(assert) {
  visit('/').then(function() {
    return visit('/no-feed');
  }).then(function() {
    visit('/');
  });

  andThen(function() {
    assert.equal(currentURL(), '/');
    expectComponent('facebook-feed');
    expectElement('.facebook_feed > .fb-page');
    /*
      TODO:
      It would be ideal to have:
      expectElement('.facebook_feed > .fb_iframe_widget');
    */
  });
});
