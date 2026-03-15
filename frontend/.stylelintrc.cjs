module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  rules: {
    'no-empty-source': null,
    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 4,
    'declaration-no-important': true,
    'color-hex-length': 'short'
  }
};
