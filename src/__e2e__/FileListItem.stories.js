import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileListItem } from '../index.js'

window.onRemove = window.Cypress && window.Cypress.cy.stub()
window.onCancel = window.Cypress && window.Cypress.cy.stub()

storiesOf('FileListItem', module)
    .add('With onRemove', () => (
        <FileListItem
            label="File list item"
            onRemove={window.onRemove}
            removeText="Remove"
        />
    ))
    .add('Loading with onCancel', () => (
        <FileListItem
            loading
            label="File list item"
            removeText="Remove"
            onCancel={window.onCancel}
            cancelText="Cancel"
        />
    ))
    .add('Loading with onCancel and cancelText', () => (
        <FileListItem
            loading
            label="File list item"
            removeText="Remove"
            onCancel={() => {}}
            onRemove={() => {}}
            cancelText="Cancel"
        />
    ))
    .add('With label', () => (
        <FileListItem label="Label" removeText="Remove" onRemove={() => {}} />
    ))
    .add('With removeText', () => (
        <FileListItem label="Label" removeText="Remove" onRemove={() => {}} />
    ))
