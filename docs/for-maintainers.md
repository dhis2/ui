# Tips for Maintaining Storybook Documentation <!-- omit in toc -->

The Docs Page for a component (visible at the Docs tab in the toolbar above) is automatically generated from stories, the component's prop types, and JSDoc comments above the component and its props.

This page assumes some knowledge of Storybook.

[Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction)

## Contents <!-- omit in toc -->

<!-- Generated using Markdown All in One VSCode extension -->

-   [Organizing components](#organizing-components)
-   [Making stories](#making-stories)
    -   [Getting the Args Table](#getting-the-args-table)
    -   [Controls and `args`](#controls-and-args)
    -   [Demonstrating callback behavior](#demonstrating-callback-behavior)
    -   [Customising source code snippets](#customising-source-code-snippets)
    -   [Making a reusable story template](#making-a-reusable-story-template)
    -   [Using state or refs (or other hooks) in Templates](#using-state-or-refs-or-other-hooks-in-templates)
    -   [Tips for making stories for multiple components](#tips-for-making-stories-for-multiple-components)
-   [Annotating a component](#annotating-a-component)
-   [Making sure propTypes are correctly documented and customizing the Args Table](#making-sure-proptypes-are-correctly-documented-and-customizing-the-args-table)
-   [Using MDX for more control over Docs Page for more prose or complex stories](#using-mdx-for-more-control-over-docs-page-for-more-prose-or-complex-stories)
-   [Edge cases and workarounds](#edge-cases-and-workarounds)
    -   [Portal components](#portal-components)
        -   [Extracting props for the Args Table from portal components](#extracting-props-for-the-args-table-from-portal-components)
    -   [Handling variables (non-literals) used as default props, using default args ('`i18n is not defined`' error)](#handling-variables-non-literals-used-as-default-props-using-default-args-i18n-is-not-defined-error)
    -   [Stories that use initial focus](#stories-that-use-initial-focus)

## Organizing components

In a story file, you can choose the path and name of the stories page by adding the `title` property to the default export, e.g.

```js
export default {
    component: DropdownButton,
    title: 'Actions/Buttons/Dropdown Button',
}
```

This adds the component to the 'Buttons' folder in the 'Actions' section and names its stories 'Dropdown Button.'

Sections, folders, and component names in storybook can include spaces and don't need to match the React component name exactly.

See more about naming and organization at [Naming Components and Hierarchy](https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy).

## Making stories

There are a few ways you can make sure the stories generate the best documentation for the Docs Page.

### Getting the Args Table

Make sure you add the `component` property to the default export of the stories file (see default export example above) - this is how storybook knows to extract the component's props for the Args Table.

### Controls and `args`

To take advantage of Controls and enable 'dynamic' JSX-style code snippets in the Docs Page, make sure you use the '[Component Story Format](https://storybook.js.org/docs/react/api/csf)' and the `args` syntax. For an individual story, that looks like this:

```js
export const DefaultStory = args => <Button {...args} />
```

The Controls addon will automatically set up the props control table, which will dynamically change the component props via the `args`. There are options to customize the controls for the purposes of complex components or some prop types - see more in the 'Making sure propTypes are correctly documented' section below.

Note that you don't need to use a template to take advantage of `args`.

### Demonstrating callback behavior

The **Actions** addon in the Canvas tab (with the addition of the [**Console** addon](https://storybook.js.org/addons/@storybook/addon-console)) displays messages sent to the console, including `log`s, `error`s and `warning`s, _but notably not `info`s._

Feel free to add console messages that demonstrate callback behavior, especially their function signatures.

Example:

```js
const onClick = (...args) => console.log('onClick args:', ...args)

export const Button = args => <Button {...args} />
Button.args = { onClick: onClick }
```

Simply passing `console.log` to callbacks like `onClick` is probably enough.

The Actions addon adds some slightly different tools for demonstrating callbacks, but the added utility is not really worth using a new system for callback logging.

### Customising source code snippets

Make sure the source code snippets for demos gives the user useful information. There are a few ways to show source code snippets in the Docs Page:

1. 'Dynamic', JSX-like rendering of the story. This is the default if the story uses `args`, and updates in response to changes in the Args Table.
2. A literal, nearly character-for-character expression of the story. This is the fallback if the story does not use `args`, and is the same as the code snippet shown in the 'Story' addon in the Canvas tab. This option does not dynamically update with the Args Table, but _does_ show accessory code like hooks that is useful to explain how a component requires a ref or state.
3. A hand-written snippet. It will receive syntax highlighting when shown on the Docs Page.
4. It's also possible to customize the source-code processing function. See [this example](https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/recipes.md#customizing-source-snippets).

To use #2 for a story that uses `args`, set `parameters.docs.source.type` to `'code'`:

```js
export const StatefulStory = () => {...}
StatefulStory.parameters = { docs: { source: { type: 'code' } } }
```

This can be done at the story or component level.

If neither of the auto-generated code snippets provide meaningful examples, use a handwritten snippet by setting `parameters.docs.source.code` to the string that you would like to appear in the code snippet:

```js
export const CustomCodeSnippet = () => {}
CustomCodeSnippet.parameters = {
    docs: {
        source: {
            code: `
const ComponentDemo = () => {
    const ref = useRef()
    
    return <ExampleComponent ref={ref} />
}
`,
        },
    },
}
```

Read more about source code blocks at [Storybook: Doc Blocks - Source](https://storybook.js.org/docs/react/writing-docs/doc-blocks#source)

### Making a reusable story template

To keep stories concise and DRY, you can reuse a story template (that uses the `args` syntax) and set the relevant props on each story using `StoryName.args = { ... }`. That looks like this:

```js
// The story template
const Template = args => <Button {...args} />

// Stories to render
export const Primary = Template.bind({}) // Makes a copy of the template
Primary.args = { primary: true }

export const PrimaryDense = Template.bind({})
PrimaryDense.args = { ...Primary.args, dense: true }
```

Note that templates may not be the best solution in some circumstances, for example when component composition varies between stories. In these cases, you should still see if you can apply `{...args}` props to one or more components in the story.

`args` can be composed for reuse by spreading the args from one story into another that shares those args, for example:

```js
export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: 'Primary',
    name: 'primaryName',
    value: 'primaryValue',
}

export const PrimaryDense = Template.bind({})
PrimaryDense.args = { ...Primary.args, dense: true }
```

Here is [some more information about templates](https://storybook.js.org/docs/react/writing-stories/introduction#using-args) from the storybook documentation.

### Using state or refs (or other hooks) in Templates

Templates can add some complexity with wrappers or hooks that might get used repeatedly.

See this example from the Popper component:

```js
// Popper.stories.js
const Template = args => {
    const ref = useRef(null)

    return (
        <div className="box" style={boxStyle}>
            <div
                className="reference-element"
                style={referenceElementStyle}
                ref={ref}
            >
                Reference Element
            </div>
            <Popper {...args} reference={ref}>
                <div style={popperStyle}>{args.placement}</div>
            </Popper>
        </div>
    )
}
```

### Tips for making stories for multiple components

Applying `args` or a template for a story with multiple components may not be straightforward, and controls may not work completely. See '[Stories for multiple components](https://storybook.js.org/docs/react/workflows/stories-for-multiple-components)' for detailed recommendations.

Here is also an easy, 'good-enough' solution for variations on a single component:

Apply `{...args}` to each one, then hard-code the prop of interest after the args. The hard-coded prop will take precedent over `args` and won't be controllable with the Controls addon, but all other props will be.

```js
export const ButtonSizes = args => (
    <>
        <Button {...args} small />
        <Button {...args} />
        <Button {...args} large />
    </>
)
ButtonSizes.args = { onClick: console.log }
```

## Annotating a component

There are several ways to add descriptions to a component and its props for the Docs Page. Each of these accepts markdown syntax inside the strings or comments.

By default, a JSDoc above the component definition becomes the component description on the Docs Page, and JSDoc comments above individual props become descriptions of those props in the Args Table (on both the Docs Page and in the Controls addon on the Canvas tab). Since the components in this library have pre-existing JSDoc comments with a particular syntax, these comments have been overridden with descriptions in the stories file. _In the future, this may change back to comments above the component as the source._

Descriptions can be added to the component and for each story (except the primary story on the Docs Page), and a subtitle can be added below the main story title.

To add a subtitle and a component description (that overrides the auto-generated description from a JSDoc above the component definition), use `parameters` in the default export:

```js
// This format is used to take advantage of multiline markdown syntax.
// Make sure it's not indentend and that backticks for code formatting are escaped.
const componentDescription = `
Buttons are used for triggering actions. There are different types of buttons...

\`\`\`js
import { Button } from '@dhis2/ui'
\`\`\`
`

export default {
    component: Button,
    title: 'Actions/Buttons/Button',
    parameters: {
        componentSubtitle: 'Initiates an action',
        docs: { description: { component: componentDescription } },
    },
}
```

Adding a description to an individual story is similar to adding a component description. Where component descriptions use the `parameters.docs.description.component` property of the default export, story descriptions use the `parameters.docs.description.story` property of the story:

```js
export const PrimaryButton = Template.bind({})
PrimaryButton.args = { primary: true }
Primary.parameters = {
    docs: {
        description: {
            story:
                'Used to highlight the most important/main action on a page.',
        },
    },
}
```

## Making sure propTypes are correctly documented and customizing the Args Table

Imported prop types (either from another file or from another library) are currently not interpreted correctly by react docgen under the hood. For this reason, it's best to use the React `prop-types` library for any props that will appear in user-facing stories.

The workaround for imported props is to create a configuration object to define that prop's `argTypes` that decides what the row in the `args` table should look like, and what control should be used. In this library, mostly the `type` in the Args Table and the control type were configured, leaving descriptions to the JSDoc above the prop type definition.

Read more about configuring the table at [Arg Types: Manual specification](https://storybook.js.org/docs/react/api/argtypes#manual-specification), and configuring controls at [Controls: Fully custom args](https://storybook.js.org/docs/react/essentials/controls#fully-custom-args).

If a custom prop type is reused for multiple components, it makes sense to colocate the `argType` customisation object with the shared prop type.

Here is an example for `buttonVariantPropType` from `shared-prop-types.js` in `ui-constants`:

```js
// shared-prop-types.js

export const buttonVariantPropType = propTypes.mutuallyExclusive(
    ['primary', 'secondary', 'destructive'],
    propTypes.bool
)

export const buttonVariantArgType = {
    // Table details
    table: {
        type: {
            summary: 'bool',
            detail:
                "'primary', 'secondary', and 'destructive' are mutually exclusive props",
        },
    },
    // What kind of prop control to use
    control: {
        type: 'boolean',
    },
}

// Button.stories.js

import { sharedPropTypes } from '@dhis2/ui-constants'

export default {
    component: Button,
    // ...
    argTypes: {
        primary: { ...sharedPropTypes.buttonVariantArgType },
        secondary: { ...sharedPropTypes.buttonVariantArgType },
        destructive: { ...sharedPropTypes.buttonVariantArgType },
        // ...
    },
}
```

## Using MDX for more control over Docs Page for more prose or complex stories

Sometimes the default Docs Page layout may not suit demos for a particular component, for example if the component requires a lot of prose to describe its different applications, or if you want to write a recipe for which some of the default elements on the Docs Page aren't useful. In this case, you can use MDX and your choice of the Storybook [Doc Blocks](https://storybook.js.org/docs/react/writing-docs/doc-blocks) (e.g. Description, Canvas, Story, ArgsTable) to write Markdown and include stories in the way that you want. Read more about at the ['Writing Docs in MDX' documentation](https://storybook.js.org/docs/react/writing-docs/mdx).

Stories written in MDX story files are exported and can be reused, for example for e2e testing purposes.

Storybook has a codemod available that can transform one or more CSF story files into MDX for continue developing from there: [CSF-to-MDX codemod](https://github.com/storybookjs/storybook/tree/master/lib/codemod#csf-to-mdx). This might look like:

```sh
npx -p @storybook/cli@next sb migrate csf-to-mdx --glob="**/MyComponent.stories.js"
```

## Edge cases and workarounds

There are several cases where bugs arise with Storybook and the docs page, and a few workarounds have been found.

### Portal components

Components that use React portals sometimes exhibit undesired behavior on the Docs Page, for example Layers or Modals stacking on top of each other and taking up the whole page. Other components like Popovers might not position correctly relative to their reference element. These issues don't appear on the Canvas tab.

The above issues can be managed by rendering the stories in the Docs Page in `iframe`s instead of the default inline method. Do this by setting `parameters.docs.inlineStories` to `false` either at the component or the story level.

Because the `iframe`s have a fixed height of 100px, the height should also be configured to something appropriate for the stories.

Note that the iframes are _slow to render_ and can make the page unresponsive for a time if there are many rendered at once. It's best to render only one representative example on the Docs Page and leave the rest to view in the Canvas tab. To do this, disable all the stories by default using `parameters.docs.disable = true` at the component level, then reenable the representative example at the story level:

```js
export default {
    title: 'Moda',
    component: Modal,
    parameters: {
        docs: {
            // render in iframe
            inlineStories: false,
            iframeHeight: '500px',
            // disable all stories on docs page by default
            disable: true,
        },
    },
}

export const RepresentativeExample = Template.bind({})
// enable this story on the Docs Page
RepresentativeExample.parameters = { docs: { disable: false } }
```

**NB:** Controls on the props will not work for an `iframe` story on the Docs Page, but the Controls will work normally in the Canvas. It would be helpful to make a note for users so they know what to expect.

#### Extracting props for the Args Table from portal components

Make sure components return JSX - otherwise react docgen will not find them and not generate an Args Table. If a component returns a react portal, that portal can be wrapped in a React fragment to make the prop detection work.

### Handling variables (non-literals) used as default props, using default args ('`i18n is not defined`' error)

There is a bug that manifests as a story throwing an error that looks like '[callback] is not a function'/'expected function but received string' or '[variable used in default props] is undefined' - this is due to a quirk with how default props are processed when using the `args` syntax. (See [this issue](https://github.com/storybookjs/storybook/issues/12098#issuecomment-758153653))

Providing actual values for those props in the stories enables the expected behavior, even if they are the same value as the default prop.

An easy workaround, therefore, is to set the component's default props as args for all the stories by default. Later, specifying args for an individual story will take precedence over the default args:

```js
export default {
    title: 'Forms/Transfer'
    component: Transfer,
    // configure default args for workaround
    args: { ...Transfer.defaultProps },
}
```

Note that the JSX addon which is configured to not show default props in code snippets conveniently prevents this workaround from spamming a component's code snippet with props.

### Stories that use initial focus

Components that have have a story to demonstrate an `initialFocus` prop cause an annoying behavior on the Docs Page. Whenever a control is changed, the whole page scrolls down to the initial focus story. For that reason, these stories should be disabled on the Docs Page by setting `parameters.docs.disable` to `true` on the Story:

```js
export const InitialFocus = Template.bind({})
InitialFocus.args = { initialFocus: true }
InitialFocus.parameters = { docs: { disable: true } }
```
