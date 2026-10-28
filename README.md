# SNAPx Design System

Web components and design tokens for SNAPx, published as
`@select-networx/snapx-ds` and used by
[snapx-admin](https://github.com/select-networx/snapx-admin). The visual styles
follow the approved SNAPX redesign prototype, in two looks: **Select** (orange,
the default) and **SNAPX** (blue).

**Docs:** https://select-networx.github.io/snapx-ds/, updated with each
release.

Work is tracked in Jira under epic
[SNAP-3943](https://selectnetworx.atlassian.net/browse/SNAP-3943).

## What's in the repo

```
packages/components/        The published package
  src/tokens.css            Design tokens, including both looks
  src/components/snap-*/    One folder per component: .ts and .css
  src/index.js              The package entry: export each component here
  elena.config.mjs          Build config
  cem-entry-types.mjs       Generates TypeScript types for the package entry
docs/                       Documentation site (VitePress)
.github/workflows/          Publishing to GitHub Packages
```

Components are built with [Elena](https://elenajs.com): native custom elements
that render into the page itself (no Shadow DOM) and keep their styles separate
with CSS `@scope`.

## Getting started

You need **Node 22**. `nvm use` picks it up from `.nvmrc`.

```sh
npm install
npm run build:lib   # Build the package once, so the docs have something to load
npm run dev         # Rebuild on change, and serve the docs at http://localhost:5174/snapx-ds/
```

No GitHub token is needed to work on this repo, only to install the package
in an app (see [Using the package](#using-the-package)).

| Command | What it does |
| --- | --- |
| `npm run build:lib` | Builds `packages/components/dist` |
| `npm run watch:lib` | Rebuilds the package on change |
| `npm run docs:dev` | Serves the docs at http://localhost:5174/snapx-ds/ |
| `npm run docs:build` | Builds the docs site |
| `npm run dev` | `watch:lib` and `docs:dev` together |

The build also writes `dist/custom-elements.json`, a manifest of every
component, its properties and its CSS custom properties. The docs read it to
generate each component's header and props table, so documentation comments
in the component source show up in the docs automatically.

## Using the package

In an app:

1. Set up access to GitHub Packages. Each developer needs a GitHub token; see
   `DESIGN_SYSTEM_SETUP.md` in the root of
   [snapx-admin](https://github.com/select-networx/snapx-admin).
2. Install the package:

   ```sh
   npm install @select-networx/snapx-ds
   ```

3. Import it once. The components register themselves on import:

   ```ts
   import "@select-networx/snapx-ds";
   import "@select-networx/snapx-ds/dist/bundle.css";
   ```

4. Load the fonts: Inter, Geist and JetBrains Mono. The package doesn't load
   them itself.
5. For the SNAPX look, add `data-theme="snapx"` to `<html>`. Without it, you
   get Select.

## Design tokens

Tokens live in `packages/components/src/tokens.css`. Every token is prefixed
`--snap-` so it can't collide with an app's own CSS. Values that change between
the looks sit in the `:root, [data-theme="select"]` and `[data-theme="snapx"]`
rules; everything else is shared.

The docs' **Design tokens** page is generated from `tokens.css`, and covers the
naming conventions and how each token traces back to the prototype. To change
a token, edit `tokens.css`; the docs update themselves.

## Adding a component

Use `snap-button` as the model. The Elena CLI's starter template uses an older
CSS pattern whose custom properties apps can't override.

1. **Check it's needed.** Only add a component, or a variant of one, once it
   appears in 2 or 3 real places in the prototype or in snapx-admin.
2. **Create `src/components/snap-<name>/snap-<name>.ts` and `.css`.**
3. **Give every property a default value** (`disabled = false`, not
   `disabled: boolean`). Elena works out a property's type from its default;
   without one it treats the property as a string, and boolean attributes
   stop working.
4. **Document it in the source.** `@displayName`, `@status`, `@property` and
   `@cssprop` in the JSDoc comments feed the manifest and the docs.
5. **Style it from the tokens**, following `snap-button.css`:
   - Wrap the styles in `@scope (snap-<name>)` and keep the reset at the top,
     so the app's CSS can't leak in.
   - Set defaults as private `--_*` properties on `:scope`, from tokens.
   - Read public `--snap-<name>-*` properties with the private value as the
     fallback, e.g. `var(--snap-button-bg, var(--_bg))`. Never declare the
     public ones in the component, or apps won't be able to override them.
   - Make variants change the private properties.
6. **Export it** from `src/index.js`.
7. **Add a docs page** at `docs/components/<name>.md`, using `snap-button`'s as
   a template, and add it to the sidebar in `docs/.vitepress/config.mjs`.

## Releasing

Publishing a GitHub release runs a workflow that publishes the package to
GitHub Packages and then, once that succeeds, deploys the docs to GitHub
Pages. The docs therefore always describe the latest release, and changes to
them go live with the next one.

1. On your branch, bump the version:

   ```sh
   npm version <version> --workspace=packages/components --no-git-tag-version
   ```

2. Merge into `main`.
3. Publish a GitHub release on `main`, tagged `v<version>` (e.g. `v0.0.3`).
   The workflow refuses to publish if the tag doesn't match the version.
   If the package publishes but the docs don't, re-run the failed docs job
   from the run's page in the Actions tab.
4. Upgrade the apps. While the package is on `0.0.x`, `^0.0.1` only matches
   `0.0.1`, so each release needs an explicit upgrade:

   ```sh
   npm install @select-networx/snapx-ds@<version>
   ```

A version can only be published once, so every release needs a new version.

The docs deploy needs two repository settings, made once: **Settings → Pages
→ Source** set to **GitHub Actions**, and in **Settings → Environments →
github-pages**, a deployment rule allowing `v*` tags (releases run from their
tag, which the environment rejects by default).

## Contributing

- Branch from `main` as `feature/SNAP-<ticket>`, named after the Jira story,
  and open a PR into `main`.
- Changes to snapx-admin that use the design system go on branches from its
  `epic/SNAP-3943` branch, so the whole project merges into snapx-admin as one
  unit of work.
