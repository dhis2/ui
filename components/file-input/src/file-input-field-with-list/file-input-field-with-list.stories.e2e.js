import React from 'react'
import { FileInputFieldWithList } from './index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()

const singleFileArray = [new File([], 'dummy.txt')]

window.duplicateFileConstructorArgs = [
    [],
    'duplicate.md',
    {
        lastModified: 1581348175357,
        type: 'text/markdown',
    },
]

const multipleFileArray = [
    new File([], 'test1.md'),
    new File(...window.duplicateFileConstructorArgs),
    new File([], 'test2.md'),
]

const onChange = (payload, event) => {
    // NOTE: if files is not transformed into an array,
    // cypress will get an empty file list!
    window.onChange(
        {
            ...payload,
            files: [...payload.files],
        },
        event
    )
}

export default { title: 'FileInputFieldWithList' }
export const SingleFileWithFile = () => (
    <FileInputFieldWithList
        buttonLabel="Upload file"
        name="upload"
        files={singleFileArray}
        removeText="remove"
        onChange={onChange}
    />
)
export const MultipleFilesEmpty = () => (
    <FileInputFieldWithList
        buttonLabel="Upload file"
        multiple
        name="upload"
        removeText="remove"
        onChange={onChange}
    />
)
export const MultipleFilesWithFiles = () => (
    <FileInputFieldWithList
        buttonLabel="Upload file"
        multiple
        name="upload"
        files={multipleFileArray}
        removeText="remove"
        onChange={onChange}
    />
)
export const WithFileAndDefaultTexts = () => (
    <FileInputFieldWithList
        name="upload"
        files={singleFileArray}
        onChange={onChange}
    />
)
export const WithDefaultTexts = () => (
    <FileInputFieldWithList name="upload" onChange={onChange} />
)
