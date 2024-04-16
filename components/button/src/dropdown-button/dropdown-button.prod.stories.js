import { FlyoutMenu, MenuItem } from '@dhis2-ui/menu'
import { sharedPropTypes } from '@dhis2/ui-constants'
import React, { useState } from 'react'
import { DropdownButton } from './index.js'

const description = `
Presents several actions to a user in a small space. Can replace single, individual buttons. Should only be used for actions that are related to one another. Ensure the button has a useful level that communicates that actions are contained within. Dropdown buttons do not have an explicit action, only expanding the list of contained actions.

\`\`\`js
import { DropdownButton } from '@dhis2/ui'
\`\`\`
`

const Simple = <span>Simplest thing</span>

const { sizeArgType, buttonVariantArgType } = sharedPropTypes

export default {
    title: 'Dropdown Button',
    component: DropdownButton,
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        primary: { ...buttonVariantArgType },
        secondary: { ...buttonVariantArgType },
        destructive: { ...buttonVariantArgType },
        small: { ...sizeArgType },
        large: { ...sizeArgType },
    },
    // Default args for all stories (can be overridden)
    args: {
        name: 'buttonName',
        value: 'buttonValue',
        component: Simple,
        children: 'Label me!',
    },
}

const Template = (args) => <DropdownButton {...args} />

export const Default = Template.bind({})

export const WithClick = Template.bind({})
WithClick.args = {
    onClick: ({ open }) => console.log('onClick: the dropdown is open: ', open),
}

export const Primary = Template.bind({})
Primary.args = { primary: true }

export const Secondary = Template.bind({})
Secondary.args = { secondary: true }

export const Destructive = Template.bind({})
Destructive.args = { destructive: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Small = Template.bind({})
Small.args = { small: true }

export const Large = Template.bind({})
Large.args = { large: true }

export const WithMenu = Template.bind({})
WithMenu.args = {
    component: (
        <FlyoutMenu>
            <MenuItem label="Item 1" />
            <MenuItem label="Item 2" />
            <MenuItem label="Item 3" />
        </FlyoutMenu>
    ),
}
// FlyoutMenu needs iframe
// But docs page down too much with iframe, so disabled
WithMenu.parameters = { docs: { disable: true } }

export const InitialFocus = Template.bind({})
InitialFocus.args = { initialFocus: true }
/**
 * 'Initial focus' stories cause the docs page to scroll away each time
 * a control is changed, therefore it is omitted from the docs page (but
 * not the normal 'canvas' story viewer)
 */
InitialFocus.parameters = { docs: { disable: true } }

const OpenTemplate = (args) => {
    return <DropdownButton {...args} />
}
export const Open = OpenTemplate.bind({})
Open.args = {
    open: true,
    component: Simple,
    onClick: () => {},
}

const ManualControlTemplate = (args) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleOpen = () => setIsOpen(false)

    const Menu = (
        <ul>
            <li>First option does nothing</li>
            <li onClick={handleOpen}>Close the dropdown</li>
        </ul>
    )

    return (
        <DropdownButton
            {...args}
            onClick={() => setIsOpen(!isOpen)}
            open={isOpen}
            component={Menu}
        />
    )
}
export const ManualControl = ManualControlTemplate.bind({})
ManualControl.args = {}

export const RTL = (args) => (
    <div dir="rtl">
        <DropdownButton {...args} />
    </div>
)
RTL.args = {
    children: 'RTL text',
}
