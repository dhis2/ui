import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { SwitchField } from './switch-field.js'

const description = `
A \`SwitchField\` is a Switch component wrapped with extra form utilities, including the ability to add a label, help text, and validation text.  Validation styles like 'error' apply to all of these subcomponents.

See the basic Switch for usage and design system guidelines.

\`\`\`js
import { SwitchField } from '@dhis2/ui'
\`\`\`
`

const logger = ({ name, value, checked }) =>
    console.log(`name: ${name}, value: ${value}, checked: ${checked}`)

export default {
    title: 'Forms/Switch/Switch Field',
    component: SwitchField,
    parameters: { docs: { description: { component: description } } },
    // Default args for stories
    args: {
        name: 'switchName',
        label: 'Switch Field',
        value: 'defaultValue',
        onChange: logger,
    },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

const Template = args => <SwitchField {...args} />

const CheckedUncheckedTemplate = args => (
    <>
        <SwitchField {...args} />
        <SwitchField {...args} checked />
    </>
)

export const Default = Template.bind({})

export const FocusedUnchecked = Template.bind({})
FocusedUnchecked.args = { initialFocus: true }
// Disable stories on docs page that grab focus
FocusedUnchecked.parameters = { docs: { disable: true } }

export const FocusedChecked = Template.bind({})
FocusedChecked.args = { ...FocusedUnchecked.args, checked: true }
FocusedChecked.parameters = { docs: { disable: true } }

export const Checked = Template.bind({})
Checked.args = { checked: true, value: 'checkedValue' }

export const Required = Template.bind({})
Required.args = { required: true }

export const Disabled = CheckedUncheckedTemplate.bind({})
Disabled.args = { disabled: true }

export const HelpText = args => (
    <>
        <SwitchField {...args} />
        <SwitchField
            {...args}
            error
            validationText="Validation text (error state)"
        />
    </>
)
HelpText.args = { helpText: 'Help text' }

export const Valid = CheckedUncheckedTemplate.bind({})
Valid.args = {
    valid: true,
    validationText: 'I am validation text',
    value: 'validValue',
}

export const Warning = CheckedUncheckedTemplate.bind({})
Warning.args = {
    warning: true,
    value: 'warningValue',
    validationText: 'I am validation text',
}

export const Error = CheckedUncheckedTemplate.bind({})
Error.args = {
    error: true,
    value: 'errorValue',
    validationText: 'I am validation text',
}

export const ImageLabel = Template.bind({})
ImageLabel.args = { label: <img src="https://picsum.photos/id/82/200/100" /> }

export const DefaultDense = Template.bind({})
DefaultDense.storyName = 'Default - Dense'
DefaultDense.args = { dense: true }

export const FocusedUncheckedDense = Template.bind({})
FocusedUncheckedDense.args = { ...DefaultDense.args, ...FocusedUnchecked.args }
FocusedUncheckedDense.parameters = { docs: { disable: true } }
FocusedUncheckedDense.storyName = 'Focused unchecked - Dense'

export const FocusedCheckedDense = Template.bind({})
FocusedCheckedDense.args = { ...DefaultDense.args, ...FocusedChecked.args }
FocusedCheckedDense.parameters = { docs: { disable: true } }
FocusedCheckedDense.storyName = 'Focused checked - Dense'

export const CheckedDense = Template.bind({})
CheckedDense.args = { ...DefaultDense.args, ...Checked.args }
CheckedDense.storyName = 'Checked - Dense'

export const RequiredDense = Template.bind({})
RequiredDense.args = { ...DefaultDense.args, ...Required.args }
RequiredDense.storyName = 'Required - Dense'

export const DisabledDense = CheckedUncheckedTemplate.bind({})
DisabledDense.args = { ...DefaultDense.args, ...Disabled.args }
DisabledDense.storyName = 'Disabled - Dense'

export const ValidDense = CheckedUncheckedTemplate.bind({})
ValidDense.args = { ...DefaultDense.args, ...Valid.args }
ValidDense.storyName = 'Valid - Dense'

export const WarningDense = CheckedUncheckedTemplate.bind({})
WarningDense.args = { ...DefaultDense.args, ...Warning.args }
WarningDense.storyName = 'Warning - Dense'

export const ErrorDense = CheckedUncheckedTemplate.bind({})
ErrorDense.args = { ...DefaultDense.args, ...Error.args }
ErrorDense.storyName = 'Error - Dense'

export const ImageLabelDense = Template.bind({})
ImageLabelDense.args = { ...DefaultDense.args, ...ImageLabel.args }
ImageLabelDense.storyName = 'Image label - Dense'
