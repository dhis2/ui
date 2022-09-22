import React from 'react'
import { HeaderBar } from '../../index.js'
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const Default = () => <HeaderBar appName="Example!" />

Default.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorAlertStack(),
    createDecoratorProvider(),
]
