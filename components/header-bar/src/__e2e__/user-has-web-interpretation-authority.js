import React from 'react'
import { HeaderBar } from '../index.js'
import {
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const UserHasWebInterpretationAuthority = () => <HeaderBar appName="Example!" />

UserHasWebInterpretationAuthority.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        me: {
            ...dataProviderData.me,
            authorities: [
                'M_dhis-web-interpretation',
            ],
        }
    }),
    createDecoratorProvider(),
]
