---
title: Segmented control
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { SegmentedControl } from '@dhis2/ui'

import API from '../../../components/segmented-control/API.md'

# Segmented control

A segmented control is used to choose between related options that have an effect on a related area.

<Demo>
    <SegmentedControl options={[
            {
                label: 'Option 1',
                value: 'option1'
            },
            {
                label: 'Option 2',
                value: 'option2'
            },
            {
                label: 'Option 3',
                value: 'option3'
            }
        ]}
        selected="option1"
        onChange= {({value}) => {
            console.log(value)
            }}
    />
</Demo>

## Usage

```jsx
<SegmentedControl options={[
        {
            label: 'Option 1',
            value: 'option1'
        },
        {
            label: 'Option 2',
            value: 'option2'
        },
        {
            label: 'Option 3',
            value: 'option3'
        }
    ]}
    selected="option1"
/>
```

The value of each property can be used to select the option, using the `selected` property. The `onChange` callback function is called when an option is selected with the value of the item that was clicked. If you want to automatically change to the item that is selected visually, you can use this callback in combination with a state variable.

### When to use

-   **Choose between related options**. Use a segmented control to choose between closely related options.
-   **Change another view, area, or element**. A segmented control can change or have an effect on another element, like a view of data.
-   **Choose between modes**. A segmented control can be used to choose between modes. For example, choosing between different view modes of the same data.

### When not to use

-   **High-level navigation**. Don't use a segmented control to navigate between different parts of unrelated content. Use [`Tabs`](tab.md) instead.
-   **Instead of radio inputs**. Don't use a segmented control instead of radio buttons to make a choice between options that don't have a direct effect on another element.

### Format

#### Content

-   Segmented control option labels shouldn't be longer than a few short words.
-   Option labels should state clearly what each option is.
-   A separate label above the component can offer extra context for the options, if needed.

## API Reference

<API />

## Links

-   [Demo](/demo/?path=/story/segmented-control--default)
