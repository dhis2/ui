import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
    dataProviderData,
} from './common.js'

export const InstanceInfosAreLoading = () => (
    <HeaderBar
        appName="Data Visualizer"
        appVersion="100.3.2"
    />
)

InstanceInfosAreLoading.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        ['system/info']: () => new Promise(() => {}),
    }),
    createDecoratorProvider(),
]
