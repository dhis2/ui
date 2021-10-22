import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    providerConfig,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const ShowOnlineStatus = () => <HeaderBar appName="Example!" />

ShowOnlineStatus.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        headerbar: { showOnlineStatus: true },
    }),
]
