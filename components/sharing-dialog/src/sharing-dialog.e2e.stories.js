import { Provider } from '@dhis2/app-runtime'
import React from 'react'
import { SharingDialog } from './sharing-dialog.js'

export default {
    title: 'Sharing Dialog',
    component: SharingDialog,
}

const config = {
    baseUrl: 'http://dhis2.test',
    apiVersion: 38,
}

export const Visualization = () => (
    <Provider config={config}>
        <SharingDialog type="visualization" id="id" />
    </Provider>
)

export const Dashboard = () => (
    <Provider config={config}>
        <SharingDialog type="dashboard" id="id" />
    </Provider>
)
