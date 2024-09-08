---
title: Tag
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import API from '../../../components/tag/API.md'

# Tag

Tags are used to label items by a set of shared properties, like category or status.

<Demo
    path="tag--default"
    height="120px"
/>

## Usage

### When to use

-   **Showing a status or category**. Use a tag to give a quick indicator of something's status or category, usually as part of a group of many items.
-   **Several items share common properties**. Use tags when several items, like rows in a table, share subsets of common properties. Tags help a user quickly understand which items have which properties.

### When not to use

-   **Primary actions**. Don't use tags for any type of important action. A tag isn't a button. A tag could be used to a secondary action, like opening a convenient view of items with similar tags.

### Variants

| Variant                      | When to use                                                               |
| ---------------------------- | ------------------------------------------------------------------------- |
| Default                      | The default choice. Use this if no other variant matches the use case.    |
| Neutral                      | Use to communicate neutrality, when something isn't positive or negative. |
| Positive                     | Use to communicate success or validity.                                   |
| Negative                     | Use to communicate a problem or error.                                    |

<Tabs>
    <TabItem value="Default" label="Default">
        <Demo
            path="tag--default"
            height="120px"
        />
    </TabItem>
    <TabItem value="Neutral" label="Neutral">
        <Demo
            path="tag--neutral"
            height="120px"
        />
    </TabItem>
    <TabItem value="Positive" label="Positive">
        <Demo
            path="tag--positive"
            height="120px"
        />
    </TabItem>
    <TabItem value="Negative" label="Negative">
        <Demo
            path="tag--negative"
            height="120px"
        />
    </TabItem>
</Tabs>

```jsx
<Tag>Default</Tag>
<Tag neutral>Neutral</Tag>
<Tag positive>Positive</Tag>
<Tag negative>Negative</Tag>
```

### Format

#### Label

-   Use short, understandable words for tag labels. If possible, use a single word.

## Options

### Icon

<Demo
    path="tag--with-large-icon"
    height="120px"
/>

```jsx
<Tag icon={<IconCheckmarkCircle16/>} positive>Passed</Tag>
<Tag icon={<IconError16/>} negative>Failed</Tag>
```

-   A tag can show an icon before the text label.
-   Use icons to support the text label by providing context or a visual reference.
-   Don't include icons for decoration only, they add complexity to the interface.

### Bold

<Tabs>
    <TabItem value="Default" label="Default">
        <Demo
            path="tag--bold"
            height="120px"
        />
    </TabItem>
    <TabItem value="Neutral" label="Neutral">
        <Demo
            path="tag--bold"
            height="120px"
            args="neutral:true"
        />
    </TabItem>
    <TabItem value="Positive" label="Positive">
        <Demo
            path="tag--bold"
            height="120px"
            args="positive:true"
        />
    </TabItem>
    <TabItem value="Negative" label="Negative">
        <Demo
            path="tag--bold"
            height="120px"
            args="negative:true"
        />
    </TabItem>
</Tabs>

```jsx
<Tag bold>Tag label</Tag>
<Tag bold neutral>Tag label</Tag>
<Tag bold positive>Tag label</Tag>
<Tag bold negative>Tag label</Tag>
```

-   Use bold tags where it's important the information is noticed by a user.
-   Don't overuse bold tags, only use them when the information is important.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/tag--default" target="_blank">Demo</a>
