import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { MultiSelectOption } from '../index.js'
import { MultiSelectField } from './index.js'

const description = `
\`MultiSelectField\` is a wrapper around a \`MultiSelect\` component that adds a label, help text, validation text, and other features.

See the MultiSelect for more information, and read more at [Design System: Select](https://github.com/dhis2/design-system/blob/master/molecules/select.md#multiple-selection).

\`\`\`js
import { MultiSelectField, MultiSelectOption } from '@dhis2/ui'
\`\`\`

_**Note**: The dropdowns in some of the following stories won't appear correctly on this page. View these demos in the 'Canvas' tab._
`

const onChange = selected =>
    alert(`Selected changed to: ${JSON.stringify(selected, null, 2)}`)

const options = [
    <MultiSelectOption key="1" value="1" label="one" />,
    <MultiSelectOption key="2" value="2" label="two" />,
    <MultiSelectOption key="3" value="3" label="three" />,
    <MultiSelectOption key="4" value="4" label="four" />,
    <MultiSelectOption key="5" value="5" label="five" />,
    <MultiSelectOption key="6" value="6" label="six" />,
    <MultiSelectOption key="7" value="7" label="seven" />,
    <MultiSelectOption key="8" value="8" label="eight" />,
    <MultiSelectOption key="9" value="9" label="nine" />,
    <MultiSelectOption key="10" value="10" label="ten" />,
]

export default {
    title: 'Forms/Multi Select/Multi Select Field',
    component: MultiSelectField,
    subcomponents: { MultiSelectOption },
    parameters: { docs: { description: { component: description } } },
    // default args for stories
    args: {
        // Fix default prop issues - causes 'i18n is not defined' error
        ...MultiSelectField.defaultProps,
        label: 'Default label',
        selected: ['1'],
        children: options,
        onChange: onChange,
    },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

const Template = args => <MultiSelectField {...args} />

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
    label: 'A very long label indeed, well at least longer than the input field to show how it looks and works and stuff',
    required: true,
}

export const DefaultClearText = Template.bind({})
DefaultClearText.args = {
    clearable: true,
    children: (
        <MultiSelectOption
            key="1"
            value="1"
            label="Not translated, just for showing clear button"
        />
    ),
    label: null,
}
DefaultClearText.storyName = 'Default: clearText'

export const DefaultEmpty = Template.bind({})
DefaultEmpty.args = { children: null, selected: [], label: null }
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
