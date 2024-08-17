import { Help } from '@dhis2-ui/help'
import { Legend } from '@dhis2-ui/legend'
import { Radio } from '@dhis2-ui/radio'
import React from 'react'
import { Field } from '../index.js'
import { FieldSet } from './field-set.js'

const description = `
A container for grouping several Field components together. Use a \`<Legend>\` component to add helpful guiding text.

\`\`\`js
import { FieldSet } from '@dhis2/ui'
\`\`\`
`

const onChange = () => {
    console.log('Radio was clicked, nothing else will happen')
}

export default {
    title: 'Field Set',
    component: FieldSet,
    parameters: { docs: { description: { component: description } } },
}

export const Default = (args) => (
    <FieldSet {...args}>
        It renders something in a fieldset element without the browser styles
    </FieldSet>
)

export const UsageExampleARadioButtonGroupWithErrorStatus = (args) => (
    <FieldSet {...args}>
        <Legend required>Choose an option</Legend>
        <Field>
            <Radio
                onChange={onChange}
                name="radio"
                value="first"
                label="First"
                error
            />
        </Field>
        <Field>
            <Radio
                onChange={onChange}
                name="radio"
                value="second"
                label="Second"
                error
            />
        </Field>
        <Field>
            <Radio
                onChange={onChange}
                name="radio"
                value="third"
                label="Third"
                error
            />
        </Field>
        <Help error>You really have to choose something!</Help>
    </FieldSet>
)
UsageExampleARadioButtonGroupWithErrorStatus.storyName =
    'Usage example - a radio button group with error status'
