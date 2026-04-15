import React from 'react'
import { HeaderBar } from '../../index.ts'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const UserHasWebInterpretationAndMessagingAuthority = () => (
    <HeaderBar appName="Example!" />
)

UserHasWebInterpretationAndMessagingAuthority.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        me: {
            ...dataProviderData.me,
            authorities: ['M_dhis-web-interpretation', 'M_dhis-web-messaging'],
        },
    }),
    createDecoratorProvider(),
]
