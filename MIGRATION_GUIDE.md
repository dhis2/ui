# dhis2/ui — Incremental TypeScript Migration Strategy

## Overview

This document describes the approach for incrementally migrating `@dhis2/ui` components from JavaScript to TypeScript, one component at a time, without breaking the rest of the library.

## Key Findings

-   **Build system**: `d2-app-scripts build` uses Babel with `@babel/preset-typescript` already included — it can compile `.ts`/`.tsx` out of the box.
-   **styled-jsx**: Ships TypeScript definitions that augment React's `StyleHTMLAttributes` with `jsx` and `global` props. Works in `.tsx` files with the `"types": ["styled-jsx"]` tsconfig option.
-   **Existing types**: Each component has hand-written `.d.ts` files in a `types/` directory. After migration, these can be auto-generated from source via `tsc --declaration`.
-   **ESLint**: The project uses `@dhis2/cli-style` (ESLint 7.x). TypeScript linting works via `@typescript-eslint/parser` v6 + `@typescript-eslint/eslint-plugin` v6.
-   **One quirk**: `d2-app-scripts build` doesn't rename `.tsx` → `.js` in build output. A `post-build-rename.js` script handles this.

## How to Migrate a Component

### 1. Add a `tsconfig.json` to the component

```json
{
    "extends": "../../tsconfig.json",
    "compilerOptions": {
        "rootDir": "./src"
    },
    "include": ["src/**/*.ts", "src/**/*.tsx"],
    "exclude": [
        "node_modules",
        "build",
        "**/*.stories.*",
        "**/*.test.*",
        "**/*.e2e.*"
    ]
}
```

### 2. Convert source files from `.js` → `.tsx` (or `.ts`)

-   Replace `PropTypes` with TypeScript interfaces
-   Remove `prop-types` and `@dhis2/prop-types` imports
-   Add explicit types for props, state, and function parameters
-   Keep `styled-jsx` usage as-is (it works in `.tsx`)
-   Keep import paths using `.js` extensions (Babel + Node resolve these to `.tsx`)
-   Leave `.stories.js` and `.feature` test files as JavaScript

### 3. Update `d2.config.js` entry point

```js
module.exports = {
    type: 'lib',
    entryPoints: {
        lib: 'src/index.ts', // was src/index.js
    },
}
```

### 4. Update `package.json` build script

```json
"build": "d2-app-scripts build && node ../../scripts/post-build-rename.js"
```

### 5. Delete old `.js` source files

Remove the original `.js` files that were converted (keep stories/features as JS).

### 6. Run the feedback pipeline

```bash
node scripts/ts-check.js <component-name>       # check one component
node scripts/ts-check.js --all                   # check all migrated components
node scripts/ts-check.js <component-name> --fix  # auto-fix lint + format
```

### 7. Verify the build

```bash
cd components/<name> && yarn build
```

## Files Added/Modified

| File                              | Purpose                                                |
| --------------------------------- | ------------------------------------------------------ |
| `tsconfig.json` (root)            | Base TypeScript config for the whole repo              |
| `components/<name>/tsconfig.json` | Per-component TS config extending root                 |
| `.eslintrc.js`                    | Added TypeScript override block for `.ts`/`.tsx` files |
| `scripts/ts-check.js`             | Unified feedback pipeline (tsc + eslint + prettier)    |
| `scripts/post-build-rename.js`    | Renames `.tsx`/`.ts` → `.js` in build output           |

## Dev Dependencies Added

-   `typescript` ~5.4.5
-   `@typescript-eslint/parser` ^6
-   `@typescript-eslint/eslint-plugin` ^6
-   `eslint-import-resolver-typescript` ^3

## Migration Order Recommendation

Start with leaf components (no internal deps) and work up:

1. **Simple leaf**: `divider`, `cover`, `center`, `required`, `help`, `legend`, `label`
2. **Small with sub-components**: `tag`, `chip`, `card`, `box`, `status-icon`, `user-avatar`, `logo`
3. **Medium**: `loader`, `notice-box`, `alert`, `tooltip`, `popover`, `popper`
4. **Complex**: `button`, `checkbox`, `radio`, `switch`, `input`, `text-area`, `file-input`
5. **Field wrappers**: `field`
6. **Composite**: `select`, `menu`, `tab`, `table`, `pagination`, `modal`, `calendar`
7. **Large/complex**: `header-bar`, `organisation-unit-tree`, `transfer`, `sharing-dialog`, `selector-bar`
8. **Collections**: `collections/ui`, `collections/forms`

## Notes

-   Stories and E2E feature files can stay as `.js` — they don't need to be migrated immediately.
-   The `types/index.d.ts` hand-written files can eventually be replaced by auto-generated declarations from `tsc --declaration`.
-   The `import/extensions` ESLint rule is disabled for `.ts`/`.tsx` files because the codebase convention is to import with `.js` extensions (which Babel resolves to the actual `.tsx` files).
