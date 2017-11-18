// Karma configuration
// Generated on Sat Nov 11 2017 16:10:56 GMT+0100 (CET)


var webpackConf = require('./node_modules/laravel-mix/setup/webpack.config.js');
delete webpackConf.entry

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    /*
    files: [
      'tests/lib.dist.js',
      'tests/testsPartie.js'
    ],
    */
    files: [
        {pattern: 'tests/testsPartie.js', watched: false},
        {pattern: 'tests/testsDe.js', watched: false},
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    webpackMiddleware: {
        noInfo: true,
        stats: 'errors-only'
    },
    webpack: webpackConf,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],
    reporters: ['progress'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    preprocessors: {
        'partie/Partie.js': ['webpack', 'babel'],
        'tests/testsPartie.js': ['babel', 'webpack'],
        'partie/De.js': ['webpack', 'babel'],
        'tests/testsDe.js': ['babel', 'webpack'],
    },
  })
}
