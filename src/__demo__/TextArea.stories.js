import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextArea } from '../index.js'

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

storiesOf('TextArea', module)
    .add('Default', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
        />
    ))

    .add('Placeholder, no value', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            placeholder="Hold the place"
        />
    ))

    .add('With value', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            value="This is set through the value prop, which means the component is controlled."
        />
    ))

    .add('Focus', () => (
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
    ))

    .add('Status: Valid', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            value="This value is valid"
            valid
        />
    ))

    .add('Status: Warning', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            value="This value produces a warning"
            warning
        />
    ))

    .add('Status: Error', () => (
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
    ))

    .add('Status: Loading', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            value="This value produces a loading state"
            loading
        />
    ))

    .add('Disabled', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            value="This field is disabled"
            disabled
        />
    ))

    .add('Read only', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            value="This field is readOnly"
            readOnly
        />
    ))

    .add('Dense', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            value="This field is dense"
            dense
        />
    ))

    .add('Textarea text overflow', () => (
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
    ))

    .add('Rows', () => (
        <TextArea
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="textarea"
            label="You can set the height with the rows prop, I have 8"
            rows={8}
        />
    ))

    .add('Resize', () => (
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
    ))

    .add('Autogrow', () => (
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
    ))
