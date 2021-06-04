import React from 'react'
import { MenuItem, MenuSectionHeader } from '../index.js'
import { Menu } from './index.js'

const description = `
Use menus to provide access to options and actions where space is limited and displaying all the options would be impractical. For example, providing access to a range of actions for every dashboard item displayed. Containing all those actions in menus keeps the page manageable.

The menu component is flexible in where it can be used and its contents can be flexible too. However, the most common use case is a menu containing menu items.

Make sure the menu item labels are short and easy to understand. One word is often enough to describe an action or option. Do not use sentences as labels. Some examples of good menu item labels:

- "Save"
- "Open as map"
- "Export PDF"
- "Duplicate"

Typical children are Menu Items, Menu Dividers, and Menu Section Headers.

\`\`\`js
import { Menu } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Actions/Menu/Menu',
    component: Menu,
    parameters: { docs: { description: { component: description } } },
}

export const Default = args => (
    <Menu {...args}>
        <MenuItem label="Menu item" />
        <MenuItem label="Menu item" />
    </Menu>
)

export const Dense = args => (
    <Menu {...args}>
        <MenuItem label="Menu item" />
        <MenuItem label="Menu item" />
    </Menu>
)
Dense.args = { dense: true }
Dense.parameters = {
    docs: {
        description: {
            story:
                'Menus are available in regular or dense sizes. Use dense menus in data-heavy applications used by users comfortable with technology. Use regular menus in apps that are less complex or have few controls.',
        },
    },
}

export const AutoHideFirstSectionHeaderDivider = args => (
    <Menu {...args}>
        <MenuSectionHeader label="First - no divider above" />
        <MenuSectionHeader label="Second - with divider above" />
    </Menu>
)

export const SideBarMenu = args => (
    <main
        style={{
            display: 'flex',
            height: '100%',
            border: '1px solid grey',
        }}
    >
        <aside style={{ width: 200, height: '100%', flexGrow: 0 }}>
            <Menu {...args}>
                <MenuItem label="Menu item" />
                <MenuItem label="Menu item" />
            </Menu>
        </aside>
        <section
            style={{
                backgroundColor: '#f3ffff',
                flexGrow: 1,
                padding: 20,
                borderLeft: '1px solid grey',
            }}
        >
            Main content
        </section>
    </main>
)
