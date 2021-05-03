import { AlertBar } from '@dhis2/ui-alert-bar'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { AlertStack } from './alert-stack.js'

storiesOf('AlertStack', module).add('Default', () => (
    <AlertStack>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
    </AlertStack>
))
