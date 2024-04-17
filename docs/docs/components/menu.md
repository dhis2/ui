---
title: Menu
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { FlyoutMenu, MenuItem, MenuDivider, MenuSectionHeader, IconSave24, IconDelete24, IconShare24, IconEdit24, IconVisualizationColumn24, IconFilter24, IconClock24, IconLaunch16 } from '@dhis2/ui'

import API from '../../../components/menu/API.md'

# Menu

A menu gives access to menu items, through a panel that opens from a trigger element. Menu items usually trigger actions.

<Demo>
    <FlyoutMenu>
        <MenuItem label="Menu item label" />
        <MenuItem label="Menu item label" />
        <MenuItem label="Menu item label" />
    </FlyoutMenu>
</Demo>

## Usage

### When to use

-   **Show more options in a limited space**. Use a menu to show more options and actions when there's limited space.

### When not to use

-   **Choosing options in a form**. Use a [`Select`](select.md) to choose from a set of options as part of a form.

### Format

#### Content

##### Label

-   Menu item labels should be short and easy to understand.
-   One or two words is often enough to explain the action.
-   Refer to the [writing guidelines](../patterns/writing.md) and [glossary](../patterns/glossary.md) for more information about writing useful labels.

##### Order and grouping

<Demo>
    <FlyoutMenu>
        <MenuItem label="Add to program" />
        <MenuItem label="Add to stage" />
        <MenuDivider />
        <MenuItem label="Analyze data" />
        <MenuItem label="Run integrity check" />
    </FlyoutMenu>
</Demo>

```jsx
<FlyoutMenu>
    <MenuItem label="Add to program" />
    <MenuItem label="Add to stage" />
    <MenuDivider />
    <MenuItem label="Analyze data" />
    <MenuItem label="Run integrity check" />
</FlyoutMenu>
```

-   Order the menu items in a logical way, grouping together related actions.
-   Destructive menu items should be shown in their own group, usually last.

##### Size

<Demo>
    <div className='stacked-examples-horizontal'>
        <FlyoutMenu>
            <MenuItem label="Menu item label" />
            <MenuItem label="Menu item label" />
        </FlyoutMenu>
        <FlyoutMenu>
            <MenuItem dense label="Menu item label" />
            <MenuItem dense label="Menu item label" />
        </FlyoutMenu>
    </div>
</Demo>

```jsx
<FlyoutMenu>
    <MenuItem label="Menu item label" />
    <MenuItem label="Menu item label" />
</FlyoutMenu>
<FlyoutMenu>
    <MenuItem dense label="Menu item label" />
    <MenuItem dense label="Menu item label" />
</FlyoutMenu>
```

-   Menu items are available in two sizes, regular and `dense`.
-   Use `dense` sized menu items in complex, information-dense layouts. Otherwise, the regular size.

#### Nesting

<Demo>
    <FlyoutMenu>
        <MenuItem label="Menu item label">
            <MenuItem label="Menu item label" />
        </MenuItem>
    </FlyoutMenu>
</Demo>

```jsx
<FlyoutMenu>
    <MenuItem label="Menu item label">
        <MenuItem label="Menu item label" />
    </MenuItem>
</FlyoutMenu>
```

-   A menu item can open another menu.
-   Use nested menus when there's complex options that can be grouped together, like a _Download_ parent item containing different file formats.
-   Avoid nesting more than 3 levels of menus.

## Options

### Dividers and section headers

<Demo>
    <FlyoutMenu>
        <MenuSectionHeader label="Actions"/>
        <MenuItem label="Add to program" />
        <MenuItem label="Add to stage" />
        <MenuSectionHeader label="Other"/>
        <MenuItem label="Analyze data" />
        <MenuItem label="Run integrity check" />
    </FlyoutMenu>
</Demo>

```jsx
<FlyoutMenu>
    <MenuSectionHeader label="Actions" />
    <MenuItem label="Add to program" />
    <MenuItem label="Add to stage" />
    <MenuSectionHeader label="Other" />
    <MenuItem label="Analyze data" />
    <MenuItem label="Run integrity check" />
</FlyoutMenu>
```

