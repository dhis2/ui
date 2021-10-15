import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    modulesWithSpecialCharacters,
    dataProviderData,
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const WithSpecialAppNameCharacters = () => (
    <HeaderBar appName="Example!" />
)

WithSpecialAppNameCharacters.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        ['action::menu/getModules']: {
            ...dataProviderData['action::menu/getModules'],
            modules: modulesWithSpecialCharacters,
        },
    }),
    createDecoratorProvider(),
]
