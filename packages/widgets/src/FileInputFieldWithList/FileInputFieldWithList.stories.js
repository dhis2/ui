import { storiesOf } from '@storybook/react'
import React from 'react'
import { FileInputFieldWithList } from './FileInputFieldWithList.js'

const files = new Array(10)
    .fill('dummy-file-name')
    .map((name, i) => new File([], `${name}-${i + 1}.txt`))

const onChange = ({ files }) => {
    console.log('files: ', files)
}

storiesOf('FileInputFieldWithList', module)
    .add('Default', () => (
        <FileInputFieldWithList
            multiple
            onChange={onChange}
            buttonLabel="Upload file"
            name="upload"
            files={files}
            removeText="remove"
        />
    ))
    .add('Default: buttonLabel and removeText', () => (
        <FileInputFieldWithList
            multiple
            onChange={onChange}
            name="upload"
            files={files}
        />
    ))
    .add('Default: placeholder', () => (
        <FileInputFieldWithList multiple onChange={onChange} name="upload" />
    ))
