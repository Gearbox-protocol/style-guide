const name = "eslint-config";
const srcRoot = `packages/${name}`;

module.exports = {
  branches: ["main"],
  commitPaths: [`${srcRoot}/*`],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: [`${srcRoot}/package.json`]
      }
    ]
  ]
};
