---
title: Tooltip
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import API from '../../../components/tooltip/API.md'

# Tooltip

A tooltip is used to show contextual information when triggered by clicking, focusing, or hovering an element.

<Demo
    path="tooltip--default-placement-top"
    height="200px"
/>

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

<Tabs>
    <TabItem value="Default" label="Default">
        <Demo
            path="tooltip--default-placement-top"
            height="200px"
        />
    </TabItem>
    <TabItem value="Left" label="Left">
        <Demo
            path="tooltip--placement-left"
            height="200px"
        />
    </TabItem>
    <TabItem value="Right" label="Right">
        <Demo
            path="tooltip--placement-right"
            height="200px"
        />
    </TabItem>
    <TabItem value="Bottom" label="Bottom">
       <Demo
            path="tooltip--placement-bottom"
            height="200px"
        />
    </TabItem>
</Tabs>

```jsx
<Tooltip content="Tooltip content">Hover to trigger top tooltip.</Tooltip>
<Tooltip placement="left" content="Tooltip content">Hover to trigger left tooltip.</Tooltip>
<Tooltip placement="right" content="Tooltip content">Hover to trigger right tooltip.</Tooltip>
<Tooltip placement="bottom" content="Tooltip content">Hover to trigger bottom tooltip.</Tooltip>
```

-   By default, tooltips are shown above the triggering element.
-   Other positions, `left`, `right`, and `bottom`, are available. Only use these positions if there's a reason `top` doesn't work, like in an information dense layout.

### Delay

<Demo
    path="tooltip--configurable-open-and-close-delays"
    height="200px"
    args="openDelay:500;closeDelay:50"
/>

```jsx
<Tooltip openDelay={500} closeDelay={50} content="Tooltip content">
    Hover to trigger a tooltip with a longer open delay and shorter close delay.
</Tooltip>
```

-   Tooltips have two delay durations: `open` and `close`.
-   Use the default delay durations unless there's a specific use case to change them.
-   Longer `open` delays and shorter `close` delays can help prevent too many tooltips showing in a complex layout.

## API Reference

<API />
