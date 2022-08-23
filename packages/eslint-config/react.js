const base = require("./index");

module.exports = {
  ...base,
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    ...base.rules,
    "react/no-unused-prop-types": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/no-array-index-key": ["off"],
    "react/require-default-props": ["off"],
    "react/jsx-no-useless-fragment": ["off"],
  },
};
