import { DataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { SharingDialog } from './sharing-dialog.js'

export default {
    title: 'Sharing Dialog',
    component: SharingDialog,
}

export const Visualization = () => (
    <DataProvider baseUrl="http://dhis2.test" apiVersion={38}>
        <SharingDialog type="visualization" id="id" />
    </DataProvider>
)

export const Dashboard = () => (
    <DataProvider baseUrl="http://dhis2.test" apiVersion={38}>
        <SharingDialog type="dashboard" id="id" />
    </DataProvider>
)
