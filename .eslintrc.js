module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'eol-last': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-mixed-operators': 'off',
    // 'no-new': 'off',
    // 'no-void': 'off',
    // 'no-compare-neg-zero': 'off',
    // eqeqeq: 'off',
    // 'no-func-assign': 'off',
    // 'no-proto': 'off',
    // 'no-undef': 'off',
    // 'no-unused-expressions': 'off',
    // 'no-unused-vars': 'off',
    // 'no-global-assign': 'off',
    // 'no-return-assign': 'off'
  }
}
