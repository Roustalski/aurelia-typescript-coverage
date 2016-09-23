"use strict";
const path = require('path');
const project = require('./aurelia_project/aurelia.json');
const tsconfig = require('./tsconfig.json');

let testSrc = [
  { pattern: project.unitTestRunner.source, included: false },
  'test/aurelia-karma.js'
];

let output = project.platform.output;
let appSrc = project.build.bundles.map(x => path.join(output, x.name));
let entryIndex = appSrc.indexOf(path.join(output, project.build.loader.configTarget));
let entryBundle = appSrc.splice(entryIndex, 1)[0];
let files = [entryBundle].concat(testSrc).concat(appSrc);

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [project.testFramework.id],
    files: files,
    exclude: [],
    preprocessors: {
      [project.unitTestRunner.source]: [project.transpiler.id],
      'scripts/app-bundle.js': ['coverage'],
    },
    typescriptPreprocessor: {
      typescript: require('typescript'),
      options: tsconfig.compilerOptions,
    },
    reporters: ['progress', 'coverage', 'karma-remap-istanbul'],
    coverageReporter: {
      dir: 'coverage/',
      type: 'html',
    },
    remapIstanbulReporter: {
      reports: {
        html: "coverage/html-report",
        json: "coverage/report.json",
        lcovonly: "coverage/lcov-report.info",
        cobertura: "coverage/cobertura"
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
