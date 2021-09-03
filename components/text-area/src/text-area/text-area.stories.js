import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { TextArea } from './index.js'

const description = `
A textarea allows multiple lines of text input. Use a textarea wherever a user needs to input a lot of information. Do not use a textarea if a short, single line of content is expected.

Options for textarea inputs are:

- Rows: the height of the input, defined by the number of rows of text
- Resizable: whether the textarea can be resized by the user or not. Can be set for both width and height.
- Autoheight: if enabled, the texarea will grow in height to adapt to the content.

\`\`\`js
import { TextArea } from '@dhis2/ui'
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
    title: 'Forms/Text Area/Text Area',
    component: TextArea,
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
    },
    args: {
        name: 'textAreaName',
        onChange,
        onFocus,
        onBlur,
    },
}

const Template = args => <TextArea {...args} />

export const Default = Template.bind({})

export const PlaceholderNoValue = Template.bind({})
PlaceholderNoValue.args = { placeholder: 'Hold the place' }
PlaceholderNoValue.storyName = 'Placeholder, no value'

export const WithValue = Template.bind({})
WithValue.args = {
    value:
        'This is set through the value prop, which means the component is controlled.',
}
WithValue.storyName = 'With value'

export const Focus = args => (
    <>
        <TextArea {...args} initialFocus className="initially-focused" />
        <TextArea {...args} className="initially-unfocused" />
    </>
)
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
    validationText: 'This describes the error, if a message is supplied.',
}
StatusError.storyName = 'Status: Error'

export const StatusLoading = Template.bind({})
StatusLoading.args = {
    loading: true,
    value: 'This value produces a loadingn state',
}
StatusLoading.storyName = 'Status: Loading'

export const Disabled = Template.bind({})
Disabled.args = { disabled: true, value: 'This field is disabled' }

export const ReadOnly = Template.bind({})
ReadOnly.args = { readOnly: true, value: 'This field is readOnly' }

export const Dense = Template.bind({})
Dense.args = { dense: true, value: 'This field is dense' }

export const TextareaTextOverflow = Template.bind({})
TextareaTextOverflow.args = {
    label: 'I have a scrollbar',
    value: [
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
        'A line of text',
    ].join('\n'),
}

export const Rows = Template.bind({})
Rows.args = {
    rows: 8,
    label: 'You can set the height with the rows prop. I have 8',
}

export const Resize = args => (
    <>
        <TextArea
            {...args}
            name="textarea1"
            label="Resize: vertical (default)"
        />
        <TextArea
            {...args}
            name="textarea2"
            label="Resize: none"
            resize="none"
        />
        <TextArea
            {...args}
            name="textarea3"
            label="Resize: both"
            resize="both"
        />
        <TextArea
            {...args}
            name="textarea4"
            label="Resize: horizontal"
            resize="horizontal"
        />
    </>
)

export const Autogrow = args => (
    <>
        <TextArea
            {...args}
            name="textarea1"
            label="Autogrow step 1"
            autoGrow
            rows={2}
            value="This TextArea has a height of 2 rows"
        />
        <TextArea
            {...args}
            name="textarea2"
            label="Autogrow step 2"
            autoGrow
            rows={2}
            value={[
                'This TextArea has a height of two rows',
                'it also has autoGrow set to true so it will grow with the content',
            ].join('\n')}
        />
        <TextArea
            {...args}
            name="textarea3"
            label="Autogrow step 3"
            autoGrow
            rows={2}
            value={[
                'This TextArea has a height of two rows',
                'it also has autoGrow set to true so it will grow with the content.',
                'See: rows is still 2, but I now have 3 lines.',
            ].join('\n')}
        />
        <TextArea
            {...args}
            name="textarea4"
            label="Autogrow step 4"
            value={[
                'This TextArea has a height of two rows',
                'it also has autoGrow set to true so it will grow with the content.',
                'See: rows is still 2...',
                'And now I have 4 lines and still no scroll bar in sight.',
            ].join('\n')}
        />
    </>
)
