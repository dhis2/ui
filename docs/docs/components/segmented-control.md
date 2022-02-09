---
title: Segmented control
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { SegmentedControl } from '@dhis2/ui'

# Segmented control

A segmented control is used to choose between related options that have an effect on a related area.

<Demo>
    <SegmentedControl options
    ={[
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
        selected
        ="option1"
    />
</Demo>

## Usage

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

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/actions-segmented-control--default)
-   API reference ==TODO: link==
