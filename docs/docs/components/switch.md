---
title: Switch
---

import { Demo } from '@site/src/components/DemoComponent.jsx'

import API from '../../../components/switch/API.md'

# Switch

Switches are used to toggle something between an on and off state.

<Demo
    path="switch--focused-unchecked"
    height="150px"
/>

## Usage

```jsx
<Switch label="Switch" />
```

### When to use

-   **Toggle a job or process**. Use a switch to toggle a constantly running process. Examples of constantly running processes might be _Automatic updates_, _Logging_, or a background task.

### When not to use

-   **Toggling an option**. Don't use a switch to toggle options, like _Show legend set_. Options aren't constantly running processes. Use a [`Checkbox`](checkbox.md) instead.
-   **Form controls**. Don't use a switch to toggle options in a form. Use a [`Checkbox`](checkbox.md) instead.

### Format

#### Label

-   Always show a label next to a switch to make it clear what process will be toggled on and off.

#### Size

<Demo
    path="switch--checked-dense"
    height="120px"
/>

```jsx
<Switch checked dense label="Dense sized switch" />
```

-   Switches are available in two sizes, regular and `dense`. Regular sized switches are useful when there's space available. Use `dense` sized switches in compact, information-dense interfaces.

## API Reference

<API />
