---
title: Tag
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { Chip, Tag, IconError16, IconCheckmarkCircle16 } from '@dhis2/ui'

# Tag

Tags are used to label items by a set of shared properties, like category or status.

<Demo>
    <Tag>Tag label</Tag>
</Demo>

## Usage

### When to use

-   **Showing a status or category**. Use a tag to give a quick indicator of something's status or category, usually as part of a group of many items.
-   **Several items share common properties**. Use tags when several items, like rows in a table, share subsets of common properties. Tags help a user quickly understand which items have which properties.

### When not to use

-   **Primary actions**. Don't use tags for any type of important action. A tag isn't a button. A tag could be used to a secondary action, like opening a convenient view of items with similar tags.

### Variants

| Variant                      | When to use                                                               |
| ---------------------------- | ------------------------------------------------------------------------- |
| <Tag>Default</Tag>           | The default choice. Use this if no other variant matches the use case.    |
| <Tag neutral>Neutral</Tag>   | Use to communicate neutrality, when something isn't positive or negative. |
| <Tag positive>Positive</Tag> | Use to communicate success or validity.                                   |
| <Tag negative>Negative</Tag> | Use to communicate a problem or error.                                    |

### Format

#### Label

-   Use short, understandable words for tag labels. If possible, use a single word.

## Options

### Icon

<Demo>
    <div className='stacked-examples-horizontal'>
        <Tag icon={<IconCheckmarkCircle16/>} positive>Passed</Tag>
        <Tag icon={<IconError16/>} negative>Failed</Tag>
    </div>
</Demo>

-   A tag can show an icon before the text label.
-   Use icons to support the text label by providing context or a visual reference.
-   Don't include icons for decoration only, they add complexity to the interface.

### Bold

<Demo>
    <div className='stacked-examples-horizontal'>
        <Tag bold>Tag label</Tag>
        <Tag bold neutral>Tag label</Tag>
        <Tag bold positive>Tag label</Tag>
        <Tag bold negative>Tag label</Tag>
    </div>
</Demo>

-   Use bold tags where it's important the information is noticed by a user.
-   Don't overuse bold tags, only use them when the information is important.

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/data-display-tag--default)
-   API reference ==TODO: link==
