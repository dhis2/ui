import React from 'react'
import { FileInput } from './index.js'

window.onBlur = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()

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

export default { title: 'FileInput' }
export const WithOnChange = () => (
    <FileInput
        onChange={onChange}
        buttonLabel="Upload file"
        name="upload"
    />
)
export const WithOnChangeAndMultiple = () => (
    <FileInput
        name="upload"
        onChange={onChange}
        buttonLabel="Upload files"
        multiple
    />
)
export const WithInitialFocusAndOnBlur = () => (
    <FileInput
        buttonLabel="Upload file"
        name="upload"
        initialFocus
        onBlur={window.onBlur}
    />
)
export const WithOnFocus = () => (
    <FileInput
        buttonLabel="Upload file"
        name="upload"
        onFocus={window.onFocus}
    />
)
