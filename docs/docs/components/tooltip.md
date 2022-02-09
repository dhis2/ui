---
title: Tooltip
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { Tooltip } from '@dhis2/ui'

# Tooltip

A tooltip is used to show contextual information when triggered by clicking, focusing, or hovering an element.

<Demo>
    <Tooltip content="Tooltip content">Hover to trigger tooltip.</Tooltip>
</Demo>

## Usage

### When to use

-   **Offer more information**. Use tooltips to offer more information about an element. This can help users who are unsure about something.
-   **Preview contents**. Use tooltips to show a preview of something inside an element. For example, a tooltip when hovering over a folder that has several items could show the item names.

### When not to use

-   **Essential information**. Don't use tooltips for essential information, because a user might not know they're there.
-   **Actions**. Don't put actions inside tooltips.
-   **Repeated information**. Don't repeat information that's already on the screen. Only use tooltips to offer more context or useful information about something.

### Format

#### Content

-   Use easy to understand content, no longer than a short sentence.

## Options

### Position

<Demo>
    <Tooltip content="Tooltip content">Hover to trigger top tooltip.</Tooltip>
    <br/>
    <Tooltip placement="left" content="Tooltip content">Hover to trigger left tooltip.</Tooltip>
    <br/>
    <Tooltip placement="right" content="Tooltip content">Hover to trigger right tooltip.</Tooltip>
    <br/>
    <Tooltip placement="bottom" content="Tooltip content">Hover to trigger bottom tooltip.</Tooltip>
</Demo>

-   By default, tooltips are shown above the triggering element.
-   Other positions, `left`, `right`, and `bottom`, are available. Only use these positions if there's a reason `top` doesn't work, like in an information dense layout.

### Delay

<Demo>
    <Tooltip openDelay={500} closeDelay={50} content="Tooltip content">Hover to trigger a tooltip with a longer open delay and shorter close delay.</Tooltip>
</Demo>

-   Tooltips have two delay durations: `open` and `close`.
-   Use the default delay durations unless there's a specific use case to change them.
-   Longer `open` delays and shorter `close` delays can help prevent too many tooltips showing in a complex layout.

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/data-display-tooltip--default-placement-top)
-   API reference ==TODO: link==
