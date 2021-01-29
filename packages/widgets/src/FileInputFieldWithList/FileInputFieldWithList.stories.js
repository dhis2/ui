import React from 'react'
import { FileInputFieldWithList } from './FileInputFieldWithList.js'

const files = new Array(10)
    .fill('dummy-file-name')
    .map((name, i) => new File([], `${name}-${i + 1}.txt`))

const onChange = ({ files }) => {
    console.log('files: ', files)
}

export default {
    title: 'Forms/File Input/File Input Field With List',
    component: FileInputFieldWithList,
}

export const Default = () => (
    <FileInputFieldWithList
        multiple
        onChange={onChange}
        buttonLabel="Upload file"
        name="upload"
        files={files}
        removeText="remove"
    />
)

export const DefaultButtonLabelAndRemoveText = () => (
    <FileInputFieldWithList
        multiple
        onChange={onChange}
        name="upload"
        files={files}
    />
)
DefaultButtonLabelAndRemoveText.storyName =
    'Default: buttonLabel and removeText'

export const DefaultPlaceholder = () => (
    <FileInputFieldWithList multiple onChange={onChange} name="upload" />
)
DefaultPlaceholder.storyName = 'Default: placeholder'
