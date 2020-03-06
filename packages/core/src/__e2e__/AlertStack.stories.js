import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar, AlertStack } from '../index.js'

storiesOf('AlertStack', module).add('Default', () => (
    <AlertStack>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
    </AlertStack>
))
