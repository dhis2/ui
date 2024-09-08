---
title: Checkbox
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/checkbox/API.md'

# Checkbox

Checkboxes are used to choose one or more items from a list. A checkbox can also be used to toggle an option.

<Demo
    path="/story/checkbox--checked"
    args="label:Checked Checkbox"
    height="120px"
/>

```jsx
<Checkbox checked label="Checked Checkbox" />
```

## Usage

### When to use

-   **Choose one or more items from a list of choices**. Use checkboxes when more than one option can be chosen.
-   **Toggle an option**. A single checkbox can be used as a toggle, to enable or disable a feature, for example.

### When not to use

-   **Choosing a single item**. Don't use checkboxes if only one option can be chosen. Use a [`Radio`](radio.md) instead.
-   **Choosing from many items.** Don't use checkboxes if there are many items to choose from. 7–10 checkboxes is an upper limit. If there's more choices than this, use a [`MultiSelect`](select.md) instead.

### Format

#### Content

-   Checkbox labels should be positive, so that checking a checkbox means the option is _on_ or _true_. So, a checkbox label would read _Show legend key_, not _Hide legend key_.
-   Always show a label with a checkbox.

#### Size

<Demo
    path="/story/checkbox--checked-dense"
    args="label:Dense Checked Checkbox"
    height="120px"
/>

```jsx
<Checkbox checked dense label="Dense Checked Checkbox" />
```

-   Checkboxes are available in two sizes, regular and `dense`. Regular sized checkboxes are useful when there's space available. Use `dense` sized checkboxes in compact, information-dense interfaces.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/checkbox--default" target="_blank">Demo</a>
