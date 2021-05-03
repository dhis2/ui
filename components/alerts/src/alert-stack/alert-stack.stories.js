import React from 'react'
import { AlertBar } from '../alert-bar.js'
import { AlertStack } from './alert-stack.js'

const description = `
A container for Alert Bars.

_**Note:** The demos on this page may be slow._

\`\`\`js
import { AlertStack } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Feedback/Alerts/Alert Stack',
    component: AlertStack,
    // Use an iframe in docs to contain 'portal'
    parameters: {
        docs: {
            inlineStories: false,
            iframeHeight: '300px',
            description: { component: description },
        },
    },
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
