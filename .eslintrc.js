module.exports = {
  extends: [
    "airbnb",
    "plugin:prettier/recommended"
  ],
  env: {
    node: true,
    browser: true,
    jquery: true,
    mocha: true,
    commonjs: true,
    es6: true
  },
  rules: {
    "linebreak-style": 0
  }
};
