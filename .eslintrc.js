module.exports = {
  extends: 'airbnb',
  root: true,
  env: {
    // browser: true,
    commonjs: true,
    // es2021: true,
    node: true
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  globals: {
    it: true,
    expect: true,
    describe: true
  },
  rules: {
    // semi: ['error', 'awlays']
    'comma-dangle': ['error', 'never'],
    'func-names': 'off'
  }
};
