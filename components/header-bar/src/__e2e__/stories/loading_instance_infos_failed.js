import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
    dataProviderData,
} from './common.js'

export const LoadingInstanceInfosFailed = () => (
    <HeaderBar appName="Data Visualizer" appVersion="100.3.2" />
)

LoadingInstanceInfosFailed.decorators = [
    createDecoratorCustomDataProviderHeaderBar({
        ...dataProviderData,
        ['system/info']: () => Promise.reject('Failed foobar'),
    }),
    createDecoratorProvider(),
]
