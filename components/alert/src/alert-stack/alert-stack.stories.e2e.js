import { storiesOf } from '@storybook/react'
import React from 'react'
import { AlertBar } from '../alert-bar/index.js'
import { AlertStack } from './alert-stack.js'

storiesOf('AlertStack', module).add('Default', () => (
    <AlertStack>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
    </AlertStack>
))
