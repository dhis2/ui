import React from 'react'
import { TextAreaField } from './TextAreaField.js'

export default {
    title: 'Forms/Text Area/Text Area Field',
    component: TextAreaField,
}

export const NoPlaceholderNoValue = () => (
    <TextAreaField onChange={() => {}} name="textarea" />
)

NoPlaceholderNoValue.story = {
    name: 'No placeholder, no value',
}

export const PlaceholderNoValue = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        placeholder="Hold the place"
    />
)

PlaceholderNoValue.story = {
    name: 'Placeholder, no value',
}

export const WithHelpText = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        placeholder="Hold the place"
        helpText="With some helping text to guide the user along"
    />
)

WithHelpText.story = {
    name: 'With Help text',
}

export const WithValue = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        value="This is set through the value prop, which means the component is controlled."
    />
)

WithValue.story = {
    name: 'With value',
}

export const Focus = () => (
    <TextAreaField onChange={() => {}} name="textarea" initialFocus />
)

export const StatusValid = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        value="This value is valid"
        valid
    />
)

StatusValid.story = {
    name: 'Status: Valid',
}

export const StatusWarning = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        value="This value produces a warning"
        warning
    />
)

StatusWarning.story = {
    name: 'Status: Warning',
}

export const StatusError = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        error
        value="This value produces an error"
        helpText="This is some help text to advice what this input actually is."
        validationText="This describes the error, if a message is supplied."
    />
)

StatusError.story = {
    name: 'Status: Error',
}

export const StatusLoading = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        value="This value produces a loading state"
        loading
    />
)

StatusLoading.story = {
    name: 'Status: Loading',
}

export const Disabled = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        value="This field is disabled"
        disabled
    />
)

export const ReadOnly = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        value="This field is readOnly"
        readOnly
    />
)

ReadOnly.story = {
    name: 'Read only',
}

export const Dense = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        value="This field is dense"
        dense
    />
)

export const LabelTextOverflow = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        label="This label is too long to show on a single line of the input field's label. We just let it flow to the next line so the user can still read it. However, we should always aim to keep it shorter than this!"
    />
)

LabelTextOverflow.story = {
    name: 'Label text overflow',
}

export const TextareaTextOverflow = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        label="I have a scrollbar"
        value={[
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
        ].join('\n')}
    />
)

TextareaTextOverflow.story = {
    name: 'Textarea text overflow',
}

export const Required = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        label="I am required and have an asterisk"
        required
    />
)

export const Rows = () => (
    <TextAreaField
        onChange={() => {}}
        name="textarea"
        label="You can set the height with the rows prop, I have 8"
        rows={8}
    />
)

export const InputWidth = () => (
    <>
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            label="My textarea has a width of 100px"
            inputWidth="100px"
        />
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            label="My textarea has a width of 220px"
            inputWidth="220px"
        />
    </>
)

InputWidth.story = {
    name: 'Input width',
}

export const Resize = () => (
    <>
        <TextAreaField
            onChange={() => {}}
            name="textarea1"
            label="Resize: vertical (default)"
        />
        <TextAreaField
            onChange={() => {}}
            name="textarea2"
            label="Resize: none"
            resize="none"
        />
        <TextAreaField
            onChange={() => {}}
            name="textarea3"
            label="Resize: both"
            resize="both"
        />
        <TextAreaField
            onChange={() => {}}
            name="textarea4"
            label="Resize: horizontal"
            resize="horizontal"
        />
    </>
)

export const Autogrow = () => (
    <>
        <TextAreaField
            onChange={() => {}}
            name="textarea1"
            label="Autogrow step 1"
            autoGrow
            rows={2}
            value="This TextAreaField has a height of 2 rows"
        />
        <TextAreaField
            onChange={() => {}}
            name="textarea2"
            label="Autogrow step 2"
            autoGrow
            rows={2}
            value={[
                'This TextAreaField has a height of two rows',
                'it also has autoGrow set to true so it will grow with the content',
            ].join('\n')}
        />
        <TextAreaField
            onChange={() => {}}
            name="textarea3"
            label="Autogrow step 3"
            autoGrow
            rows={2}
            value={[
                'This TextAreaField has a height of two rows',
                'it also has autoGrow set to true so it will grow with the content.',
                'See: rows is still 2, but I now have 3 lines.',
            ].join('\n')}
        />
        <TextAreaField
            onChange={() => {}}
            name="textarea4"
            label="Autogrow step 4"
            value={[
                'This TextAreaField has a height of two rows',
                'it also has autoGrow set to true so it will grow with the content.',
                'See: rows is still 2...',
                'And now I have 4 lines and still no scroll bar in sight.',
            ].join('\n')}
        />
    </>
)
