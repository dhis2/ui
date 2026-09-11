# @dhis2-ui/ou-tree

This package is TypeScript. **The rest of this repository is JavaScript** — do not
apply anything here to the other component packages.

## Conventions

-   **Relative imports carry a `.js` extension**, even from `.ts`/`.tsx` files:
    `import { OuTree } from './ou-tree.js'` resolves to `ou-tree.tsx`. TypeScript
    maps the extension, Babel emits `.js`, and the repo's
    `import/extensions: ['error', 'ignorePackages']` rule requires it. Dropping the
    extension breaks both lint and the built output.
-   **Type-only re-exports must use `export type`.** `isolatedModules` is on because
    Babel compiles file-by-file; a plain `export { SomeType }` compiles to a runtime
    import of a value that does not exist.
-   **`src/index.ts` is the module boundary.** Import from a subcomponent's
    `index.ts`, never reach past it into its internals.
-   **Styles are styled-jsx** (`<style jsx>`), not CSS modules. `<style jsx>` only
    type-checks because of `typings/styled-jsx.d.ts` — do not delete it.
-   **Three tools cannot follow the `.js` -> `.ts` convention and are configured
    around it. Do not "clean up" any of these workarounds:**
    -   `import/no-unresolved` is disabled for `.ts`/`.tsx` in the root
        `.eslintrc.js`, because eslint-plugin-import's resolver cannot follow it.
        TypeScript reports a genuinely missing module as `TS2307` — so run
        `typecheck`, and note CI does not.
    -   The root `jest.config.js` (used by root `yarn test`, i.e. CI) and
        `jest.config.shared.js` (used by each package's own `test` script) both
        map `^(\.{1,2}/.*)\.js$` to `$1` for the same reason: Jest's resolver
        cannot follow it either, and without that mapper the tests do not run
        at all. This mapping is repo-wide, not package-local — there is no
        `jest.config.js` in this package — so editing it affects all suites,
        not just this package's. Both files re-spread cli-app-scripts'
        `moduleNameMapper` so the asset and styled-jsx mocks survive — keep
        that spread if you edit either.
    -   `storybook/src/webpack-config.js` sets
        `resolve.extensionAlias = { '.js': ['.ts', '.tsx', '.js', '.jsx'] }`,
        because webpack's resolver cannot follow it either. Without it the
        Storybook build fails with `Can't resolve './ou-tree/index.js'`.
-   **Combine className values with `cx` from `classnames`**, not template literals.
-   **Colors, spacers and elevations come from `@dhis2/ui-constants`**, not literals.

## Commands

-   `yarn workspace @dhis2-ui/ou-tree typecheck` — **the only thing that type-checks
    this package. CI does not run it.** Babel strips types without checking them, so
    a green test run says nothing about type correctness. Run it before every commit.
-   `yarn workspace @dhis2-ui/ou-tree test` — Jest.
-   `yarn workspace @dhis2-ui/ou-tree build` — Babel build plus declaration emit to
    `build/types/`.
-   `yarn workspace @dhis2-ui/ou-tree d2-app-scripts i18n extract` — run after adding
    or changing any `i18n.t(...)` string, and commit the updated `i18n/en.pot`.
-   From the repo root: `yarn setup` once, then `yarn start` for Storybook.

## Status

The package is `"private": true` and is deliberately **not** exported from
`@dhis2/ui`. It is a placeholder that will replace
`@dhis2-ui/organisation-unit-tree`. Making it public is a separate, deliberate
change — do not add it to `collections/ui`.
