const customConfig = require('@nutrizen/eslint-config-custom');
const { FlatCompat } = require('@eslint/eslintrc');

const prettierConfig = require('eslint-config-prettier');

module.exports = customConfig;

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/out/**',
      '**/dist/**',
      '**/build/**',
      '**/.DS_Store',
      '**/coverage/**',
      '**/*.min.js',
      '**/*.min.css',
      '**/public/**',
      'apps/web/.next/**',
      'packages/*/dist/**',
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
