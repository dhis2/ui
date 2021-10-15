import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const UserHasAllAuthority = () => <HeaderBar appName="Example!" />

UserHasAllAuthority.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        me: {
            ...dataProviderData.me,
            authorities: ['ALL'],
        }
    }),
    createDecoratorProvider(),
]
