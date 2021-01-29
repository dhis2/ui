import React from 'react'
import { CenteredContent } from './CenteredContent.js'

export default {
    title: 'Layout/Centered Content',
    component: CenteredContent,
}

export const Default = () => (
    <CenteredContent>
        <span>Center me</span>
    </CenteredContent>
)

export const Top = () => (
    <CenteredContent position="top">
        <span>Center me</span>
    </CenteredContent>
)

export const Bottom = () => (
    <CenteredContent position="bottom">
        <span>Center me</span>
    </CenteredContent>
)
