import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileInput } from '../index.js'

const onChange = (payload, event) => {
    console.log('onChange payload', payload)
    console.log('onChange event', event)

    // NOTE: if files is not transformed into an array,
    // cypress will get an empty file list!
    window.onChange &&
        window.onChange(
            {
                ...payload,
                files: [...payload.files],
            },
            event
        )
}

storiesOf('Component/Core/FileInput', module)
    .add('Default', () => (
        <FileInput
            onChange={onChange}
            buttonLabel="Upload file"
            name="upload"
        />
    ))
    .add('Multiple', () => (
        <FileInput
            name="upload"
            onChange={onChange}
            buttonLabel="Upload files"
            multiple
        />
    ))
    .add('Disabled', () => (
        <FileInput
            name="upload"
            onChange={onChange}
            buttonLabel="Upload file"
            disabled
        />
    ))
    .add('Sizes', () => (
        <>
            <FileInput
                onChange={onChange}
                buttonLabel="Default size"
                name="default"
            />
            <FileInput
                small
                onChange={onChange}
                buttonLabel="Small"
                name="small"
            />
            <FileInput
                large
                onChange={onChange}
                buttonLabel="Large"
                name="large"
            />
        </>
    ))
    .add('Statuses', () => (
        <>
            <FileInput
                onChange={onChange}
                buttonLabel="Default"
                name="default"
            />
            <FileInput
                onChange={onChange}
                buttonLabel="Valid"
                name="valid"
                valid
            />
            <FileInput
                onChange={onChange}
                buttonLabel="Warning"
                name="warning"
                warning
            />
            <FileInput
                onChange={onChange}
                buttonLabel="Error"
                name="error"
                error
            />
        </>
    ))
