import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { TextAreaField } from './index.js'

const description = `
\`TextAreaField\` wraps a \`TextArea\` component with a label, help text, validation text, and other functions.

See the regular TextArea for usage information and options.

\`\`\`js
import { TextAreaField } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Text Area Field',
    component: TextAreaField,
    parameters: { docs: { description: { component: description } } },
    // Default args:
    args: {
        onChange: console.log,
        name: 'textareaName',
    },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

const Template = (args) => <TextAreaField {...args} />

export const NoPlaceholderNoValue = Template.bind({})
NoPlaceholderNoValue.storyName = 'No placeholder, no value'

export const PlaceholderNoValue = Template.bind({})
PlaceholderNoValue.args = { placeholder: 'Hold the place' }
PlaceholderNoValue.storyName = 'Placeholder, no value'

export const WithHelpText = Template.bind({})
WithHelpText.args = {
    helpText: 'With some helping text to guide the user along',
    ...PlaceholderNoValue.args,
}

export const WithValue = Template.bind({})
WithValue.args = {
    value: 'This is set through the value prop, which means the component is controlled.',
}

export const Focus = Template.bind({})
Focus.args = { initialFocus: true }
// Disable stories that manipulate focus on docs page
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

export const LabelTextOverflow = Template.bind({})
LabelTextOverflow.args = {
    label: "This label is too long to show on a single line of the input field's label. We just let it flow to the next line so the user can still read it. However, we should always aim to keep it shorter than this!",
}
LabelTextOverflow.storyName = 'Label text overflow'

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

export const Required = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        label="I am required and have an asterisk"
        required
    />
)
Required.args = { required: true, label: 'I am required and have an asterisk' }

export const Rows = Template.bind({})
Rows.args = {
    rows: 8,
    label: 'You can set the height with the rows prop. I have 8',
}

export const InputWidth = (args) => (
    <>
        <TextAreaField
            {...args}
            label="My textarea has a width of 220px (the minimum)"
            inputWidth="220px"
        />
        <TextAreaField
            {...args}
            label="My textarea has a width of 400px"
            inputWidth="400px"
        />
    </>
)

export const Resize = (args) => (
    <>
        <TextAreaField
            {...args}
            name="textarea1"
            label="Resize: vertical (default)"
        />
        <TextAreaField
            {...args}
            name="textarea2"
            label="Resize: none"
            resize="none"
        />
        <TextAreaField
            {...args}
            name="textarea3"
            label="Resize: both"
            resize="both"
        />
        <TextAreaField
            {...args}
            name="textarea4"
            label="Resize: horizontal"
            resize="horizontal"
        />
    </>
)

export const Autogrow = (args) => (
    <>
        <TextAreaField
            {...args}
            name="textarea1"
            label="Autogrow step 1"
            autoGrow
            rows={2}
            value="This TextArea has a height of 2 rows"
        />
        <TextAreaField
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
        <TextAreaField
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
        <TextAreaField
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
