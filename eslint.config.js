export default [
  {
    files: ['**/*.js'],
    languuageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
  },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single']
    }
  }
];