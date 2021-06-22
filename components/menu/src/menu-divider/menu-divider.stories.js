import React from 'react'
import { Menu, MenuItem } from '../index.js'
import { MenuDivider } from './menu-divider.js'

const description = `
Items in a menu can be split into separate sections by using dividers. Group relevant menu items together to help the user understand the options quickly. A divider can be used alone. If using a MenuSectionHeader, a divider will be automatically included. Try not to group single menu items together. An exception to this is a critical destructive menu item, like 'Delete', which can be separated from other menu items.

\`\`\`js
import { MenuDivider } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Actions/Menu/Menu Divider',
    component: MenuDivider,
    parameters: { docs: { description: { component: description } } },
}

const Template = args => (
    <Menu>
        <MenuItem label="Item above divider" />
        <MenuDivider {...args} />
        <MenuItem label="Item below divider" />
    </Menu>
)

export const Default = Template.bind({})

export const Dense = Template.bind({})
Dense.args = { dense: true }
