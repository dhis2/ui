import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { Help } from './help.js'

const description = `
Small text for giving guiding information or feedback, especially for data entry instructions or form validation feedback.

\`\`\`js
import { Help } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Forms/Help',
    component: Help,
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
    args: { children: 'Allow me to be of assistance' },
}

const Template = args => <Help {...args} />

export const Default = Template.bind({})

export const StatusWarning = Template.bind({})
StatusWarning.args = { warning: true }
StatusWarning.storyName = 'Status: Warning'

export const StatusValid = Template.bind({})
StatusValid.args = { valid: true }
StatusValid.storyName = 'Status: Valid'

export const StatusError = Template.bind({})
StatusError.args = { error: true }
StatusError.storyName = 'Status: Error'

export const TextOverflow = args => (
    <div style={{ width: 200 }}>
        <Help {...args}>I take up more space than my container</Help>
    </div>
)
