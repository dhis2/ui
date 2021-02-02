import { IconApps24 } from '@dhis2/ui-icons'
import React, { useState } from 'react'
import { Menu } from '../Menu/Menu.js'
import { MenuItem } from './MenuItem.js'

const description = `
Menu Items are intended to be children of Menu and Flyout Menu components. They can be nested to create submenus.

Splitting menus into several levels with child menus makes sense when there are a lot of options that can be grouped together. An example may be an option in level 1 menu of 'Download' that has several different download formats as child menu items. Make sure that child menu items relate to their parent item, otherwise a user will struggle to discover them. A menu item with children is not selectable/actionable itself, it serves only as a container for the child elements. Try to keep menus to a maximum of 1, 2 or 3 levels, anything more than this can easily confuse the user.

There is no enforced ordering of menu items, they should be presented in order of relevance. Put the most commonly used items at the top of the menu for easy discovery and access.

See the [design system](https://github.com/dhis2/design-system/blob/master/molecules/menu.md) for more information about menus.

\`\`\`js
import { MenuItem } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Actions/Menu/Menu Item',
    component: MenuItem,
    args: { label: 'Menu item' },
    parameters: { docs: { description: { component: description } } },
}

const Template = args => (
    <Menu>
        <MenuItem {...args} />
    </Menu>
)

export const Default = Template.bind({})

export const Active = Template.bind({})
Active.args = { active: true }

export const Chevron = Template.bind({})
Chevron.args = { chevron: true }

export const Dense = Template.bind({})
Dense.args = { dense: true }

export const Destructive = Template.bind({})
Destructive.args = { destructive: true }
Destructive.parameters = {
    docs: {
        description: {
            story:
                "Destructive menu items should be used for critical, destructive actions such as 'Delete', 'Remove' or 'End process'. Do not use destructive menu items for actions that are simply important, they must also be destructive in nature. A menu should, ideally, only have one destructive action. Using a divider to separate normal and destructive options helps the user to understand that the destructive options is different from the rest of the options.",
        },
    },
}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
Disabled.parameters = {
    docs: {
        description: {
            story:
                'Menu items should be disabled when they are not available, but could be available if something changes. Do not include menu items that will never be available, this will confuse a user. Instead, remove them from the menu.',
        },
    },
}

export const Link = Template.bind({})
Link.args = { target: '_blank', href: 'http://dhis2.org' }

export const Icon = args => {
    // import { IconApps24 } from '@dhis2/ui'
    return (
        <Menu>
            <MenuItem {...args} icon={<IconApps24 />} label="Menu item" />
            <MenuItem
                icon={<IconApps24 color="magenta" />}
                label="Menu item - with custom icon fill"
            />
        </Menu>
    )
}
Icon.parameters = {
    docs: {
        source: { type: 'code' },
        description: {
            story:
                'A menu item can include an icon to help the user understand or recognize the option. An icon should support the menu item text and be simple enough to be understood in a dense UI. Icons add a lot of visual noise a menu, so only include them where they will help the user. Do not include icons only for visual reasons, the icon must functionally support the users understanding. Do not use complex icons. All menu items in a single menu do not need to have icons.',
        },
    },
}

export const OnClick = args => (
    <Menu>
        <MenuItem
            onClick={(payload, event) => {
                console.log(payload.value, event.target)
            }}
            value="myValue"
            label="Menu item"
            {...args}
        />
    </Menu>
)
OnClick.parameters = { docs: { source: { type: 'code' } } }
OnClick.args = { onClick: console.log }

export const ToggleMenuItem = args => {
    const [on, setOn] = useState(false)
    const toggleOn = () => setOn(!on)
    const checkMarkStyle = { fontSize: '24px', lineHeight: '24px' }
    const icon = on ? <span style={checkMarkStyle}>✓</span> : <span />

    return (
        <Menu>
            <MenuItem
                {...args}
                onClick={toggleOn}
                icon={icon}
                label="A toggle menu item"
            />
        </Menu>
    )
}
ToggleMenuItem.parameters = { docs: { source: { type: 'code' } } }

export const SubMenus = args => {
    const [showSubMenu, setShowSubMenu] = React.useState(false)
    const toggleSubMenu = () => setShowSubMenu(!showSubMenu)

    return (
        <Menu>
            <MenuItem
                showSubMenu={showSubMenu}
                toggleSubMenu={toggleSubMenu}
                {...args}
                label="Parent of submenus"
            >
                <MenuItem label="Submenu child 1" />
                <MenuItem label="Submenu child 2" />
            </MenuItem>
            <MenuItem {...args} label="Regular item" />
        </Menu>
    )
}
SubMenus.parameters = {
    docs: {
        source: { type: 'code' },
        description: {
            story:
                "_View this story in the 'Canvas' tab for proper submenu alignment._",
        },
    },
}
