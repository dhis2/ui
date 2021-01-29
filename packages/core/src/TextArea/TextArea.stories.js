import React from 'react'
import { TextArea } from './TextArea.js'

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
}

export const Default = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
    />
)

export const PlaceholderNoValue = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        placeholder="Hold the place"
    />
)

PlaceholderNoValue.story = {
    name: 'Placeholder, no value',
}

export const WithValue = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        value="This is set through the value prop, which means the component is controlled."
    />
)

WithValue.story = {
    name: 'With value',
}

export const Focus = () => (
    <>
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            initialFocus
            className="initially-focused"
        />
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            className="initially-unfocused"
        />
    </>
)

export const StatusValid = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        value="This value is valid"
        valid
    />
)

StatusValid.story = {
    name: 'Status: Valid',
}

export const StatusWarning = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        value="This value produces a warning"
        warning
    />
)

StatusWarning.story = {
    name: 'Status: Warning',
}

export const StatusError = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
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
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        value="This value produces a loading state"
        loading
    />
)

StatusLoading.story = {
    name: 'Status: Loading',
}

export const Disabled = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        value="This field is disabled"
        disabled
    />
)

export const ReadOnly = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        value="This field is readOnly"
        readOnly
    />
)

ReadOnly.story = {
    name: 'Read only',
}

export const Dense = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        value="This field is dense"
        dense
    />
)

export const TextareaTextOverflow = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
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

export const Rows = () => (
    <TextArea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name="textarea"
        label="You can set the height with the rows prop, I have 8"
        rows={8}
    />
)

export const Resize = () => (
    <>
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea1"
            label="Resize: vertical (default)"
        />
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea2"
            label="Resize: none"
            resize="none"
        />
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea3"
            label="Resize: both"
            resize="both"
        />
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea4"
            label="Resize: horizontal"
            resize="horizontal"
        />
    </>
)

export const Autogrow = () => (
    <>
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea1"
            label="Autogrow step 1"
            autoGrow
            rows={2}
            value="This TextArea has a height of 2 rows"
        />
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
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
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
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
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
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
