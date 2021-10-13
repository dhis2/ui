import React from 'react'
import { Legend } from './legend.js'

const description = `
Legends are to be used in a Field Set to describe the form fields.  They may indicate that the fields are required.

See the [Field Set](../?path=/docs/forms-field-set-field-set--usage-example-a-radio-button-group-with-error-status) for a usage example.

\`\`\`js
import { Legend } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Forms/Field Set/Legend',
    component: Legend,
    parameters: { docs: { description: { component: description } } },
}

const Template = (args) => (
    <Legend {...args}>I am wrapped in a legend which has some styling</Legend>
)

export const Default = Template.bind({})

export const Required = Template.bind({})
Required.args = { required: true }
