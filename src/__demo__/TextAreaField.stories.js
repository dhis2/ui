import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextAreaField } from '../index.js'

storiesOf('TextAreaField', module)
    .add('No placeholder, no value', () => (
        <TextAreaField onChange={() => {}} name="textarea" />
    ))

    .add('Placeholder, no value', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            placeholder="Hold the place"
        />
    ))

    .add('With Help text', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            placeholder="Hold the place"
            helpText="With some helping text to guide the user along"
        />
    ))

    .add('With value', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            value="This is set through the value prop, which means the component is controlled."
        />
    ))

    .add('Focus', () => (
        <TextAreaField onChange={() => {}} name="textarea" initialFocus />
    ))

    .add('Status: Valid', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            value="This value is valid"
            valid
        />
    ))

    .add('Status: Warning', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            value="This value produces a warning"
            warning
        />
    ))

    .add('Status: Error', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            error
            value="This value produces an error"
            helpText="This is some help text to advice what this input actually is."
            validationText="This describes the error, if a message is supplied."
        />
    ))

    .add('Status: Loading', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            value="This value produces a loading state"
            loading
        />
    ))

    .add('Disabled', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            value="This field is disabled"
            disabled
        />
    ))

    .add('Read only', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            value="This field is readOnly"
            readOnly
        />
    ))

    .add('Dense', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            value="This field is dense"
            dense
        />
    ))

    .add('Label text overflow', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            label="This label is too long to show on a single line of the input field's label. We just let it flow to the next line so the user can still read it. However, we should always aim to keep it shorter than this!"
        />
    ))

    .add('Textarea text overflow', () => (
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
    ))

    .add('Required', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            label="I am required and have an asterisk"
            required
        />
    ))

    .add('Rows', () => (
        <TextAreaField
            onChange={() => {}}
            name="textarea"
            label="You can set the height with the rows prop, I have 8"
            rows={8}
        />
    ))

    .add('Input width', () => (
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
    ))

    .add('Resize', () => (
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
    ))

    .add('Autogrow', () => (
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
    ))
