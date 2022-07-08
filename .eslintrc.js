/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  env: {
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:markdown/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  globals: {
    sleep: true,
    prettyFormat: true,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'markdown',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          // add a custom message, AND tell the plugin how to fix it

          Function: {
            message: "Don't use `Function` as a type.",
            fixWith: '((...args: any[]) => any)',
          },
          '{}': {
            message: 'Use object instead',
            fixWith: 'Record<string, any>',
          },
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: ['**/*.md/*.{jsx,tsx}'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'error',
        'no-console': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**/*.md/*.{js,ts}'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',
        'no-console': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
})
