import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const InstanceAndAppInfos = () => (
    <HeaderBar
        appName="Data Visualizer"
        appVersion="100.3.2"
    />
)

InstanceAndAppInfos.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider(),
]
