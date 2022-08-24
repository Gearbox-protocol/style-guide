module.exports = {
  plugins: ["simple-import-sort", "unused-imports"],
  extends: [
    "alloy",
    "alloy/typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  env: {
    node: true,
  },
  rules: {
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    complexity: "off",
    "max-params": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
