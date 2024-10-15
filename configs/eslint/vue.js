module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    extraFileExtensions: ['.vue'],
  },
  env: {
    es2024: true,
  },
  reportUnusedDisableDirectives: true,
  globals: {
    process: true,
  },
  settings: {
    'import/resolver': { node: {} },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: ['import', '@typescript-eslint', 'vue'],
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    require.resolve('./rules/correlation'),
    require.resolve('./rules/best-practice'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/import'),
    require.resolve('./rules/vue'),
  ],
}
