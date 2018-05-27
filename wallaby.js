module.exports = function (wallaby) {
  return {
    files: ['src/**/*.*', '!src/**/*.spec.js'],

    tests: ['src/**/*.spec.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
      '**/*.vue': require('wallaby-vue-compiler')(wallaby.compilers.babel({}))
    },

    testFramework: 'jest',

    hints: {
      ignoreCoverage: /no coverage/
    },

    setup: function (wallaby) {
      const jestConfig = require('./package.json').jest;
      wallaby.testFramework.configure(jestConfig);
    },

    debug: true
  };
};
