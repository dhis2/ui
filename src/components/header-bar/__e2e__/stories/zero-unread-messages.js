import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const ZeroUnreadMessages = () => <HeaderBar appName="Example!" />

ZeroUnreadMessages.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        ['me/dashboard']: {
            unreadMessages: 0,
        },
    }),
    createDecoratorProvider(),
]
