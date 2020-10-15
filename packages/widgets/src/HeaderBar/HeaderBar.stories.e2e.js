import { Provider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { HeaderBar } from './HeaderBar.js'

storiesOf('HeaderBarTesting', module).add('Default', () => (
    <Provider
        config={{
            baseUrl: 'https://domain.tld/',
            apiVersion: '',
        }}
    >
        <HeaderBar appName="Example!" />
    </Provider>
))
