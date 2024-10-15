module.exports = {
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js built-in modules
          'external', // Packages
          'parent', // Relative parent
          'sibling', // Relative sibling
          'index', // Relative index
          'object',
          'internal', // Aliased modules
          'type',
        ],
        pathGroups: [
          { pattern: '@/**', group: 'index' },
          { pattern: '~/**', group: 'index' },
        ],
        'newlines-between': 'ignore',
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: false,
        },
      },
    ],

    'import/first': 'error',
    'import/exports-last': 'off',
    'import/newline-after-import': 'error',
    'import/no-deprecated': 'off',
    'import/namespace': 'off',
    'import/no-empty-named-blocks': 'error',
    'import/no-unresolved': 'off',
    'import/no-cycle': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': false }],
  },
}
