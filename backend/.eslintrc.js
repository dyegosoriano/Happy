module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'class-methods-use-this': 'off',
    // evitando os erros de importação de arquivos typescript
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
