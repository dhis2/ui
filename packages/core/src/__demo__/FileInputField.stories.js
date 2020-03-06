import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileInputField, FileListItem } from '../index.js'

const onChange = obj => {
    console.log('onChange', obj)
}
const onRemove = () => {
    console.log('onRemove')
}
const onCancel = () => {
    console.log('onCancel')
}

storiesOf('Component/Widget/FileInputField', module)
    .add('Default', () => (
        <FileInputField
            onChange={onChange}
            buttonLabel="Upload file"
            name="upload"
        />
    ))
    .add('With label', () => (
        <FileInputField
            name="upload"
            onChange={onChange}
            label="Upload something"
            buttonLabel="Upload file"
        />
    ))
    .add('Required', () => (
        <FileInputField
            name="upload"
            onChange={onChange}
            label="upload something"
            buttonLabel="Upload file"
            required
        />
    ))
    .add('Multiple', () => (
        <FileInputField
            name="upload"
            onChange={onChange}
            label="upload multiple things"
            buttonLabel="Upload files"
            multiple
        />
    ))
    .add('Disabled', () => (
        <FileInputField
            name="upload"
            onChange={onChange}
            label="upload something"
            buttonLabel="Upload file"
            disabled
        />
    ))
    .add('Sizes', () => (
        <>
            <FileInputField
                onChange={onChange}
                label="upload something"
                buttonLabel="Default size"
                name="default"
            />
            <FileInputField
                onChange={onChange}
                label="upload something"
                buttonLabel="Small"
                small
                name="small"
            />
            <FileInputField
                onChange={onChange}
                label="upload something"
                buttonLabel="Large"
                large
                name="large"
            />
        </>
    ))
    .add('Statuses', () => (
        <>
            <FileInputField
                onChange={onChange}
                label="upload something"
                buttonLabel="Default"
                name="default"
            />
            <FileInputField
                onChange={onChange}
                label="upload something"
                buttonLabel="Valid"
                name="valid"
                valid
            />
            <FileInputField
                onChange={onChange}
                label="upload something"
                buttonLabel="Warning"
                name="warning"
                warning
            />
            <FileInputField
                onChange={onChange}
                label="upload something"
                buttonLabel="Error"
                name="error"
                error
                validationText="Something went wrong"
            />
        </>
    ))
    .add('File list', () => (
        <div style={{ width: 250 }}>
            <FileInputField
                onChange={onChange}
                label="Upload something"
                buttonLabel="Upload file"
                name="upload"
            >
                <FileListItem
                    label="picture1.jpg"
                    onRemove={onRemove}
                    onCancel={onCancel}
                    cancelText="Cancel"
                    removeText="Remove"
                />
                <FileListItem
                    label="image_that_is_uploading.jpg"
                    onRemove={onRemove}
                    onCancel={onCancel}
                    cancelText="Cancel"
                    removeText="Remove"
                    loading
                />
                <FileListItem
                    label="image_file_name_is_to_long_to_display_on_one_line.jpg"
                    onRemove={onRemove}
                    onCancel={onCancel}
                    cancelText="Cancel"
                    removeText="Remove"
                />
            </FileInputField>
            <br />
            <p style={{ color: 'grey' }}>
                <em>Bounding box is 250px wide</em>
            </p>
        </div>
    ))
    .add('Placeholder text', () => (
        <FileInputField
            onChange={onChange}
            label="Upload something"
            buttonLabel="Upload file"
            name="upload"
            placeholder="No file(s) selected yet"
        />
    ))
    .add('Help text', () => (
        <FileInputField
            onChange={onChange}
            label="Upload something"
            buttonLabel="Upload file"
            name="upload"
            helpText="Please select any file type"
        />
    ))
    .add('Design system stacking order', () => (
        <FileInputField
            onChange={onChange}
            label="upload something"
            buttonLabel="Upload file"
            error
            validationText="Oops"
            placeholder="Select a file"
            helpText="Please upload something"
            name="upload"
        >
            <FileListItem
                label="TestFile.txt"
                onRemove={onRemove}
                removeText="remove"
            />
            <FileListItem
                label="BusyFile.txt"
                onRemove={onRemove}
                onCancel={onCancel}
                cancelText="cancel"
                removeText="remove"
                loading
            />
        </FileInputField>
    ))
    .add('Design system stacking order - empty file list', () => (
        <FileInputField
            onChange={onChange}
            label="upload something"
            buttonLabel="Upload file"
            error
            validationText="Oops"
            placeholder="Select a file"
            helpText="Please upload something"
            name="upload"
        />
    ))
