module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
      'react',
  ],
  rules: {
    'indent': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/prop-types': [0],
    'react/no-array-index-key': [0],
    'react/forbid-prop-types': [0],
    'react/no-danger': [0],
    'react/require-default-props': [0],
    'no-shadow': [0],
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/label-has-associated-control': [2, {'assert': 'either'}],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-fragments': ['error', 'element'],
  },
};
