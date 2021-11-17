import React from 'react'
import { ButtonBase } from './button-base.js'

// Note: make sure 'fenced code blocks' are not indentend in this template string
const description = `Buttons are used for triggering actions.
There are different types of buttons in the design system which are intended
for different types of actions.

\`\`\`js
import { Button } from '@dhis2/ui'
\`\`\``

const logger = ({ name, value }) => console.log(`${name}: ${value}`)

export default {
    title: 'Actions/Buttons/ButtonBase',
    component: ButtonBase,
    parameters: {
        componentSubtitle: 'Initiates an action',
        docs: {
            description: {
                component: description,
            },
        },
    },
    args: {
        children: 'Label me!',
        onClick: logger,
    },
}

const Template = (args) => <ButtonBase {...args} />

export const Basic = Template.bind({})
Basic.args = {
    name: 'Basic button',
}

export const Disabled = (args) => (
    <ButtonBase name="Disabled button" {...args} />
)
Disabled.args = {
    disabled: true,
}
Disabled.parameters = {
    docs: {
        description: {
            story: "Use disabled buttons when an action is being prevented for some reason. \
                Always communicate to the user why the button can't be clicked. This can \
                be done through a tooltip on hover, or with supplementary text underneath \
                the button. Do not change the button label between disabled/enabled states.",
        },
    },
}
