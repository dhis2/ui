# @dhis2-ui/ou-tree

This package is TypeScript. **The rest of this repository is JavaScript** — do not
apply anything here to the other component packages.

## Conventions

-   **Relative imports carry NO extension**, the inverse of the JavaScript packages:
    `import { OuTree } from './ou-tree'` resolves to `ou-tree.tsx`. This is enforced
    by `import/extensions: ['error', 'never', …]` in the root `.eslintrc.js`, scoped
    to `.ts`/`.tsx` only — the 46 JavaScript packages still require their `.js`
    extensions via `ignorePackages`, and that rule is untouched.

    The reason for the split: writing `./ou-tree.js` from a `.ts` file names the
    _compiled output_, not a file that exists on disk. TypeScript maps it, but
    eslint-plugin-import, Jest and webpack each resolve it literally and fail — the
    first attempt at this package needed a workaround in all three. Extensionless
    needs none, because every one of those resolvers already tries `.ts`/`.tsx`.

    The trade-off, recorded so it can be revisited: the emitted `build/es` output is
    then not loadable by Node's _native_ ESM loader, which requires full specifiers.
    That is inert for DHIS2 apps, which bundle, and `exports.require` sends Node to
    the CJS build. Revisit if this library ever needs to be imported by Node directly,
    or when the wider repo migrates to TypeScript and can amortise the workarounds.

-   **Type-only re-exports must use `export type`.** `isolatedModules` is on because
    Babel compiles file-by-file; a plain `export { SomeType }` compiles to a runtime
    import of a value that does not exist.
-   **`src/index.ts` is the module boundary.** Import from a subcomponent's
    `index.ts`, never reach past it into its internals.
-   **Styles are styled-jsx** (`<style jsx>`), not CSS modules. `<style jsx>` only
    type-checks because of `typings/styled-jsx.d.ts` — do not delete it.
-   **One shared setting exists for this package — do not "clean it up".** The
    `**/*.{ts,tsx}` override in the root `.eslintrc.js` points
    eslint-plugin-import's node resolver at `['.js', '.jsx', '.ts', '.tsx']`.
    Without it `import/no-unresolved` cannot follow an extensionless import to a
    `.tsx` file and reports every relative import as unresolved. Jest and webpack
    need no equivalent — both already resolve `.ts`/`.tsx` by default.
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
