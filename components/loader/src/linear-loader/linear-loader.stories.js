import { Center } from '@dhis2-ui/center'
import { Cover } from '@dhis2-ui/cover'
import { Layer } from '@dhis2-ui/layer'
import { layers } from '@dhis2/ui-constants'
import React from 'react'
import { LinearLoader } from './index.js'

const subtitle = `Used to inform the user that an element or page is in a loading state`

const description = `
Use loading indicators whenever a component or application takes longer than 700ms to load. After this time a loader should be displayed so that the user can understand what is happening: loading is in progress. Consider that without a loading indicator a user would be unsure of their current status, so they are important UI elements.

A linear loader is used when the loading time is can be measured and displayed as a percentage.

\`\`\`js
import { LinearLoader } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Feedback/Loading Indicators/Linear Loader',
    component: LinearLoader,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    argTypes: { margin: { defaultValue: '12px' } },
}

export const Determinate = args => <LinearLoader {...args} />
Determinate.args = { amount: 60 }

export const OverlayPage = args => (
    <Layer level={layers.blocking} translucent>
        <Center>
            <LinearLoader {...args} />
        </Center>
    </Layer>
)
OverlayPage.args = { amount: 30 }
OverlayPage.parameters = { docs: { inlineStories: false } }

export const OverlayComponent = args => (
    <div style={{ width: '400px', height: '400px' }}>
        <Cover translucent>
            <Center>
                <LinearLoader {...args} />
            </Center>
        </Cover>
    </div>
)
OverlayComponent.args = { amount: 80 }
