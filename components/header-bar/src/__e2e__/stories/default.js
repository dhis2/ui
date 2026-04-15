import React from 'react'
import { HeaderBar } from '../../index.ts'
import {
    createDecoratorCustomDataProviderHeaderBar,
    createDecoratorProvider,
} from './common.js'

export const Default = () => <HeaderBar appName="Example!" />

Default.decorators = [
    createDecoratorCustomDataProviderHeaderBar(),
    createDecoratorProvider(),
]
