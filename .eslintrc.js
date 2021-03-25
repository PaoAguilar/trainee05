module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'react/jsx-wrap-multilines': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    // 'react/prop-types': 0,
    semi: 'error',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
  },
};
