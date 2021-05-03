import PropTypes from 'prop-types'
import React from 'react'
import { MenuItem } from '../menu-item/menu-item.js'
import { Menu } from '../menu.js'
import { MenuSectionHeader } from './menu-section-header.js'

const description = `
Items in a menu can be split into separate sections by using Dividers. Group relevant menu items together to help the user understand the options quickly. A Divider can be used alone. If using a Menu Section Header, a divider will be automatically included. Try not to group single menu items together. An exception to this is a critical destructive menu item, like 'Delete', which can be separated from other menu items.

\`\`\`js
import { MenuSectionHeader } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Actions/Menu/Menu Section Header',
    component: MenuSectionHeader,
    args: { label: 'Section header' },
    parameters: { docs: { description: { component: description } } },
}

const Template = ({ menuArgs, ...args }) => (
    <Menu {...menuArgs}>
        <MenuItem label="Menu item above" />
        <MenuSectionHeader {...args} />
        <MenuItem label="Menu item below" />
    </Menu>
)
Template.propTypes = { menuArgs: PropTypes.shape() }

export const Default = Template.bind({})

export const Dense = Template.bind({})
Dense.args = { menuArgs: { dense: true }, dense: true }

export const WithoutDivider = Template.bind({})
WithoutDivider.args = { hideDivider: true }

export const TopOfList = args => (
    <Menu>
        <MenuSectionHeader {...args} />
        <MenuItem label="Item 1" />
        <MenuItem label="Item 2" />
    </Menu>
)
TopOfList.args = { label: 'Top of list (so <Menu> hides divider)' }
TopOfList.parameters = {
    docs: {
        description: {
            story:
                'When the Section Header is the first child of a `<Menu>`, the Menu parent automatically applies the `hideDivider` prop.',
        },
    },
}
