import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { Radio } from './radio.js'

const subtitle = `A control that allows a user to select a single option from a choice of several`

const description = `
Radio buttons are used where a user has the choice of several options but must select only one. Radio buttons should be used where the user has to make a choice, there is no 'off' or 'none' state unless explicitly defined. Radio buttons should be used when there are 5 or less options available. With more than five, a dropdown/Select menu should be used instead.

Do not use a radio button if only a single option is available; use a Checkbox here instead.

If there are many options that need to select from, consider using a Select instead.

#### Size

Radio buttons are available in Regular and Dense sizes. Regular size is usually used in forms and whenever radio buttons are used standalone. Dense size radio buttons are used inside other complex components, not as main elements of a UI.

#### See more

Learn more about Radio buttons at [Design System: Radio](https://github.com/dhis2/design-system/blob/master/atoms/radio.md).

\`\`\`js
import { Radio } from '@dhis2/ui'
\`\`\`
`

window.onChange = (payload, event) => {
    console.log('onChange payload', payload)
    console.log('onChange event', event)
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

export default {
    title: 'Forms/Radio/Radio',
    component: Radio,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    // Default args for all stories
    args: {
        name: 'Ex',
        label: 'Radio',
        value: 'default',
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
    },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
    },
}

const Template = (args) => <Radio {...args} />

const CheckedUncheckedTemplate = (args) => (
    <>
        <Radio {...args} />
        <Radio {...args} checked />
    </>
)

export const Default = Template.bind({})

export const FocusedUnchecked = (args) => (
    <>
        <Radio {...args} initialFocus className="initially-focused" />
        <Radio {...args} className="initially-unfocused" />
    </>
)
// Stories with initial focus are distracting on docs page
FocusedUnchecked.parameters = { docs: { disable: true } }

export const FocusedChecked = FocusedUnchecked.bind({})
FocusedChecked.args = { checked: true }
FocusedChecked.parameters = { docs: { disable: true } }

export const Checked = Template.bind({})
Checked.args = { checked: true, value: 'checked' }

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
DefaultDense.args = { dense: true }
DefaultDense.storyName = 'Default - Dense'

export const FocusedUncheckedDense = FocusedUnchecked.bind({})
FocusedUncheckedDense.args = { ...DefaultDense.args }
FocusedUncheckedDense.storyName = 'Focused unchecked - Dense'
FocusedUncheckedDense.parameters = { docs: { disable: true } }

export const FocusedCheckedDense = FocusedUnchecked.bind({})
FocusedCheckedDense.args = { ...DefaultDense.args, checked: true }
FocusedCheckedDense.storyName = 'Focused checked - Dense'
FocusedCheckedDense.parameters = { docs: { disable: true } }

export const CheckedDense = Template.bind({})
CheckedDense.args = { ...Checked.args, ...DefaultDense.args }
CheckedDense.storyName = 'Checked - Dense'

export const DisabledDense = CheckedUncheckedTemplate.bind({})
DisabledDense.args = { ...Disabled.args, ...DefaultDense.args }
DisabledDense.storyName = 'Disabled - Dense'

export const ValidDense = CheckedUncheckedTemplate.bind({})
ValidDense.args = { ...Valid.args, ...DefaultDense.args }
ValidDense.storyName = 'Valid - Dense'

export const WarningDense = CheckedUncheckedTemplate.bind({})
WarningDense.args = { ...Warning.args, ...DefaultDense.args }
WarningDense.storyName = 'Warning - Dense'

export const ErrorDense = CheckedUncheckedTemplate.bind({})
ErrorDense.args = { ...Error.args, ...DefaultDense.args }
ErrorDense.storyName = 'Error - Dense'

export const ImageLabelDense = Template.bind({})
ImageLabelDense.args = { ...ImageLabel.args, ...DefaultDense.args }
ImageLabelDense.storyName = 'Image label - Dense'

export const NoLabel = Template.bind({})
NoLabel.args = { label: null, className: 'some-name' }
