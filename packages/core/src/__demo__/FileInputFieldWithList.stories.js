import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileInputFieldWithList } from '../index.js'

const files = new Array(10)
    .fill('dummy-file-name')
    .map((name, i) => new File([], `${name}-${i + 1}.txt`))

const onChange = ({ files }) => {
    console.log('files: ', files)
}

storiesOf('FileInputFieldWithList', module).add('Default', () => (
    <FileInputFieldWithList
        multiple
        onChange={onChange}
        buttonLabel="Upload file"
        name="upload"
        files={files}
        removeText="remove"
    />
))
