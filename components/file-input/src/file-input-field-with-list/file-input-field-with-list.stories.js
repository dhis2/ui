import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { FileInputFieldWithList } from './file-input-field-with-list.js'

const description = `
A FileInputField with logic for creating a dynamic list of removable files from an array of \`File\` objects.

\`\`\`js
import { FileInputFieldWithList } from '@dhis2/ui'
\`\`\`
`

const files = new Array(10)
    .fill('dummy-file-name')
    .map((name, i) => new File([], `${name}-${i + 1}.txt`))

const onChange = ({ files }) => {
    console.log('files: ', files)
}

export default {
    title: 'File Input Field With List',
    component: FileInputFieldWithList,
    parameters: { docs: { description: { component: description } } },
    args: {
        // Handle default props bug (see Transfer stories)
        ...FileInputFieldWithList.defaultProps,
        multiple: true,
        onChange: onChange,
        name: 'uploadName',
    },
    argTypes: {
        small: { ...sharedPropTypes.sizeArgType },
        large: { ...sharedPropTypes.sizeArgType },
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
    },
}

const Template = (args) => <FileInputFieldWithList {...args} />

export const Default = Template.bind({})
Default.args = {
    buttonLabel: 'Upload file (custom label)',
    files: files,
    removeText: 'Custom remove text',
}

export const DefaultButtonLabelAndRemoveText = Template.bind({})
DefaultButtonLabelAndRemoveText.args = { files: files }
DefaultButtonLabelAndRemoveText.storyName =
    'Default: buttonLabel and removeText'

export const DefaultPlaceholder = Template.bind({})
DefaultPlaceholder.storyName = 'Default: placeholder'
