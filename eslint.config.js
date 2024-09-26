const globals = require('globals');

export default [
  {
    files: ['src/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
];
