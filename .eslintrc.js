module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jsx-a11y', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/require-default-props': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          ['builtin', 'external'],
          ['parent', 'sibling', 'index'],
        ],
        pathGroupsExcludedImportTypes: [],
        warnOnUnassignedImports: true,
        pathGroups: [
          {
            pattern: '*.{css,scss}',
            group: 'sibling',
            position: 'after',
            patternOptions: { matchBase: true },
          },
        ],
      },
    ],
    semi: 1,
    'react/function-component-definition': "off",
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.jsx', '.js'] }],
    'import/extensions': [1, 'never'],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['warn', 160],
    'comma-dangle': 'off',
    'object-curly-newline': [0, 'never'],
    // https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
};