const path = require('path')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next',
  ],
  settings: {
    next: {
      // relative path is based on the child `.eslintrc` file,
      // for `apps/website`, we need to set to `../../apps/website`.
      rootDir: path.join(__dirname, 'apps/website'),
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [{ pattern: '@turbospace/**', group: 'internal' }],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
}
