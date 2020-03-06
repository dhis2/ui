import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar, AlertStack } from '../index.js'

storiesOf('AlertStack', module).add('Default', () => (
    <AlertStack>
        <AlertBar permanent>First notification - I am at the bottom</AlertBar>
        <AlertBar permanent critical>
            Second notification
        </AlertBar>
        <AlertBar permanent warning>
            Third notification
        </AlertBar>
        <AlertBar permanent success>
            Fourth notification - I am at the top
        </AlertBar>
    </AlertStack>
))
