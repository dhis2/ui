import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { FileListItem } from '../index.js'
import { FileInputField } from './file-input-field.js'

const description = `
The \`FileInputField\` component wraps the \`FileInput\` component in a \`Field\` wrapper to add labels, help text, and validation text.

\`\`\`js
import { FileInputField, FileListItem } from '@dhis2/ui'
\`\`\`
`

const onChange = (obj) => console.log('onChange', obj)
const onRemove = () => console.log('onRemove')
const onCancel = () => console.log('onCancel')

export default {
    title: 'File Input Field',
    component: FileInputField,
    parameters: { docs: { description: { component: description } } },
    // Default args:
    args: {
        // Handle default values (see comment in Transfer.js)
        ...FileInputField.defaultProps,
        onChange: onChange,
        name: 'uploadName',
        label: 'Upload something',
    },
    argTypes: {
        small: { ...sharedPropTypes.sizeArgType },
        large: { ...sharedPropTypes.sizeArgType },
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

const Template = (args) => <FileInputField {...args} />

export const Default = Template.bind({})
Default.args = { label: null }

export const WithLabel = Template.bind({})

export const Required = Template.bind({})
Required.args = { required: true }

export const Multiple = Template.bind({})
Multiple.args = {
    multiple: true,
    label: 'Upload multiple things',
    buttonLabel: 'Upload files',
}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Sizes = (args) => (
    <>
        <FileInputField
            {...args}
            buttonLabel="Default size"
            name="defaultName"
        />
        <FileInputField {...args} buttonLabel="Small" small name="smallName" />
        <FileInputField {...args} buttonLabel="Large" large name="largeName" />
    </>
)

export const Statuses = (args) => (
    <>
        <FileInputField {...args} buttonLabel="Default" name="defaultName" />
        <FileInputField {...args} buttonLabel="Valid" name="validName" valid />
        <FileInputField
            {...args}
            buttonLabel="Warning"
            name="warningName"
            warning
        />
        <FileInputField
            {...args}
            buttonLabel="Error"
            name="errorName"
            error
            validationText="Something went wrong"
        />
    </>
)

export const FileList = (args) => (
    <div style={{ width: 250 }}>
        <FileInputField {...args}>
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

export const PlaceholderText = Template.bind({})
PlaceholderText.args = { placeholder: 'No file(s) selected yet' }

export const HelpText = Template.bind({})
HelpText.args = { helpText: 'Please select any file type' }

export const DesignSystemStackingOrder = (args) => (
    <FileInputField {...args}>
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
DesignSystemStackingOrder.args = {
    error: true,
    validationText: 'Oops!',
    placeholder: 'Select a file',
    helpText: 'Please upload something',
}

export const DesignSystemStackingOrderEmptyFileList = Template.bind({})
DesignSystemStackingOrderEmptyFileList.args = {
    ...DesignSystemStackingOrder.args,
}
DesignSystemStackingOrderEmptyFileList.storyName =
    'Design system stacking order - empty file list'

export const DefaultButtonLabelAndPlaceholder = Template.bind({})
DefaultButtonLabelAndPlaceholder.args = { label: null }
DefaultButtonLabelAndPlaceholder.storyName =
    'Default: buttonLabel and placeholder'
