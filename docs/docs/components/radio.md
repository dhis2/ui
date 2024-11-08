---
title: Radio
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/radio/API.md'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# Radio

Radio inputs are used to choose one item from a list.

<Demo
    path="radio--default"
    height="120px"
/>

## Usage

### When to use

-   **Choose one item from a list of choices**. Use radio inputs when only a single option can be chosen.
-   **Limited number of choices**. Radio inputs only work well when there's a small number of choices.

### When not to use

-   **Choosing from many items**. Don't use radio inputs if there's more than about 7–10 choices. Use a [`Select`](select.md) instead.
-   **Choosing several options**. Don't use radio inputs if several options can be chosen. Use several [`Checkbox`](checkbox.md) components instead.

### Usability

-   Radio inputs can be unselected, so make sure to offer a _None_ option if the user should be able to unselect their choice.
-   Make sure each option doesn't overlap, like 10–20 and 20–30 where 20 is present in both options.

### Format

#### Content

-   Always show at least a label with a radio input.
-   A label doesn't have to be a single text. For example, a label could be a combination of an icon, title and description text.
-   Radio inputs in a list should use a consistent label pattern to make it easy to scan options.

#### Size

<Tabs lazy>
    <TabItem value="Default" label="Default">
        <Demo
            path="radio--checked"
            height="120px"
        />
    </TabItem>
    <TabItem value="Dense" label="Dense">
        <Demo
            path="radio--checked-dense"
            height="120px"
        />
    </TabItem>
</Tabs>

```jsx
<Radio label="Radio input" checked />
<Radio label="Radio input" checked dense />
```

-   Radio inputs are available in two sizes, regular and `dense`. Regular sized radio inputs are useful when there's space available. Use `dense` sized radio inputs in compact, information dense interfaces.

## API Reference

<API />
