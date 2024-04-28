/**
 * Some rules use the numeric warning configuration:
 * 0 - Rule is off
 * 1 - Warning shown when rule is broken
 * 2 - Error shown when rule is broken
 */

const rules = {
  camelcase: 'off',
  'key-spacing': 'off',
  'quote-props': 'off',
  'no-plusplus': 'off',
  'import/exports-last': 'error',
  'import/prefer-default-export': 'off',
  'newline-per-chained-call': 'off',
  'object-property-newline': 'off',
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
        {
          pattern: 'components',
          group: 'internal',
        },
        {
          pattern: 'components/**',
          group: 'internal',
        },
        {
          pattern: 'pages/**',
          group: 'internal',
        },
        {
          pattern: 'sections',
          group: 'internal',
        },
        {
          pattern: 'helpers/**',
          group: 'internal',
        },
        {
          pattern: 'public/**',
          group: 'internal',
        },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      // 'newlines-between': 'always',
      // alphabetize: {
      //   order: 'asc',
      //   caseInsensitive: true,
      // },
    },
  ],
  'comma-dangle': 'off',
  'space-before-function-paren': 'off',
  'class-methods-use-this': 'off',
  'default-param-last': 'off',
  'function-paren-newline': 'off',
  'linebreak-style': ['error', 'unix'],
  'lines-between-class-members': 'off',
  'max-len': [
    'error',
    { code: 80, tabWidth: 2, ignoreUrls: true, ignoreStrings: true },
  ],
  'no-async-promise-executor': 'off',
  'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
  'no-loop-func': 'off',
  'no-multi-spaces': 'off',
  'no-nested-ternary': 'off',
  'no-restricted-syntax': 'off',
  'no-param-reassign': 'off',
  'no-restricted-imports': [
    'error',
    {
      patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
    },
  ],
  'no-return-assign': 'off',
  'no-shadow': 'off',
  'no-unused-expressions': ['error', { allowShortCircuit: true }],
  'no-unused-vars': ['error', { 'args': 'none', ignoreRestSiblings: true }],
  'no-use-before-define': 'error',
  'object-curly-newline': 'off',
  'operator-linebreak': 'off',
  'prefer-destructuring': ['error', { object: true, array: false }],
  'react/destructuring-assignment': 'error',
  'react/display-name': 'off',
  'react/forbid-prop-types': 'off',
  'react/function-component-definition': 'off',
  'react/jsx-closing-bracket-location': 1,
  'react/jsx-first-prop-new-line': 'off',
  'react/jsx-filename-extension': 'off',
  'react/jsx-wrap-multilines': 'off',
  'react/jsx-curly-newline': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-indent-props': [2, 2],
  'react/no-unescaped-entities': 'off',
  'react/jsx-no-useless-fragment': 'off',
  'react/require-default-props': 'off',
  'react/react-in-jsx-scope': 'off',
  semi: ['error', 'never'],
  quotes: ['error', 'single'],
  strict: ['error', 'global'],
  requireConfigFile: 0,
  '@next/next/no-img-element': 'off',
  'jsx-a11y/alt-text': 'off',
  'jsx-a11y/anchor-is-valid': 'off',
  'react/jsx-max-props-per-line': [
    2,
    {
      maximum: 1,
      when: 'multiline',
    },
  ],
  // https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      'js': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never',
    },
  ],
}

const otherConfigs = {
  env: { browser: true, es6: true },
  extends: [
    'airbnb',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    requireConfigFile: false,
  },
  plugins: ['import', 'unicorn', 'react'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}

module.exports = {
  ...otherConfigs,
  rules,
}
