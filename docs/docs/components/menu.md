---
title: Menu
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { FlyoutMenu, MenuItem, MenuDivider, MenuSectionHeader, IconSave24, IconDelete24, IconShare24, IconEdit24 } from '@dhis2/ui'

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

-   A menu can show dividers between groups of menu items.
-   Use dividers to split items that logically belong together. This makes the menu easier to scan.
-   Dividers can also show a section header, a text label for that group of menu items.
-   Use a section header to clarify what the menu items refer to, but don't rely on it. Menus and menu item actions should be clear without needing section headers.

### Icon

<Demo>
    <FlyoutMenu>
        <MenuItem icon= {<IconSave24 /> } label="Save" />
        <MenuItem icon= {<IconEdit24 /> } label="Rename" />
        <MenuItem icon= {<IconShare24 /> } label="Share" />
    </FlyoutMenu>
</Demo>

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

-   Use disabled menu items when a menu item is temporarily unavailable.
-   Don't use the disabled state if the menu item will never be available in this context. Remove it instead.

## API Reference

<API />

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/actions-menu-flyout-menu--default)
