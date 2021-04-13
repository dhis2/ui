import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { Input } from './Input.js'

const description = `
An input allows a user to enter data, usually text.

Inputs are used wherever a user needs to input standard text information. Inputs are often used as part of forms. An input can also be used to capture information outside of a form, perhaps as a 'Filter' or 'Search' field.

To use a label and validation text, consider the \`InputField\` component.

Read more about Inputs and InputFields at [Design System: Inputs](https://github.com/dhis2/design-system/blob/master/atoms/inputfield.md).

\`\`\`js
import { Input } from '@dhis/ui'
\`\`\`
`

const inputTypeArgType = {
    table: { type: { summary: 'string' } },
    control: {
        type: 'select',
        options: [
            'text',
            'number',
            'password',
            'email',
            'url',
            'tel',
            'date',
            'datetime',
            'datetime-local',
            'month',
            'week',
            'time',
            'search',
        ],
    },
}

const logger = ({ name, value }) =>
    console.log(`Name: ${name}, value: ${value}`)

export default {
    title: 'Forms/Input/Input',
    component: Input,
    parameters: {
        docs: { description: { component: description } },
    },
    args: {
        name: 'defaultName',
        onChange: logger,
    },
    argTypes: {
        type: { ...inputTypeArgType },
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})

export const NoPlaceholderNoValue = Template.bind({})
NoPlaceholderNoValue.storyName = 'No placeholder, no value'

export const PlaceholderNoValue = Template.bind({})
PlaceholderNoValue.args = { placeholder: 'Hold the place' }
PlaceholderNoValue.storyName = 'Placeholder, no value'

export const WithValue = Template.bind({})
WithValue.args = {
    value:
        'This is set through the value prop, which means the component is controlled.',
}

export const NumberMaxMinStep = Template.bind({})
NumberMaxMinStep.args = {
    type: 'number',
    max: '3',
    min: '0',
    step: '0.5',
}

export const Focus = Template.bind({})
Focus.args = { initialFocus: true }
// Disabled initial focus stories on docs page
Focus.parameters = { docs: { disable: true } }

export const StatusValid = Template.bind({})
StatusValid.args = { valid: true, value: 'This value is valid' }
StatusValid.storyName = 'Status: Valid'

export const StatusWarning = Template.bind({})
StatusWarning.args = { warning: true, value: 'This value produces a warning' }
StatusWarning.storyName = 'Status: Warning'

export const StatusError = Template.bind({})
StatusError.args = { error: true, value: 'This value produces an error' }
StatusError.storyName = 'Status: Error'

export const StatusLoading = Template.bind({})
StatusLoading.args = {
    loading: true,
    value: 'This value produces a loading state',
}
StatusLoading.storyName = 'Status: Loading'

export const Disabled = Template.bind({})
Disabled.args = { disabled: true, value: 'This field is disabled' }

export const ReadOnly = Template.bind({})
ReadOnly.args = { readOnly: true, value: 'This field is read-only' }

export const Dense = Template.bind({})
Dense.args = { dense: true, value: 'This field is dense' }

export const ValueTextOverflow = Template.bind({})
ValueTextOverflow.args = {
    value:
        "This value is too long in order to show on a single line of the input field. It should stay on one line, not in an extra line and which wouldn't look like a standard input",
    dense: true,
    warning: true,
}

export const WithDatalist = () => (
    <>
        <Input list="colorsList" />
        <datalist id="colorsList">
            <option value="red" />
            <option value="green" />
            <option value="blue" />
            <option value="yellow" />
            <option value="grey" />
        </datalist>
    </>
)
