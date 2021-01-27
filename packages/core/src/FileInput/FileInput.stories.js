import React from 'react'
import { FileInput } from './FileInput.js'

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

export default {
    title: 'FileInput',
    component: FileInput,
}

export const Default = () => (
    <FileInput onChange={onChange} buttonLabel="Upload file" name="upload" />
)

export const Multiple = () => (
    <FileInput
        name="upload"
        onChange={onChange}
        buttonLabel="Upload files"
        multiple
    />
)

export const Disabled = () => (
    <FileInput
        name="upload"
        onChange={onChange}
        buttonLabel="Upload file"
        disabled
    />
)

export const Sizes = () => (
    <>
        <FileInput
            onChange={onChange}
            buttonLabel="Default size"
            name="default"
        />
        <FileInput small onChange={onChange} buttonLabel="Small" name="small" />
        <FileInput large onChange={onChange} buttonLabel="Large" name="large" />
    </>
)

export const Statuses = () => (
    <>
        <FileInput onChange={onChange} buttonLabel="Default" name="default" />
        <FileInput onChange={onChange} buttonLabel="Valid" name="valid" valid />
        <FileInput
            onChange={onChange}
            buttonLabel="Warning"
            name="warning"
            warning
        />
        <FileInput onChange={onChange} buttonLabel="Error" name="error" error />
    </>
)
