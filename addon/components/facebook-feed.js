import Ember from 'ember';
import layout from '../templates/components/facebook-feed';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['facebook_feed'],

  appId: null,

  _fbInit: Ember.on('init', function() {
    let appId = this.get('appId');

    Ember.assert('A numeric value was not passed for appId.',
                 appId && !isNaN(appId));   

    window.fbAsyncInit = function() {
      /* SDK completed loading */
      window.FB.init({
        appId: appId,
        xfbml: true,
        version: 'v2.4'
      });
    };
  }),

  didInsertElement: function() {
    let elementId = this.get('elementId');
    Ember.assert('The first children must be a <div.fb-page>',
                 Ember.$(elementId + ' > div.fb-page'));

    /* Plugin JS provided by Facebook start */
    /*jshint ignore:start*/
    // custom line:
    let self = this;
    (function(d, s, id) {
      var js,
          fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) {
        // custom line:
        window.FB.XFBML.parse(self.get('element'));
        return;
      }

      js = d.createElement(s);
      js.id = id;
      // custom line:
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    /*jshint ignore:end*/
    /* Plugin JS provided by Facebook end */
  }

});
