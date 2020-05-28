import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from '@dhis2/app-runtime'

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
