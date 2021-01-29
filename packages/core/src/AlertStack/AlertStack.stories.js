import React from 'react'
import { AlertBar } from '../index.js'
import { AlertStack } from './AlertStack.js'

export default {
    title: 'Feedback/Alerts/AlertStack',
    component: AlertStack,
    // Use an iframe in docs to contain 'portal'
    parameters: { docs: { inlineStories: false, iframeHeight: '300px' } },
}

export const Default = args => (
    <AlertStack {...args}>
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
)
