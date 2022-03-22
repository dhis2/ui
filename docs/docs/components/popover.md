---
title: Popover
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { Popover } from '@dhis2/ui'

import API from '../../../components/popover/API.md'

# Popover

A popover is used to show more information when a user interacts with a trigger element.

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-popover--default" target="_blank">Storybook demo: Popover</a>.</p> 
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

## API Reference

<API />

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/data-display-popover--default)
