import { Provider } from '@dhis2/app-runtime'
import React from 'react'
import { HeaderBar } from './header-bar.js'

export default {
    title: 'HeaderBarTesting',
    component: HeaderBar,
}

const config = {
    baseUrl: 'https://domain.tld/',
    apiVersion: '',
}

export const Default = () => (
    <Provider config={config}>
        <HeaderBar appName="Example!" />
    </Provider>
)

export const ShowOnlineStatus = () => (
    <Provider config={{ ...config, headerbar: { showOnlineStatus: true } }}>
        <HeaderBar appName="Example!" />
    </Provider>
)

export const PWAEnabled = () => (
    <Provider config={{ ...config, pwaEnabled: true }}>
        <HeaderBar appName="Example!" />
    </Provider>
)

export const WithLastOnline = () => (
    <Provider
        config={{
            ...config,
            headerbar: {
                showOnlineStatus: true,
                onlineStatusInfo: 'LAST_ONLINE',
            },
        }}
    >
        <HeaderBar appName="Example!" />
    </Provider>
)
