import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { Checkbox } from './Checkbox.js'

const subtitle =
    'A checkbox is a control that allows a user to toggle an option.'

const description = `
Checkboxes are used when an option can be toggled on or off. Toggling a checkbox on (true) is always considered a positive action and should reflect a positive/true/on state. Multiple checkboxes can be used in a list where a user can toggle multiple elements.

Do not use checkboxes in a list of several options where only a single option can be toggled, use [radio buttons](../?path=/docs/forms-radio-radio--default) here instead.

If there are many options that need to select from, consider using a [select](../?path=/docs/forms-single-select-single-select--with-options) instead.

\`\`\`js
import { Checkbox } from '@dhis2/ui'
\`\`\`
`

window.onChange = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

window.onFocus = (payload, event) => {
    console.log('onFocus payload', payload)
    console.log('onFocus event', event)
}

window.onBlur = (payload, event) => {
    console.log('onBlur payload', payload)
    console.log('onBlur event', event)
}

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

const defaultArgs = { name: 'Ex', label: 'Checkbox', onChange, onFocus, onBlur }

const uniqueOnStateArgType = {
    table: {
        type: {
            summary: 'bool',
            detail:
                "'checked' and 'indeterminate' are mutually exclusive props",
        },
    },
    control: { type: 'boolean' },
}

export default {
    title: 'Forms/Checkbox/Checkbox',
    component: Checkbox,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    // Sets default args on all stories unless overridden
    args: { ...defaultArgs },
    argTypes: {
        checked: { ...uniqueOnStateArgType },
        indeterminate: { ...uniqueOnStateArgType },
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

const Template = args => <Checkbox {...args} />

const CheckedUncheckedTemplate = args => (
    <>
        <Checkbox {...args} />
        <Checkbox checked {...args} />
    </>
)

export const Default = Template.bind({})
Default.args = { value: 'default' }

export const FocusedUnchecked = args => (
    <>
        <Checkbox
            initialFocus
            value="default"
            className="initially-focused"
            {...args}
        />
        <Checkbox value="default2" className="initially-unfocused" {...args} />
    </>
)
FocusedUnchecked.storyName = 'Focused unchecked'
/**
 * 'initialFocus' causes docs page to scroll away every time a control is
 * changed, so it's disabled
 */
FocusedUnchecked.parameters = { docs: { disable: true } }

export const FocusedChecked = args => (
    <>
        <Checkbox initialFocus checked value="default" {...args} />
        <Checkbox checked value="default2" {...args} />
    </>
)
FocusedChecked.storyName = 'Focused checked'
FocusedChecked.parameters = { docs: { disable: true } }

export const Checked = Template.bind({})
Checked.args = { checked: true, value: 'checked' }

export const Indeterminate = Template.bind({})
Indeterminate.args = { indeterminate: true, value: 'checked' }

export const Disabled = CheckedUncheckedTemplate.bind({})
Disabled.args = { disabled: true, value: 'disabled' }

export const Valid = CheckedUncheckedTemplate.bind({})
Valid.args = { valid: true, value: 'valid' }

export const Warning = CheckedUncheckedTemplate.bind({})
Warning.args = { warning: true, value: 'warning' }

export const Error = CheckedUncheckedTemplate.bind({})
Error.args = { error: true, value: 'error' }

export const ImageLabel = Template.bind({})
ImageLabel.args = {
    label: <img src="https://picsum.photos/id/82/200/100" />,
    value: 'with-help',
}

export const DefaultDense = Template.bind({})
DefaultDense.args = { dense: true, value: 'default' }
DefaultDense.storyName = 'Default - Dense'

export const FocusedUncheckedDense = Template.bind({})
FocusedUncheckedDense.args = {
    dense: true,
    initialFocus: true,
    value: 'default',
}
FocusedUncheckedDense.storyName = 'Focused unchecked - Dense'
FocusedUncheckedDense.parameters = { docs: { disable: true } }

export const FocusedCheckedDense = Template.bind({})
FocusedCheckedDense.args = { ...FocusedUncheckedDense.args, checked: true }
FocusedCheckedDense.storyName = 'Focused checked - Dense'
FocusedCheckedDense.parameters = { docs: { disable: true } }

export const CheckedDense = Template.bind({})
CheckedDense.args = { dense: true, checked: true, value: 'checked' }
CheckedDense.storyName = 'Checked - Dense'

export const IndeterminateDense = Template.bind({})
IndeterminateDense.args = { dense: true, indeterminate: true, value: 'checked' }
IndeterminateDense.storyName = 'Indeterminate - Dense'

export const DisabledDense = CheckedUncheckedTemplate.bind({})
DisabledDense.args = { ...Disabled.args, dense: true }
DisabledDense.storyName = 'Disabled - Dense'

export const ValidDense = CheckedUncheckedTemplate.bind({})
ValidDense.args = { ...Valid.args, dense: true }
ValidDense.storyName = 'Valid - Dense'

export const WarningDense = CheckedUncheckedTemplate.bind({})
WarningDense.args = { ...Warning.args, dense: true }
WarningDense.storyName = 'Warning - Dense'

export const ErrorDense = CheckedUncheckedTemplate.bind({})
ErrorDense.args = { ...Error.args, dense: true }
ErrorDense.storyName = 'Error - Dense'

export const ImageLabelDense = Template.bind({})
ImageLabelDense.args = { ...ImageLabel.args, dense: true }
ImageLabelDense.storyName = 'Image label - Dense'
