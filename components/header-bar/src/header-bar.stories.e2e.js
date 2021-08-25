import { Provider } from '@dhis2/app-runtime'
import React from 'react'
import { HeaderBar } from './header-bar.js'

export default {
    title: 'HeaderBarTesting',
    component: HeaderBar,
}

export const Default = () => (
    <Provider
        config={{
            baseUrl: 'https://domain.tld/',
            apiVersion: '',
        }}
    >
        <HeaderBar appName="Example!" />
    </Provider>
)
