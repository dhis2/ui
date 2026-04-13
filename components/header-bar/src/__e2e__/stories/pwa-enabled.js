import React from 'react'
import { HeaderBar } from '../../index.ts'
import {
    providerConfig,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const PWAEnabled = () => <HeaderBar appName="Example!" />

PWAEnabled.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        pwaEnabled: true,
    }),
]
