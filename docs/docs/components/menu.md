---
title: Menu
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/menu/API.md'

# Menu

A menu gives access to menu items, through a panel that opens from a trigger element. Menu items usually trigger actions.

<Demo
    path="flyout-menu--default"
    height="200px"
/>

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
-   Refer to the [writing guidelines](/design-system/patterns/writing) and [glossary](/design-system/patterns/glossary) for more information about writing useful labels.

##### Order and grouping

<Demo
    path="flyout-menu--with-various-children"
    height="550px"
/>

```jsx
<FlyoutMenu>
    <MenuSectionHeader label="Section with sub-menus" />
    <MenuItem label="Item 1" />
    <MenuItem label="Item 2">
        <MenuItem label="Item 2 a" />
        <MenuItem label="Item 2 b">
            <MenuItem label="Item 2 b i" />
            <MenuItem label="Item 2 b ii" />
        </MenuItem>
        <MenuItem label="Item 2 c" />
    </MenuItem>
    <MenuItem label="Item 3" />
    <MenuItem label="Item 4">
        <MenuItem label="Item 4 a" />
        <MenuItem label="Item 4 b">
            <MenuItem label="Item 4 b i" />
            <MenuItem label="Item 4 b ii" />
        </MenuItem>
        <MenuItem label="Item 4 c" />
    </MenuItem>
    <MenuItem label="Item 5" />
    <MenuSectionHeader label="Section with dividers between menu items" />
    <MenuItem label="Item 1" />
    <MenuDivider />
    <MenuItem label="Item 2" />
    <MenuDivider />
    <MenuItem label="Item 3" />
</FlyoutMenu>
```

-   Order the menu items in a logical way, grouping together related actions.
-   Destructive menu items should be shown in their own group, usually last.

##### Size

<Demo
    path="flyout-menu--dense"
    height="150px"
/>

```jsx
<FlyoutMenu>
    <MenuItem dense label="Menu item label" />
    <MenuItem dense label="Menu item label" />
</FlyoutMenu>
```

-   Menu items are available in two sizes, regular and `dense`.
-   Use `dense` sized menu items in complex, information-dense layouts. Otherwise, the regular size.

#### Nesting

As shown in the [order and grouping](#order-and-grouping) section, a menu can contain multiple levels of menu items.

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

As shown in the [order and grouping](#order-and-grouping) section, a menu can contain dividers and section headers.

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

<Demo
    path="menu-item--suffix"
    height="150px"
/>

```jsx
<FlyoutMenu>
    <MenuItem
        suffix={<IconReference />}
        icon={<IconReference />}
        label="Open in data visualizer"
    />
</FlyoutMenu>
```

-   A menu item can show a suffix.
-   Use a suffix to show extra information about the context or intent of a menu item.
-   Common use cases include showing a menu item's keyboard shortcut and showing an indicator that a menu item will open a new tab.
-   Don't include interactive components, like buttons, in a menu item suffix.

### Icon

<Demo
    path="menu-item--icon"
    height="150px"
/>

```jsx
<Menu>
    <MenuItem icon={<IconApps24 />} label="Menu item" />
    <MenuItem
        icon={<IconApps24 color="magenta" />}
        label="Menu item - with custom icon fill"
    />
</Menu>
```

-   A menu item can show an icon.
-   Use icons to support the text label by providing context or a visual reference.
-   Don't include icons for decoration only, they add complexity to the interface.

### Type: Destructive

<Demo
    path="menu-item--destructive"
    height="150px"
    args="label:Delete+program"
/>

```jsx
<MenuItem destructive label="Delete program" />
```

-   Use destructive menu items for critical, destructive actions like _Delete_ or _End process_.
-   Don't use a destructive menu item unless the item is both critical and destructive. Important menu items shouldn't use the destructive type to highlight only their importance.
-   Most menus should have a maximum of one destructive item.
-   Use a divider to separate the destructive menu item from the other menu items. A section header usually isn't necessary.

### State: Disabled

<Demo
    path="menu-item--disabled"
    height="150px"
    args="label:Save"
/>

```jsx
<MenuItem disabled label="Save" />
```

-   Use disabled menu items when a menu item is temporarily unavailable.
-   Don't use the disabled state if the menu item will never be available in this context. Remove it instead.

## API Reference

<API />
