import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { FileInput } from './index.js'

const subtitle = `The file input component allows users to select and upload files from their local machine.`

const description = `
Use a file input component in forms and interfaces wherever a user needs to be able to select and upload a file from their local machine.

\`\`\`js
import { FileInput } from '@dhis2/ui'
\`\`\`
`

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

const { sizeArgType, statusArgType } = sharedPropTypes

export default {
    title: 'Forms/File Input/File Input',
    component: FileInput,
    // Default args for each story unless overridden
    args: { buttonLabel: 'Upload file', name: 'upload', onChange },
    argTypes: {
        valid: { ...statusArgType },
        warning: { ...statusArgType },
        error: { ...statusArgType },
        small: { ...sizeArgType },
        large: { ...sizeArgType },
    },
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
}

const Template = args => <FileInput {...args} />

export const Default = Template.bind({})

export const Multiple = Template.bind({})
Multiple.args = { multiple: true, buttonLabel: 'Upload files' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Sizes = args => (
    <>
        <FileInput {...args} buttonLabel="Default size" name="default" />
        <FileInput {...args} small buttonLabel="Small" name="small" />
        <FileInput {...args} large buttonLabel="Large" name="large" />
    </>
)

export const Statuses = args => (
    <>
        <FileInput {...args} buttonLabel="Default" name="default" />
        <FileInput {...args} buttonLabel="Valid" name="valid" valid />
        <FileInput {...args} buttonLabel="Warning" name="warning" warning />
        <FileInput {...args} buttonLabel="Error" name="error" error />
    </>
)
