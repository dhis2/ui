---
title: Popover
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { Popover } from '@dhis2/ui'

# Popover

A popover is used to show more information when a user interacts with a trigger element.

<Demo>
    <div
        ref={{
            current: '[reference]'
        }}
        style={{
            height: 0,
            width: 0,
        }}
    >
        
    </div>
    <Popover
        reference
={{
            current: '[reference]'
        }}
    >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Rhoncus aenean vel elit scelerisque mauris pellentesque. Non sodales neque sodales ut etiam sit amet. Volutpat sed cras ornare arcu dui. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Convallis posuere morbi leo urna molestie at. Mauris cursus mattis molestie a iaculis at.
        </p>
    </Popover>
</Demo>

## Usage

### When to use

-   **Show more information**. Use a popover to show information that isn't essential to the current workflow, but that might be useful to know.
-   **Offer interaction**. A popover can show interactive elements, like buttons, unlike a [`Tooltip`](tooltip.md) which only shows text.

### When not to use

-   **Essential information**. Don't use popovers for essential information or actions, because a user might not know they are there.

### Format

-   A popover doesn't offer any default content styling.
-   Include padding between the popover frame and the content inside. The amount of padding depends on the content and density of the interface. Use a [spacer constant](../utilities/constants.md) for a consistent visual experience.

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/data-display-popover--default)
-   API reference ==TODO: link==
