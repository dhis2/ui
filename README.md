# DHIS2 UI

[![@dhis2/ui on npm](https://badge.fury.io/js/%40dhis2%2Fui.svg)](https://www.npmjs.com/package/@dhis2/ui)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

> **@dhis2/ui** is a suite of frontend components for building DHIS 2 applications

To install `@dhis2/ui` run:

```bash
yarn install @dhis2/ui
```

All components can be imported directly from `@dhis2/ui` like so:

```js
import { Button } from '@dhis2/ui'
```

We recommend that you use `@dhis2/ui` as the entrypoint for all imports of our frontend components (as in the example above). That way your imports won't break if any of the underlying packages change.

## Documentation

`@dhis2/ui` is based on the specifications in our design-system: https://github.com/dhis2/design-system. See the documentation there for more information.

-   Docs: [ui.dhis2.nu](https://ui.dhis2.nu)
-   Live demo: [ui.dhis2.nu/demo](https://ui.dhis2.nu/demo)
-   API reference: [ui.dhis2.nu/api](https://ui.dhis2.nu/#/api)

## Bundled packages

| Package             | Link                                   | Status |
| ------------------- | -------------------------------------- | ------ |
| @dhis2/ui           | [collections/ui](collections/ui)       | Active |
| @dhis2/ui-constants | [constants](utilities/constants)       | Active |
| @dhis2/ui-forms     | [collections/forms](collections/forms) | Active |
| @dhis2/ui-icons     | [icons](utilities/icons)               | Active |

### `@dhis2/ui-constants`

This package provides access to shared constants, such as colors, spacers and elevation values. They are used across our frontend components and can be used directly in applications as well. Our constants can be imported like so:

```js
import { colors } from '@dhis2/ui'
```

See our [api docs](https://ui.dhis2.nu/#/api) for a full list of the available constants.

### `@dhis2/ui-icons`

This package provides a collection of icons as react components. For tree shaking purposes the icon name, variant and size are all expressed in the component name. Our icons can be imported like so:

```js
import { IconApps16 } from '@dhis2/ui'
```

For a list of all the available icons see [the ui-icons package](https://github.com/dhis2/ui/tree/master/packages/icons/src). Note that during their transformation to React components the svg filenames are PascalCased and prefixed with `Icon`. So `apps-16.svg` becomes `IconApps16` and can then be imported as in the example above.

The default fill of our icons is inherited from `color` with `currentColor`. To set a custom icon color you can use the `color` prop like so:

```jsx
<IconApps16 color="#DE683D" />
```

### `@dhis2/ui-forms`

This package provides several components that allow for easy integration of our form components with [react-final-form](https://github.com/final-form/react-final-form). Besides form components, we also export several validator functions for common usecases. Components from this library can be imported like so:

```js
import { TextAreaFieldFF } from '@dhis2/ui'
```

The `FF` suffix ensures that these components don't clash with our regular field components from the widgets package and is an abbreviation of `final-form`. See our [api docs](https://ui.dhis2.nu/#/api) or the [live docs](https://ui.dhis2.nu/demo) for a full list of the available components and validators.

## Development

```sh
git clone git@github.com:dhis2/ui.git && cd ui

yarn install
yarn d2-style install
yarn setup
yarn start

# in case manager complains about the main.manager.bundle.js, e.g. cannot import @dhis2/ui-constants, then use:
yarn start --no-manager-cache
```

## Conditional E2E Test Recording

To record e2e tests in Cypress Cloud, you can use one of the following methods based on your needs:

-   **Commit Message**: Include `[e2e record]` in your commit messages to activate recording.
-   **GitHub Labels**: Apply the `e2e record` label to your pull request to trigger recording.

This setup helps in managing Cypress Cloud credits more efficiently, ensuring recordings are only made when explicitly required.

## Reporting an issue or opening a PR

See [CONTRIBUTING.md](CONTRIBUTING.md)
