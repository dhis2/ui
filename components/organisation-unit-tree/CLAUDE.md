# @dhis2-ui/organisation-unit-tree

This package holds two components side by side:

- `OrganisationUnitTree` — the current component, in **JavaScript**
  (`src/organisation-unit-tree/`, `src/organisation-unit-node/` and friends).
- `OuTree` — its replacement, in **TypeScript** (`src/ou-tree/`). It renders
  browse mode as a virtualised list that looks like `OrganisationUnitTree`.
  `src/ou-tree/data/` is the endpoint types and the tree API (the tree
  endpoint, its `<id>/children` resource and gist), `src/ou-tree/node-store/`
  the app-wide node store with paged children per parent,
  `src/ou-tree/tree/` the per-tree state, providers and hooks,
  `src/ou-tree/list/` the virtualised list, the row pieces and the default
  rows, and `src/ou-tree/__fixtures__/` a temporary in-memory stand-in for
  the endpoint with a PAHO fixture, for tests and stories.

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
- **Pieces take plain props and read nothing from the tree**, and the glue
  carries no styles. The rows (`OuTreeNodeRow`, `OuTreeRow`,
  `OuTreeErrorRow`, `OuTreeSkeletonRow`), `OuTreeNodeToggle`,
  `OuTreeRootsRows`, `OuTreeList` and `OuTree` are the glue over hooks and
  pieces; `OuTreeContainer`, `OuTreeVirtualSizer` and `OuTreeVirtualRow`
  are the list's structural pieces. Every piece puts the `dataTest` it is
  given on its element unchanged; the glue composes the suffixes
  (`${dataTest}-row`, `-toggle`, `-toggle-space`, `-label`, `-loader`,
  `-retry`, `-skeleton`), default `dhis2-uicore-outree`. The two
  retry controls are buttons that are the tooltip's reference:
  `OuTreeRetrySkeleton` is itself the bar, and `OuTreeRetryNode` is a
  failed node's row body around the label slot. In Storybook the pieces are the `Building block:` stories of
  the `OuTree` entry, after the tree's own.
- **A failed first page means the node did not open.** `isOpen` is false
  while a node's children status is `failed`, the row's body is an
  `OuTreeRetryNode` button around the label slot, and opening the node
  again requests page one again. There is no separate retry
  action on a node.
- **List tests mock the virtualiser**, as jsdom has no layout:
  `jest.mock('@tanstack/react-virtual', () => jest.requireActual('<path>/__fixtures__/virtualizer-mock'))`.
  Import the mock file directly; it uses the `jest` global, so it is not in
  the fixtures index that stories import.
- **`renderLabel` is the one customisation convenience.** It replaces the
  label slot of a node row and keeps the row's chrome. It must be a stable
  function, or the memoised rows re-render. While the node's children
  failed to load, the slot sits inside the row's retry button, so a label
  with its own control there is batch 5's problem to solve with the row's
  focus model.
- **Use `useOuTreeActions` in components that act on the tree but must not
  re-render when it changes**, such as rows; `useOuTree` subscribes to every
  change.
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
  The `OuTree` stories' stand-in answers after 1500 milliseconds, so the
  Netlify preview demos every loading state;
  `STORYBOOK_OU_TREE_DELAY=<milliseconds>` sets another latency, 0 included.

## Status

`OuTree` renders browse mode and is reachable through its stories. It is
deliberately **not exported**, neither from this package's `src/index.js` nor
from `@dhis2/ui`, because this package is published. Exporting it is a separate, deliberate change:
add it to `src/index.js` and `types/index.d.ts` here, and to
`collections/ui/src/index.js`. The `collections/ui` types re-export this package
with `export *`, so they pick it up on their own — and would advertise it in
`@dhis2/ui` even if the runtime export were left out.
