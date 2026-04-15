import React from 'react'
import { HeaderBar } from '../../index.ts'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const UserHasWebMessagingAuthority = () => (
    <HeaderBar appName="Example!" />
)

UserHasWebMessagingAuthority.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        me: {
            ...dataProviderData.me,
            authorities: ['M_dhis-web-messaging'],
        },
    }),
    createDecoratorProvider(),
]
