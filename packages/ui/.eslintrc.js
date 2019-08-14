module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'indent': 'off',
    'properties': 'never'
  }
}