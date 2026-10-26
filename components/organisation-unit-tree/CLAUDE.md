# @dhis2-ui/organisation-unit-tree

This package holds two components side by side:

- `OrganisationUnitTree` — the current component, in **JavaScript**
  (`src/organisation-unit-tree/`, `src/organisation-unit-node/` and friends).
- `OuTree` — its replacement, in **TypeScript** (`src/ou-tree/`). The component
  is a placeholder. `src/ou-tree/data/` is the endpoint types and the tree
  API (the tree endpoint, its `<id>/children` resource and gist),
  `src/ou-tree/node-store/` the app-wide node store with paged children per
  parent, `src/ou-tree/tree/` the per-tree state, providers and hooks, and
  `src/ou-tree/__fixtures__/` a temporary in-memory stand-in for the endpoint
  with a PAHO fixture, for tests and stories.

The rest of this repository is JavaScript. The TypeScript conventions below apply
to `.ts`/`.tsx` files only; do not apply them to the JavaScript sources here or
in other packages.

## Conventions

- **Relative imports of TypeScript modules carry NO extension**, from JavaScript
  and TypeScript files alike: `import { OuTree } from './ou-tree/index'` resolves
  to `index.ts`. JavaScript modules keep their `.js` extension. Enforced by
  `import/extensions` in the root `eslint.config.mjs`.

    Writing `./ou-tree/index.js` instead would name the compiled output rather
    than a file on disk. TypeScript resolves that, but eslint-plugin-import, Jest
    and webpack do not. Consequence to know about: `build/es` therefore carries
    extensionless specifiers for these imports, which Node's _native_ ESM loader
    rejects — fine for apps that bundle, and `exports.require` routes Node to the
    CJS build.

- **TypeScript cannot import the JavaScript sources in this package.** The root
  `tsconfig.json` has no `allowJs`, so under `strict` a relative import of a `.js`
  file is an error (TS7016). Other `@dhis2-ui/*` packages are fine: they ship
  type declarations.

    To share a JavaScript module with `OuTree`, **port it to TypeScript in place**:
    rename it to `.ts`/`.tsx`, add a props interface (keeping `propTypes` is
    optional; they still check JavaScript callers at runtime), and drop the `.js`
    extension from the existing imports of it. Both components then import the
    same file.

    A sidecar `.d.ts` next to an unchanged `.js` file is an acceptable stopgap.
    Babel compiles it to an empty `.d.js` in `build/`, which is harmless. Do not
    add `allowJs`: it needs changes to the root `tsconfig.json`, the `typecheck`
    script and `scripts/build-types.js`.

- **Type-only re-exports must use `export type`.** `isolatedModules` is on because
  Babel compiles file-by-file; a plain `export { SomeType }` compiles to a runtime
  import of a value that does not exist.
- **`src/index.js` is the module boundary.** Import from a subcomponent's index,
  never reach past it into its internals.
- **Published types come from two places.** `types/index.d.ts` is hand-written for
  the JavaScript components and re-exports the declarations `scripts/build-types.js`
  generates into `build/types/` for the TypeScript ones. A new public TypeScript
  export needs a line there too, e.g.
  `export { OuTree } from '../build/types/ou-tree/index'`.
- **Styles are styled-jsx** (`<style jsx>`), not CSS modules. It only type-checks
  because of `typings/styled-jsx.d.ts` at the repo root.
- **TypeScript test files import `@testing-library/jest-dom` directly**, for the
  types behind `toBeInTheDocument` and friends. The repo's Jest setup already
  loads it at runtime, but that setup file is not part of the TypeScript program.
- **This package has no TypeScript config of its own.** Checking is global
  (root `tsconfig.json`, `yarn typecheck`). Declaration emit is per package,
  because each package publishes its own types, and
  `scripts/build-types.js` does it — reading the compiler options from the
  root config so they cannot drift from the ones used to check.
- **Combine className values with `cx` from `classnames`**, not template literals.
- **Colors, spacers and elevations come from `@dhis2/ui-constants`**, not literals.
- **`fixtures/paho-org-units.json` is generated**, by
  `scripts/derive-ou-tree-fixture.js` from a PAHO metadata export that is not
  in the repo. It sits outside `src/` so it is not published, and it is
  excluded from Prettier. Regenerate rather than hand-edit.
- **Paging names say which kind they mean.** Browse mode pages a parent's
  children (`requestChildrenPage`, `CHILDREN_PAGE_SIZE`); filtered mode, later,
  pages results. Nothing is called just "page".
- **One `OuTreeNodeStoreProvider` per app.** Every tree shares its store; a
  tree without it throws. It holds one store per `shortName` value.

## Commands

- `yarn typecheck` from the repo root — type-checking is global, like linting: one
  run covers every package. Babel strips types without checking them, so a green
  test run says nothing about type correctness. CI runs this in the lint job.
- `yarn workspace @dhis2-ui/organisation-unit-tree test` — Jest.
- `yarn workspace @dhis2-ui/organisation-unit-tree build` — Babel build plus
  declaration emit to `build/types/`.
- `yarn workspace @dhis2-ui/organisation-unit-tree d2-app-scripts i18n extract` —
  run after adding or changing any `i18n.t(...)` string, and commit the updated
  `i18n/en.pot`.
- From the repo root: `yarn setup` once, then `yarn start` for Storybook.

## Status

`OuTree` is deliberately **not exported**, neither from this package's
`src/index.js` nor from `@dhis2/ui`, because this package is published. It is
reachable only through its story. Exporting it is a separate, deliberate change:
add it to `src/index.js` and `types/index.d.ts` here, and to
`collections/ui/src/index.js`. The `collections/ui` types re-export this package
with `export *`, so they pick it up on their own — and would advertise it in
`@dhis2/ui` even if the runtime export were left out.
