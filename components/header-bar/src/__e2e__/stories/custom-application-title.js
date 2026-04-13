import React from 'react'
import { HeaderBar } from '../../index.ts'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const CustomApplicationTitle = () => <HeaderBar appName="Example!" />

CustomApplicationTitle.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        ['systemSettings/applicationTitle']: {
            applicationTitle: 'Barbaz',
        },
    }),
    createDecoratorProvider(),
]
