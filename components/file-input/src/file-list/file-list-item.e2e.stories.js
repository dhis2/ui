import React from 'react'
import { FileListItem } from './file-list-item.js'

window.onRemove = window.Cypress && window.Cypress.cy.stub()
window.onCancel = window.Cypress && window.Cypress.cy.stub()

export default { title: 'FileListItem' }
export const WithOnRemove = () => (
    <FileListItem
        label="File list item"
        onRemove={window.onRemove}
        removeText="Remove"
    />
)
export const LoadingWithOnCancel = () => (
    <FileListItem
        loading
        label="File list item"
        removeText="Remove"
        onCancel={window.onCancel}
        cancelText="Cancel"
    />
)
export const LoadingWithOnCancelAndCancelText = () => (
    <FileListItem
        loading
        label="File list item"
        removeText="Remove"
        onCancel={() => {}}
        onRemove={() => {}}
        cancelText="Cancel"
    />
)
export const WithLabel = () => (
    <FileListItem label="Label" removeText="Remove" onRemove={() => {}} />
)
export const WithRemoveText = () => (
    <FileListItem label="Label" removeText="Remove" onRemove={() => {}} />
)
