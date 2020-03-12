import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileInput } from '../index.js'

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

storiesOf('FileInput', module)
    .add('With onChange', () => (
        <FileInput
            onChange={onChange}
            buttonLabel="Upload file"
            name="upload"
        />
    ))
    .add('With onChange and multiple', () => (
        <FileInput
            name="upload"
            onChange={onChange}
            buttonLabel="Upload files"
            multiple
        />
    ))
    .add('With initialFocus and onBlur', () => (
        <FileInput
            buttonLabel="Upload file"
            name="upload"
            initialFocus
            onBlur={window.onBlur}
        />
    ))
    .add('With onFocus', () => (
        <FileInput
            buttonLabel="Upload file"
            name="upload"
            onFocus={window.onFocus}
        />
    ))
