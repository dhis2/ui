import { storiesOf } from '@storybook/react'
import React from 'react'
import { AlertBar } from '../index.js'
import { AlertStack } from './AlertStack.js'

storiesOf('AlertStack', module).add('Default', () => (
    <AlertStack>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
    </AlertStack>
))
