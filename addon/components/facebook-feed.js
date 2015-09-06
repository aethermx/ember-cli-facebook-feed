import Ember from 'ember';
import layout from '../templates/components/facebook-feed';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['facebook_feed'],

  _insertedNode: null,

  didInsertElement: function() {
    let elementId = this.get('elementId');
    Ember.assert('The first children must be div.fb-page',
                 Ember.$(elementId + ' > div.fb-page'));

    let insertedNode = null;
    /* Widget JS provided by Facebook start */
    /*jshint ignore:start*/
    (function(d, s, id) {
      var js,
          fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) {
        Ember.Logger.error('A facebook-jssdk node is already present.'); // custom
        return;
      }

      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=759777254104976";
      insertedNode = fjs.parentNode.insertBefore(js, fjs); // custom
    }(document, 'script', 'facebook-jssdk'));
    /*jshint ignore:end*/
    /* Widget JS provided by Facebook end */

    Ember.assert('A twitter-wsj node was inserted.', insertedNode);

    this._insertedNode = insertedNode;
  },

  willClearRender: function() {
    //Ember.$(this._insertedNode).remove();
  } 

});
