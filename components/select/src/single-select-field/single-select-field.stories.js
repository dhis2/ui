import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { SingleSelectOption } from '../index.js'
import { SingleSelectField } from './index.js'

const description = `
\`SingleSelectField\` is a wrapper around a \`SingleSelect\` component that adds a label, help text, validation text, and other features.

See the SingleSelect for more information, and read more at [Design System: Select](https://github.com/dhis2/design-system/blob/master/molecules/select.md#multiple-selection).

\`\`\`js
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
\`\`\`

_**Note**: The dropdowns in some of the following stories won't appear correctly on this page. View these demos in the 'Canvas' tab._
`

const onChange = selected =>
    alert(`Selected changed to: ${JSON.stringify(selected, null, 2)}`)

const options = [
    <SingleSelectOption key="1" value="1" label="one" />,
    <SingleSelectOption key="2" value="2" label="two" />,
    <SingleSelectOption key="3" value="3" label="three" />,
    <SingleSelectOption key="4" value="4" label="four" />,
    <SingleSelectOption key="5" value="5" label="five" />,
    <SingleSelectOption key="6" value="6" label="six" />,
    <SingleSelectOption key="7" value="7" label="seven" />,
    <SingleSelectOption key="8" value="8" label="eight" />,
    <SingleSelectOption key="9" value="9" label="nine" />,
    <SingleSelectOption key="10" value="10" label="ten" />,
]

export default {
    title: 'Forms/Single Select/Single Select Field',
    component: SingleSelectField,
    subcomponents: { SingleSelectOption },
    parameters: { docs: { description: { component: description } } },
    // default args for stories
    args: {
        // Fix default prop issues - causes 'i18n is not defined' error
        ...SingleSelectField.defaultProps,
        label: 'Default label',
        children: options,
        onChange: onChange,
    },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

const Template = args => <SingleSelectField {...args} />

export const Default = Template.bind({})

export const WithHelpText = Template.bind({})
WithHelpText.args = { helpText: 'Helpful text.' }
WithHelpText.parameters = {
    docs: {
        description: {
            story: `_**Note**: The dropdowns in the following stories won't appear correctly on this page. View these demos in the 'Canvas' tab._`,
        },
    },
}

export const StatusValid = Template.bind({})
StatusValid.args = {
    valid: true,
    validationText: 'Totally valid!',
    ...WithHelpText.args,
}
StatusValid.storyName = 'Status: Valid'

export const StatusWarning = Template.bind({})
StatusWarning.args = {
    warning: true,
    validationText: 'Hm, not quite, I warn thee!',
    ...WithHelpText.args,
}
StatusWarning.storyName = 'Status: Warning'

export const StatusError = Template.bind({})
StatusError.args = {
    error: true,
    validationText: 'That value is wrong. Sorry!',
    ...WithHelpText.args,
}
StatusError.storyName = 'Status: Error'

export const Required = Template.bind({})
Required.args = { required: true }

export const InputWidth = Template.bind({})
InputWidth.args = {
    inputWidth: '200px',
    label:
        'A very long label indeed, well at least longer than the input field to show how it looks and works and stuff',
    required: true,
}

export const DefaultClearText = Template.bind({})
DefaultClearText.args = {
    selected: '1',
    clearable: true,
    label: null,
    children: (
        <SingleSelectOption
            key="1"
            value="1"
            label="Not translated, just for showing clear button"
        />
    ),
}
DefaultClearText.storyName = 'Default: clearText'

export const DefaultEmpty = Template.bind({})
DefaultEmpty.args = { children: null, label: null }
DefaultEmpty.storyName = 'Default: empty'

export const DefaultFilterPlaceholderAndNoMatchText = Template.bind({})
DefaultFilterPlaceholderAndNoMatchText.args = {
    filterable: true,
    ...DefaultEmpty.args,
}
DefaultFilterPlaceholderAndNoMatchText.storyName =
    'Default: filterPlaceholder and noMatchText'

export const DefaultLoadingText = Template.bind({})
DefaultLoadingText.args = { loading: true, ...DefaultEmpty.args }
DefaultLoadingText.storyName = 'Default: loadingText'
