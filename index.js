/* jshint node: true */
'use strict';

module.exports = {

  name: 'ember-cli-facebook-feed',

  contentFor: function(type, config) {
    switch(type) {
      case 'body':
        return '<div id=\"fb-root\"></div>'; 
      default:
        return;
    }
  }

};
