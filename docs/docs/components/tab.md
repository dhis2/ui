---
title: Tabs
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { TabBar, Tab, IconSubscribe16, IconShare16, IconDownload16 } from '@dhis2/ui'

import API from '../../../components/tab/API.md'

# Tab

Tabs are used to navigate between different views within the same page or context.

<Demo>
    <TabBar>
        <Tab>Tab label 1</Tab>
        <Tab selected>Tab label 2</Tab>
        <Tab>Tab label 3</Tab>
        <Tab>Tab label 4</Tab>
    </TabBar>
</Demo>

## Usage

### When to use

-   **Navigate between different views in the same context**. Use tabs to show several areas of related content.

### When not to use

-   **Comparing content**. Don't use tabs to compare content.
-   **Content with a set order**. Don't use tabs to show content or forms that need to be completed in a set order. A user can move back and forth between tabs.

### Format

#### Label

-   Use short, easy to understand labels for tabs.
-   The label should summarize the content. Content inside a tab should be obvious from it's label.
-   Don't repeat the same word across several tabs.

## Options

### Icon

<Demo>
    <TabBar>
        <Tab icon={<IconSubscribe16/>}>Notifications</Tab>
        <Tab icon={<IconShare16/>} selected>Sharing and access</Tab>
        <Tab icon={<IconDownload16/>}>Downloads</Tab>
    </TabBar>
</Demo>

```jsx
<TabBar>
    <Tab icon={<IconSubscribe16 />}>Notifications</Tab>
    <Tab icon={<IconShare16 />} selected>
        Sharing and access
    </Tab>
    <Tab icon={<IconDownload16 />}>Downloads</Tab>
</TabBar>
```

-   A tab can show an icon.
-   Use icons to support the text label by providing context or a visual reference.
-   Don't include icons for decoration only, they add complexity to the interface.

### State: Disabled

<Demo>
    <TabBar>
        <Tab>Tab label 1</Tab>
        <Tab selected>Tab label 2</Tab>
        <Tab disabled >Tab label 3</Tab>
        <Tab disabled>Tab label 4</Tab>
    </TabBar>
</Demo>

```jsx
<TabBar>
    <Tab>Tab label 1</Tab>
    <Tab selected>Tab label 2</Tab>
    <Tab disabled>Tab label 3</Tab>
    <Tab disabled>Tab label 4</Tab>
</TabBar>
```

-   Use a disabled state if a tab can't be used temporarily.
-   Show a [`Tooltip`](tooltip.md) when hovering a disabled tab to give a short explanation of why the tab can't be used.
-   If a tab will never be enabled in the current context, remove it instead.

## API Reference

<API />

## Links

-   [Demo](/demo/?path=/story/tab-bar--default-fluid)