-   A menu can show dividers between groups of menu items.
-   Use dividers to split items that logically belong together. This makes the menu easier to scan.
-   Dividers can also show a section header, a text label for that group of menu items.
-   Use a section header to clarify what the menu items refer to, but don't rely on it. Menus and menu item actions should be clear without needing section headers.

### Suffix

<Demo>
    <FlyoutMenu className="demo-fullwidth">
        <MenuItem icon= {<IconFilter24 />} label="Filter data" />
        <MenuItem icon= {<IconClock24 />} label="Change time period" />
        <MenuItem icon= {<IconVisualizationColumn24 />} label="Open in Data Visualizer app" suffix= {<IconLaunch16/>}/>
    </FlyoutMenu>
</Demo>

```jsx
<FlyoutMenu>
    <MenuItem icon={<IconFilter24 />} label="Filter data" />
    <MenuItem icon={<IconClock24 />} label="Change time period" />
    <MenuItem
        icon={<IconVisualizationColumn24 />}
        label="Open in Data Visualizer app"
        suffix={<IconLaunch16 />}
    />
</FlyoutMenu>
```

-   A menu item can show a suffix.
-   Use a suffix to show extra information about the context or intent of a menu item.
-   Common use cases include showing a menu item's keyboard shortcut and showing an indicator that a menu item will open a new tab.
-   Don't include interactive components, like buttons, in a menu item suffix.

### Icon

<Demo>
    <FlyoutMenu>
        <MenuItem icon= {<IconSave24 /> } label="Save" />
        <MenuItem icon= {<IconEdit24 /> } label="Rename" />
        <MenuItem icon= {<IconShare24 /> } label="Share" />
    </FlyoutMenu>
</Demo>

```jsx
<FlyoutMenu>
    <MenuItem icon={<IconSave24 />} label="Save" />
    <MenuItem icon={<IconEdit24 />} label="Rename" />
    <MenuItem icon={<IconShare24 />} label="Share" />
</FlyoutMenu>
```

-   A menu item can show an icon.
-   Use icons to support the text label by providing context or a visual reference.
-   Don't include icons for decoration only, they add complexity to the interface.

### Type: Destructive

<Demo>
    <FlyoutMenu>
        <MenuItem icon= {<IconSave24 /> } label="Save" />
        <MenuItem icon= {<IconEdit24 /> } label="Rename" />
        <MenuItem icon= {<IconShare24 /> } label="Share" />
        <MenuDivider />
        <MenuItem destructive icon= {<IconDelete24 /> } label="Delete program" />
    </FlyoutMenu>
</Demo>

```jsx
<FlyoutMenu>
    <MenuItem icon={<IconSave24 />} label="Save" />
    <MenuItem icon={<IconEdit24 />} label="Rename" />
    <MenuItem icon={<IconShare24 />} label="Share" />
    <MenuDivider />
    <MenuItem destructive icon={<IconDelete24 />} label="Delete program" />
</FlyoutMenu>
```

-   Use destructive menu items for critical, destructive actions like _Delete_ or _End process_.
-   Don't use a destructive menu item unless the item is both critical and destructive. Important menu items shouldn't use the destructive type to highlight only their importance.
-   Most menus should have a maximum of one destructive item.
-   Use a divider to separate the destructive menu item from the other menu items. A section header usually isn't necessary.

### State: Disabled

<Demo>
    <FlyoutMenu>
        <MenuItem disabled icon= {<IconSave24 /> } label="Save" />
        <MenuItem icon= {<IconEdit24 /> } label="Rename" />
        <MenuItem icon= {<IconShare24 /> } label="Share" />
    </FlyoutMenu>
</Demo>

```jsx
<FlyoutMenu>
    <MenuItem disabled icon={<IconSave24 />} label="Save" />
    <MenuItem icon={<IconEdit24 />} label="Rename" />
    <MenuItem icon={<IconShare24 />} label="Share" />
</FlyoutMenu>
```

-   Use disabled menu items when a menu item is temporarily unavailable.
-   Don't use the disabled state if the menu item will never be available in this context. Remove it instead.

## API Reference

<API />

## Links

-   [Demo](/demo/?path=/story/flyout-menu--default)
