var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    exclude: [ ],

    files: [
      {pattern: './config/karma.entry.js', watched: false}
    ],

    preprocessors: {
      './config/karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress',  'mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'PhantomJS'/*'Chrome'*/],
    singleRun: true
  };

  config.set(_config);
};
