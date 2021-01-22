import { Provider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { HeaderBar } from './HeaderBar.js'

// TODO: Replace with DHIS logo
const avatarUrl = `https://placekitten.com/200/300`

storiesOf('HeaderBarTesting', module)
    .add('Default', () => (
        <Provider
            config={{
                baseUrl: 'https://domain.tld/',
                apiVersion: '',
            }}
        >
            <HeaderBar appName="Example!" />
        </Provider>
    ))
    .add('With avatar', () => (
        <Provider
            config={{
                baseUrl: 'https://domain.tld/',
                apiVersion: '',
            }}
        >
            <HeaderBar appName="Example!" testAvatarUrl={avatarUrl} />
        </Provider>
    ))
