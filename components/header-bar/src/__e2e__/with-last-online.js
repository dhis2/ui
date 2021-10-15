import React from 'react'
import { HeaderBar } from '../index.js'
import {
    providerConfig,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const WithLastOnline = () => <HeaderBar appName="Example!" />

WithLastOnline.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        headerbar: {
            showOnlineStatus: true,
            onlineStatusInfo: 'LAST_ONLINE',
        },
    }),
]
