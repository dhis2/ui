import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { InputField } from './index.js'

const subtitle = 'Allows a user to enter data, usually text'

const description = `
Inputs are used wherever a user needs to input standard text information. Inputs are often used as part of forms. An input can also be used to capture information outside of a form, perhaps as a 'Filter' or 'Search' field.

InputField wraps an Input component with a label, help text, validation text, and some other features.

Please see more about options and features of inputs at [Design System: Input Field](https://github.com/dhis2/design-system/blob/master/atoms/inputfield.md#input).

\`\`\`js
import { InputField } from '@dhis2/ui'
\`\`\`
`

const logger = ({ name, value }) =>
    console.log(`Name: ${name}, value: ${value}`)

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

export default {
    title: 'Forms/Input/Input Field',
    component: InputField,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    // Default args
    args: {
        label: 'Default label',
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

const Template = (args) => <InputField {...args} />

export const Default = Template.bind({})

export const NoPlaceholderNoValue = Template.bind({})
NoPlaceholderNoValue.storyName = 'No placeholder, no value'

export const PlaceholderNoValue = Template.bind({})
PlaceholderNoValue.args = { placeholder: 'Hold the place' }
PlaceholderNoValue.storyName = 'Placeholder, no value'

export const WithHelpText = Template.bind({})
WithHelpText.args = {
    ...PlaceholderNoValue.args,
    helpText: 'With some helping text to guide the user along',
}

export const WithValue = Template.bind({})
WithValue.args = {
    value: 'This is set through the value prop, which means the component is controlled.',
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
StatusError.args = {
    error: true,
    value: 'This value produces an error',
    helpText: 'This is some help text to advise what this input actually is.',
    validationText:
        'This validation text describes the error, if a message is supplied.',
}
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

export const InputWidth = (args) => (
    <>
        <InputField
            {...args}
            name="input1"
            label="My textarea has a width of 100px"
            inputWidth="100px"
        />
        <InputField
            {...args}
            name="input2"
            label="My textarea has a width of 220px"
            inputWidth="220px"
        />
    </>
)

export const LabelTextOverflow = Template.bind({})
LabelTextOverflow.args = {
    dense: true,
    warning: true,
    label: "This label is too long to show on a single line of the input field's label. We just let it flow to the next line so the user can still read it. However, we should always aim to keep it shorter than this!",
}

export const ValueTextOverflow = Template.bind({})
ValueTextOverflow.args = {
    value: "This value is too long in order to show on a single line of the input field. It should stay on one line, not in an extra line and which wouldn't look like a standard input",
    dense: true,
    warning: true,
}

export const Required = Template.bind({})
Required.args = { required: true }
