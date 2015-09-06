/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/ember-cli-facebook-feed/';
  }

  ENV.contentSecurityPolicy = {
    'script-src': [
      "'self'",
      'http://connect.facebook.net',
      'https://connect.facebook.net'],
    'frame-src': [
      'http://static.ak.facebook.com',
      'http://www.facebook.com',
      'https://www.facebook.com',
      'https://s-static.ak.facebook.com'],
     'style-src': [
       "'self'",
       "'sha256-brx_rg0MKs7Ak8cpHylVraZAxpjgd2vlxY-XpfuTR20='"]
  };

  return ENV;
};
