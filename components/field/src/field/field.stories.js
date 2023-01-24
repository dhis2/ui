import { Input } from '@dhis2-ui/input'
import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { Field } from './field.js'

const description = `
A useful container for form components, including a label, help text, and validation text.

\`\`\`js
import { Field } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Field',
    component: Field,
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
    parameters: { docs: { description: { component: description } } },
}

export const Default = (args) => (
    <>
        <Field {...args}>
            <Input
                onChange={() => {
                    console.log('Nothing happens')
                }}
                name="input"
                label="An input"
            />
        </Field>
        <Field helpText="Help!" label="Second field">
            <Input
                onChange={() => {
                    console.log('Nothing happens')
                }}
                name="input2"
                label="An second input"
            />
        </Field>
    </>
)
Default.args = {
    label: 'First field (change me with controls)',
    helpText: 'Help text!',
    validationText: "I'm validation text",
}
