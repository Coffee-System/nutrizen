// eslint.config.js
const { FlatCompat } = require('@eslint/eslintrc');
const prettierConfig = require('eslint-config-prettier');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '**/.DS_Store',
      '**/coverage/**',
      '**/*.min.js',
      '**/*.min.css',
      'public/**',
    ],
  },
  ...compat.extends('next/core-web-vitals'),

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',

      'object-shorthand': 'error',
      'prefer-template': 'error',
      'no-duplicate-imports': 'error',

      '@next/next/no-html-link-for-pages': 'off',
    },
  },

  prettierConfig,
];
