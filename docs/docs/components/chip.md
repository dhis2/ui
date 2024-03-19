---
title: Chip
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { Chip, IconStar24 } from '@dhis2/ui'

import API from '../../../components/chip/API.md'

# Chip

Chips are used to select from a set of defined options. Chips can also represent a set of chosen options.

<Demo>
    <Chip>Hello world</Chip>
</Demo>

```jsx
<Chip>Hello world</Chip>
```

## Usage

### When to use

-   **Choose from defined options**. Use chips to represent a set of options. Each option is represented by a chip. Choosing a chip updates another area or object.
-   **Add or remove options**. Chips can be used to show items or attributes assigned to an object, like choosing filters to be applied to a list.

### When not to use

-   **Actions**. Don't use chips for triggering actions. Use a [`Button`](button.md) instead.
-   **Display only**. Don't use chips if they aren't interactive. For displaying a status or label, use a [`Tag`](tag.md) instead.

### Format

#### Content

-   Keep chip labels short. Chips with long labels don't work well in a group.
-   Don't use action verbs in chip labels. Chips for choosing a dashboard to view should use the dashboard name without any verb as a label.

#### Size

<Demo>
    <Chip>Hello world</Chip>
    <Chip dense>Hello world</Chip>
</Demo>

```jsx
<Chip>Hello world</Chip>
<Chip dense>Hello world</Chip>
```

-   Chips are available in two sizes, regular and `dense`.
-   Use regular sized chips where there is space.
-   Use `dense` sized chips in information-dense pages, or inside other components.

#### Spacing

-   Chips have a default margin, so that they'll be spaced correctly in a group.
-   A smaller margin can be useful for `dense` chips when space is limited.
-   Always include some space between chips in a group.

## Options

### Single or multiple selection

-   A group of chips can allow choosing or one chip or several chips.
-   **Single selection**. Choosing one chip is useful when toggling between objects, like choosing which dashboard to view.
-   **Multiple selection**. Choosing several chips is useful when applying options to something, like applying filters to a list of data, or choosing options from a list.

### Removable

<Demo>
    <Chip onRemove>Hello world</Chip>
</Demo>

```jsx
<Chip onRemove>Hello world</Chip>
```

-   Use removable chips if an option can be removed from the group.
-   Only use removable chips when chips can be added back to the same group through another action, like choosing from a menu.

### Icon

<Demo>
    <Chip icon={<IconStar24/>} >Hello world</Chip>
</Demo>

```jsx
<Chip icon={<IconStar24 />}>Hello world</Chip>
```

-   Chips can show an icon before the text label.
-   Icons are useful to highlight special chips, like starred items.
-   Don't use the same icon for all the chips in a group. Use a title or heading for that group of chips instead.

## API Reference

<API />

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/actions-chip--default)
