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
  settings: {
    ...base.settings,
    react: {
      version: "detect",
    },
  },
};
