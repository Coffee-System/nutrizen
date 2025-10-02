module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'ui',
        'components',
        'constants',
        'types',
        'tokens',
        'web',
        'infra',
        'docs',
      ],
    ],
  },
};
