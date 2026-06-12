# `@gearbox-protocol/style-guide`

Monorepo with various code-style presets for gearbox projects

- Prettier
- Eslint
- Stylelint
- Biome

## Commit messages and releases

Releases are fully automated: every push to `main` (and prereleases on `next`) runs [multi-semantic-release](https://github.com/anolilab/multi-semantic-release), which versions and publishes each package in `packages/*` independently. There is nothing to do manually — but version bumps are derived from your commit messages, so they must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commitlint on commit).

### Format

```
<type>(<optional scope>): <subject>
```

| Commit | Result |
| --- | --- |
| `fix(eslint-config): handle flat config in monorepos` | patch bump |
| `feat(prettier-config): add solidity plugin` | minor bump |
| `feat(stylelint-config)!: drop stylelint 15 support` | major bump |
| `chore: ...`, `docs: ...`, `ci: ...`, `refactor: ...`, etc. | no release |

A major bump can also be triggered with a `BREAKING CHANGE:` footer in the commit body instead of the `!`.

### Which package gets bumped?

The scope is only informative. A commit is attributed to a package based on **which files it changes**: a commit touching `packages/eslint-config/**` bumps only `@gearbox-protocol/eslint-config`. A single commit that touches several packages will bump all of them by the same release type — so keep changes to different packages in **separate commits** (or separate PRs) to avoid unintended bumps.

Commits that only touch files outside `packages/*` (CI, root configs, this README) never trigger a release, regardless of type.
