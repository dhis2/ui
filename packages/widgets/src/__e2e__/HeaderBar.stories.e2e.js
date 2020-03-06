import React from 'react'
import { storiesOf } from '@storybook/react'
import { HeaderBar } from '../index.js'
import { DataProvider } from '@dhis2/app-runtime'

storiesOf('HeaderBarTesting', module).add('Default', () => (
    <DataProvider baseUrl="https://domain.tld" apiVersion="">
        <HeaderBar appName="Example!" />
    </DataProvider>
))
