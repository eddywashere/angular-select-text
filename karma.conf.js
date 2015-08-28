// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // our app
      'src/angular-select-text.js',

      // tests
      'test/*.js',

    ],

    autoWatch: true,
    browsers: ['Chrome', 'Firefox']
  });
};
