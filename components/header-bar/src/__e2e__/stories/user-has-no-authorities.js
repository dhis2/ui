import React from 'react'
import { HeaderBar } from '../../index.ts'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const UserHasNoAuthorities = () => <HeaderBar appName="Example!" />

UserHasNoAuthorities.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        me: {
            ...dataProviderData.me,
            authorities: [],
        },
    }),
    createDecoratorProvider(),
]
