import React from 'react'
import { storiesOf } from '@storybook/react'
import { DataProvider } from '@dhis2/app-runtime'

import { HeaderBar } from './HeaderBar.js'

storiesOf('HeaderBarTesting', module).add('Default', () => (
    <DataProvider baseUrl="https://domain.tld" apiVersion="">
        <HeaderBar appName="Example!" />
    </DataProvider>
))
