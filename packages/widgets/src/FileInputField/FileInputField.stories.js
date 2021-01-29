import { FileListItem } from '@dhis2/ui-core'
import React from 'react'
import { FileInputField } from './FileInputField.js'

const onChange = obj => {
    console.log('onChange', obj)
}
const onRemove = () => {
    console.log('onRemove')
}
const onCancel = () => {
    console.log('onCancel')
}

export default {
    title: 'Forms/File Input/File Input Field',
    component: FileInputField,
}

export const Default = () => (
    <FileInputField
        onChange={onChange}
        buttonLabel="Upload file"
        name="upload"
    />
)

export const WithLabel = () => (
    <FileInputField
        name="upload"
        onChange={onChange}
        label="Upload something"
        buttonLabel="Upload file"
    />
)
WithLabel.storyName = 'With label'

export const Required = () => (
    <FileInputField
        name="upload"
        onChange={onChange}
        label="upload something"
        buttonLabel="Upload file"
        required
    />
)

export const Multiple = () => (
    <FileInputField
        name="upload"
        onChange={onChange}
        label="upload multiple things"
        buttonLabel="Upload files"
        multiple
    />
)

export const Disabled = () => (
    <FileInputField
        name="upload"
        onChange={onChange}
        label="upload something"
        buttonLabel="Upload file"
        disabled
    />
)

export const Sizes = () => (
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
)

export const Statuses = () => (
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
)

export const FileList = () => (
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
)
FileList.storyName = 'File list'

export const PlaceholderText = () => (
    <FileInputField
        onChange={onChange}
        label="Upload something"
        buttonLabel="Upload file"
        name="upload"
        placeholder="No file(s) selected yet"
    />
)
PlaceholderText.storyName = 'Placeholder text'

export const HelpText = () => (
    <FileInputField
        onChange={onChange}
        label="Upload something"
        buttonLabel="Upload file"
        name="upload"
        helpText="Please select any file type"
    />
)
HelpText.storyName = 'Help text'

export const DesignSystemStackingOrder = () => (
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
)
DesignSystemStackingOrder.storyName = 'Design system stacking order'

export const DesignSystemStackingOrderEmptyFileList = () => (
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
)
DesignSystemStackingOrderEmptyFileList.storyName =
    'Design system stacking order - empty file list'

export const DefaultButtonLabelAndPlaceholder = () => (
    <FileInputField onChange={onChange} name="upload" />
)
DefaultButtonLabelAndPlaceholder.storyName =
    'Default: buttonLabel and placeholder'
