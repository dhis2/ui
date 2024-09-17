import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const ZeroUnreadInterpretations = () => <HeaderBar appName="Example!" />

ZeroUnreadInterpretations.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        ['me/dashboard']: {
            unreadInterpretations: 0,
        },
    }),
    createDecoratorProvider(),
]
