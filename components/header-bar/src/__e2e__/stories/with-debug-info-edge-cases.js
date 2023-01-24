import React from 'react'
import { HeaderBar } from '../../header-bar.js'
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
    providerConfig,
} from './common.js'

export const WithUnknownInstanceVersion = () => <HeaderBar />

WithUnknownInstanceVersion.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        systemInfo: {
            ...providerConfig.systemInfo,
            version: undefined,
        },
    }),
]

export const WithUnknownAppVersion = () => <HeaderBar />

WithUnknownAppVersion.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        appVersion: undefined,
    }),
]

export const WithUnknownAppName = () => <HeaderBar />

WithUnknownAppName.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        appName: undefined,
    }),
]

export const WithUnknownAppNameAndVersion = () => <HeaderBar />

WithUnknownAppNameAndVersion.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider({
        ...providerConfig,
        appName: undefined,
        appVersion: undefined,
    }),
]
