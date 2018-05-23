module.exports = function (wallaby) {
  return {
    files: ['src/**/*.*'],

    tests: ['test/**/*.spec.js'],

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
      jestConfig.moduleNameMapper = {
        '^@/(.*)$': wallaby.projectCacheDir + '/src/$1'
      };
      wallaby.testFramework.configure(jestConfig);
    },

    debug: true
  };
};
