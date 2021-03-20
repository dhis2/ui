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

We recommend that you use `@dhis2/ui` as the entrypoint for all imports
of our frontend components (as in the example above). That way your
imports won't break if any of the underlying packages change.

## Documentation

`@dhis2/ui` is based on the specifications in our design-system:
https://github.com/dhis2/design-system. See the documentation there for
more information.

-   Docs: [ui.dhis2.nu](https://ui.dhis2.nu)
-   Live demo: [ui.dhis2.nu/demo](https://ui.dhis2.nu/demo)
-   API reference: [ui.dhis2.nu/api](https://ui.dhis2.nu/#/api)

## Bundled packages

| Package             | Link                                     |
| ------------------- | ---------------------------------------- |
| @dhis2/ui           | [packages/ui](packages/ui)               |
| @dhis2/ui-constants | [packages/constants](packages/constants) |
| @dhis2/ui-core      | [packages/core](packages/core)           |
| @dhis2/ui-forms     | [packages/forms](packages/forms)         |
| @dhis2/ui-icons     | [packages/icons](packages/icons)         |
| @dhis2/ui-widgets   | [packages/widgets](packages/widgets)     |

### `@dhis2/ui-constants`

This package provides access to shared constants, such as colors,
spacers and elevation values. They are used across our frontend
components and can be used directly in applications as well. Our
constants can be imported like so:

```js
import { colors } from '@dhis2/ui'
```

See our [api docs](https://ui.dhis2.nu/#/api) for a full list of the
available constants.

### `@dhis2/ui-elements`

Think of these components as styled HTML elements. These are the
elements that are used to compose other UI components.

-   Elements MUST NOT import other elements.
-   Elements SHOULD NOT provide behavior.
-   Elements MUST provide relevant styles for the design system.
-   Elements MUST forward the `ref`.
-   Elements MAY provide props for specific variants.
-   Elements SHOULD spread props to the underlying HTML element.

Since UI Elements are useful in other contexts to compose new components
with specific behavior, they provide a stable base to build on with a
flexible API.

### `@dhis2/ui-icons`

This package provides a collection of icons as react components. For
tree shaking purposes the icon name, variant and size are all expressed
in the component name. Our icons can be imported like so:

```js
import { IconApps16 } from '@dhis2/ui'
```

For a list of all the available icons see [the ui-icons
package](https://github.com/dhis2/ui/tree/master/packages/icons/src).
Note that during their transformation to React components the svg
filenames are PascalCased and prefixed with `Icon`. So `apps-16.svg`
becomes `IconApps16` and can then be imported as in the example above.

The default fill of our icons is inherited from `color` with
`currentColor`. To set a custom icon color you can use the `color` prop
like so:

```jsx
<IconApps16 color="#DE683D" />
```

### `@dhis2/ui-core`

> :warning: DEPRECATED:

This package provides the low level building blocks for all our
components. We use them as building blocks for our more elaborate
components and they can be used in applications for the same purpose.
Any of our core components can be imported in the following manner:

```js
import { Button } from '@dhis2/ui'
```

See our [api docs](https://ui.dhis2.nu/#/api) or the [live
docs](https://ui.dhis2.nu/demo) for a full list of the available core
components.

### `@dhis2/ui-widgets`

> :warning: DEPRECATED:

This package provides widgets, more elaborate components that are often
composed of multiple core components. Components in this package can
include translations, interact with an API or address a DHIS 2 specific
usecase. An example of a widget import:

```js
import { Transfer } from '@dhis2/ui'
```

See our [api docs](https://ui.dhis2.nu/#/api) or the [live
docs](https://ui.dhis2.nu/demo) for a full list of the available
widgets.

### `@dhis2/ui-forms`

This package provides several components that allow for easy integration
of our form components with
[react-final-form](https://github.com/final-form/react-final-form).
Besides form components, we also export several validator functions for
common usecases. Components from this library can be imported like so:

```js
import { TextAreaFieldFF } from '@dhis2/ui'
```

The `FF` suffix ensures that these components don't clash with our
regular field components from the widgets package and is an abbreviation
of `final-form`. See our [api docs](https://ui.dhis2.nu/#/api) or the
[live docs](https://ui.dhis2.nu/demo) for a full list of the available
components and validators.

## Reporting an issue or opening a PR

See [CONTRIBUTING.md](CONTRIBUTING.md)
