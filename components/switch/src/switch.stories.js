import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { Switch } from './switch.js'

const subtitle = 'An input control that allows an on and an off state'

const description = `
**Switches are used sparingly in DHIS2, as they are not yet an accepted input control on the web. Users are not always used to the concept of a switch, but understanding is growing with wide adoption on mobile platforms.**

Use switches only when the user can toggle between on/off. Never use a switch for yes/no or any other states, use a checkbox instead. It is often safer to use a checkbox for things like turning options on/off, as users understand this pattern. Switches can be useful for ongoing or active processes, where turning them on/off makes more sense conceptually. An example of this may be toggling on/off 'Logging' or 'Update automatically', both processes that are ongoing.

\`\`\`js
import { Switch } from '@dhis2/ui'
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

export default {
    title: 'Forms/Switch/Switch',
    component: Switch,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    // Default args for all stories
    args: {
        name: 'exampleName',
        label: 'Switch',
        value: 'defaultValue',
        onChange,
        onFocus,
        onBlur,
    },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
    },
}

const Template = args => <Switch {...args} />

const CheckedUncheckedTemplate = args => (
    <>
        <Switch {...args} />
        <Switch {...args} checked />
    </>
)

export const Default = Template.bind({})

export const FocusedUnchecked = args => (
    <>
        <Switch {...args} initialFocus className="initially-focused" />
        <Switch {...args} className="initially-unfocused" />
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
