# presets
- eslint
- typescript

## Usage example

#### .eslintrc.cjs
```js
module.exports = {
  root: true,
  env: {
    "es6": true,
  },
  overrides: [
    {
      files: ['*.js', '*.ts', '*.vue'],
      extends: [
        require.resolve('presets/eslint/base.js'),
        require.resolve('presets/eslint/vue.js'),
      ],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
    },
  ],
}
```

#### tsconfig.json
```json
{
  "extends": "presets/typescript/tsconfig.client.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "typeRoots": [
      "types",
      "node_modules/@types"
    ],
    "types": [
      "node"
    ]
  },
  "include": [
    ".eslintrc.cjs",
    "**/*.js",
    "**/*.ts",
    "**/*.vue"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
