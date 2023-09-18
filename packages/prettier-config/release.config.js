const name = "prettier-config";
const srcRoot = `packages/${name}`;

module.exports = {
  branches: [
    {
      name: "main",
    },
  ],
  commitPaths: [`${srcRoot}/*`],
  tagFormat: name + "-v${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        pkgRoot: srcRoot,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: [`${srcRoot}/package.json`],
      },
    ],
  ],
};
