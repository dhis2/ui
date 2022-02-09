---
title: Button
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { Button, DropdownButton, SplitButton, IconCheckmark24 } from '@dhis2/ui'

# Button

Buttons are used to trigger actions. There are different button variants that are used for different types of actions.
<Demo>
<Button>Enroll in program</Button>
</Demo>

## Usage

### When to use

-   **Trigger an action.** Interacting with a button should always trigger an action.

### When not to use

-   **Navigation**. Don't use a button for actions that are only navigational, like moving to a different screen in an app. Use a link instead.

### Variants

#### Quick reference

| Variant       | When to use                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Basic`       | Default. Will suit the majority of actions on a page.                                                                      |
| `Primary`     | Use for the most important action on a page, like a _Save data_ button in a form. Only use one `primary` button on a page. |
| `Secondary`   | Use for less important actions, usually in combination with other buttons.                                                 |
| `Destructive` | Only for primary-type actions that will delete or destroy something. Don't use several on a single page.                   |

#### Basic

<Demo>
    <Button basic>Basic button</Button>
</Demo>

-   A `basic` button is the default button to use. It suits the majority of use cases.
-   Don't use a `basic` button for the most important action on the page. Use `primary` instead.

#### Primary

<Demo>
    <Button primary>Primary button</Button>
</Demo>

-   Only use for the most important action on a page, like _Save data_ in a form.
-   Only use one `primary` button per page, otherwise it's not clear what the main action is.
-   A page doesn't need to have a `primary` button if there isn't a clear main action.

#### Secondary

<Demo>
    <Button secondary>Secondary button</Button>
</Demo>

-   Use for actions that are used less often. Using `secondary` buttons reduces amount of elements on a page competing for a user's attention.
-   Use as a passive alternative to `primary` actions, like _Cancel_ as a passive alternative to _Save_.
-   Don't use if there's only one action on the page.

#### Destructive

<Demo>
    <Button destructive>Destructive button</Button>
</Demo>

-   Only use for primary-type actions that will destroy data.
-   Don't use if the action will only remove an item from the current context.
-   Only use a one `destructive` button per page.

### Format

#### Content

-   Button labels should be clear and concise.
-   It should be clear what will happen when triggering the button. _Save data_ is clearer than just _Save_, for example.
-   Use an action verb for labels. Avoid ambiguous labels like "OK".
-   Check the A-Z glossary ==link== and communication guidelines ==link== for more tips for writing useful labels.

#### Size

Buttons are available in different sizes. Use the size that matches the usage guidelines.

| Size     | When to use                                                   |
| -------- | ------------------------------------------------------------- |
| `small`  | Compact interfaces and secondary actions.                     |
| `medium` | Default. The standard size that should be used in most cases. |
| `large`  | Simple interfaces with only one or two main actions.          |

#### Spacing

-   As a general rule, leave at least `dp4` spacing around a button. For interfaces with more space, use `dp8`.

## Options

### Dropdown button

<Demo>
    <DropdownButton>Dropdown button</DropdownButton>
</Demo>

-   A dropdown button offers several actions in a small space. Clicking the button opens a menu with several actions.
-   Use to replace a group of buttons where space is limited.
-   A dropdown button label should make it clear there are more options inside, like _Actions_.

### Split button

<Demo>
    <SplitButton>Split button</SplitButton>
</Demo>

-   A split button offers a main action and a dropdown of several other actions. Clicking the main button triggers an action. Clicking the split arrow opens a menu with several actions.
-   Use when there is a main action and several secondary actions, like a main action of _Save_ and secondary actions of _Save and add another_ and _Save and open_.
-   Use when space is limited. Otherwise, show buttons for all the actions.
-   Don't use when there isn't an obvious main action.

### Toggle button

<Demo>
    <Button icon={<IconCheckmark24/>}></Button>
    <Button icon={<IconCheckmark24/>} toggled></Button>
</Demo>

-   Represents an on/off state.
-   Use a toggle button when an option can be turned on or off, and a checkbox ==link== isn't suitable, like in a toolbar.
-   Toggle buttons can be used with `basic` and `secondary` variants.
-   If the button doesn't have a text label, show a tooltip ==link== on hover and focus that tells the user what's being toggled.

### Icon

<Demo>
    <Button icon={<IconCheckmark24/>}>Mark as complete</Button>
    <Button icon={<IconCheckmark24/>}></Button>
</Demo>

-   Buttons can have an optional icon alongside the text label.
-   Buttons can show only an icon.
-   Icons with a text label are useful for providing more information about the action. Users scanning an interface might recognize an icon quicker than text.
-   Buttons with only an icon need to show a tooltip ==link== on hover and focus that tells the user what the button action is.

### State: Disabled

<Demo>
    <Button disabled>Enroll in program</Button>
</Demo>

-   Use a disabled state when the button action can't be triggered.
-   Show a tooltip ==link== on hover, or help text, that tells the user why the action can't be triggered.
-   Don't change the button label between disabled and enabled states.
-   If a button action won't ever be enabled in the current context, consider removing it instead.

### State: Loading

<Demo>
    <Button loading>Loading…</Button>
</Demo>

-   Use a loading state after a user triggers that button.
-   Change the button label to tell the user what's happening. For example, after clicking a _Start job_ button, the loading state label could be _Starting job…_.
-   If triggering other actions on the page should be prevented, consider showing a blocking loader ==link== instead.

## Examples in use

==TODO: examples==

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/actions-buttons-button--basic)
-   API reference ==TODO: link==
