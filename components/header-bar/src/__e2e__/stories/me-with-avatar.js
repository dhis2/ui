import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const MeWithAvatar = () => <HeaderBar appName="Example!" />

MeWithAvatar.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        me: {
            name: 'John Doe',
            username: 'john_doe',
            settings: {
                keyUiLocale: 'en',
            },
            authorities: ['ALL'],
            avatar: {
                id: 'avatarId',
            },
        },
    }),
    createDecoratorProvider(),
]
