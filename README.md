# ui-core

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**[Online docs and demos (latest master build)](https://ui-core.dhis2.nu/)**

## Requires polyfills

These are included with apps generated with Create React App, but if you
want to use this library with the environments in `.browserslistrc` you
need to polyfill the following:

-   web.dom.iterable
-   es6.array.fill
-   es6.array.iterator
-   es6.function.name
-   es6.object.assign
-   es6.object.keys
-   es6.object.set-prototype-of
-   es6.promise
-   es6.regexp.match
-   es6.regexp.split
-   es6.string.starts-with
-   es6.string.iterator
-   es6.symbol
-   es7.symbol.async-iterator

### Review

Make a PR from the component branch. Add a team member who can review
the code and example for both **LTR** and **RTL** modes.

## Development

We use [Storybook](https://storybook.js.org) that is excellent for
testing components while developing them.

```
yarn install
yarn start
```

The Storybook runs on localhost:5000.

### Apply the code style

This library follows the [dhis2
code-style](https://github.com/dhis2/cli-style). There is a commit hook
that will apply the code style to staged files, but if you want to do
this manually during development, run:

```
yarn format
```

### Commit messages

This library follows the commit message style defined in [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional#rules). There is a pre-commit hook that will stop commits that don't follow the convention.

### Releasing

When a PR is merged to the **master** branch, the release process
automatically starts.

It is very important that the commit that lands on **master** follows
the conventional commit format, since that is what is used to
automatically determine the next version.

**Never push straight to master, always go through a PR!**

## Testing

Testing is done with cypress & cucumber.

-   Run `yarn cypress:run`<br />
    This will run cypress and exit with either 0 or 1

-   Run `yarn cypress:open`<br />
    This will open the cypress gui, which is useful for writing tests

### Recording videos and taking screenshots

When running `yarn cypress:run`, by default no video is recorded and no
screenshot will be taken.

-   Recording videos can be enabled by supplying the
    `CYPRESS_VIDEO=true` env var.
-   Taking screenshots can be enabled by supplying the
    `CYPRESS_SCREENSHOT=true` env var.

### Storybook stories for testing

Sometimes it's required to add stateful stories to test certain behavior.
That's why you can add files with the following file name format: `*.stories.testing.js`
These stories will not be used when generating the docs storybook and can
contain more sophisticated scenarios for testing.

## FAQ

### How to avoid a global style rule from affecting a ui-core component?

The best practice is that each component has styles that are scoped to
that component to avoid style rules that leak out from one component and
bleeds into another component.

Generally all the CSS-in-JS solutions grant this out of the box, and
this is only a problem when using global stylesheets, e.g. by importing
`index.css` in an application and adding global rules to it.

There are two ways to work around the problem.

#### Example CSS

Given the following CSS:

`index.css`:

```
div {
    padding: 20px;
}

.disabled {
    opacity: 0.5;
}
```

These styles will bleed into all components that use `div` or
`.disabled` and doesn't itself set those rules and win by specificity.

If a rule is not set by the component, the technique that overrides
through the use of `className` still applies, it's just "softer" and
does not require `!important` to counter the rules.

If the rules do something `!important`, the only course of action is to
counter it with another `!important` rule. Given the following CSS:

`index.css`:

```
div {
    padding: 20px !important;
}

.disabled {
    opacity: 0.5 !important;
}
```

Now there is no way for specificity to win, and all components that use
those classes or elements will inherit those rules.

#### Cascading override

By using a cascading override, the style bleed can be stopped by
utilizing a wrapper element for the component, and this will cascade
down to the children of the component as well. The technique allows for
a workaround which does not affect the component itself, and is easily
removed when the App no longer uses leaky styles.

Before:

```js-jsx
<div>
    {...}
    <Component disabled />
</div>
```

After:

```js-jsx
<div>
    {...}
    <div className="fix-container">
        <Component disabled />
    </div>
</div>
```

```css
.fix-container .disabled {
    /* will undo the overriding of global styles for this component */
    opacity: 1 !important;
}
```

#### Class name override

If you cannot control the CSS that bleeds into `ui` components, then
you need to define a class that counters the effects of the rule, and
use the `className` prop to override the global rule.

`index.css`:

```
.fix {
    opacity: 1 !important;
    padding: 10px !important;
}
```

Pass that to the component through `className='fix'`, and it should
negate the troublesome CSS. Once the global rules in the App has been
removed, it is possible to remove the `className='fix'` as well. This
should be considered a temporary measure.
