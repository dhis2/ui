import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { SplitButton } from './SplitButton.js'

const description = `
Similar to the dropdown button, but can be triggered independently of opening the contained action list. The main action may be 'Save' and the contained actions may be "Save and add another" and "Save and open".

\`\`\`js
import { SplitButton } from '@dhis2/ui'
\`\`\`
`

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

const DropdownComponent = <span>Dropdown component</span>

export default {
    title: 'Actions/Buttons/Split Button',
    component: SplitButton,
    parameters: { docs: { description: { component: description } } },
    args: {
        name: 'buttonName',
        value: 'buttonValue',
        component: DropdownComponent,
        onClick: onClick,
        children: 'Label me!',
    },
    argTypes: {
        small: { ...sharedPropTypes.sizeArgType },
        large: { ...sharedPropTypes.sizeArgType },
        primary: { ...sharedPropTypes.buttonVariantArgType },
        secondary: { ...sharedPropTypes.buttonVariantArgType },
        destructive: { ...sharedPropTypes.buttonVariantArgType },
    },
}

const Template = args => <SplitButton {...args} />

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = { primary: true }
Primary.parameters = {
    docs: {
        description: {
            story: `_**Note**: The dropdown components in the following examples do not appear in the right place on this page. View the following examples in the 'Canvas' tab for the correct placement._`,
        },
    },
}

export const Secondary = Template.bind({})
Secondary.args = { secondary: true }

export const Destructive = Template.bind({})
Destructive.props = { destructive: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Small = Template.bind({})
Small.args = { small: true }

export const Large = Template.bind({})
Large.args = { large: true }

export const InitialFocus = Template.bind({})
InitialFocus.args = { initialFocus: true }
// Disable this on docs page because grabbing focus repeatedly is annoying
InitialFocus.parameters = { docs: { disable: true } }

export const WithIcon = Template.bind({})
WithIcon.args = {
    children: 'Children',
    component: <div>Component</div>,
    icon: <div>Icon</div>,
}
