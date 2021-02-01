import { layers } from '@dhis2/ui-constants'
import React from 'react'
import { Layer, CenteredContent, ComponentCover } from '../index.js'
import { LinearLoader } from './LinearLoader.js'

const subtitle = `Used to inform the user that an element or page is in a loading state`

const description = `
Use loading indicators whenever a component or application takes longer than 700ms to load. After this time a loader should be displayed so that the user can understand what is happening: loading is in progress. Consider that without a loading indicator a user would be unsure of their current status, so they are important UI elements.

A circular loader is used when the loading time is uncertain and cannot be displayed as a percentage. A circular loader can spin many times, and each spin does not represent any amount of completion.

\`\`\`js
import { CircularLoader } from '@dhis2/ui'
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
        <CenteredContent>
            <LinearLoader {...args} />
        </CenteredContent>
    </Layer>
)
OverlayPage.args = { amount: 30 }
OverlayPage.parameters = { docs: { inlineStories: false } }

export const OverlayComponent = args => (
    <div style={{ width: '400px', height: '400px' }}>
        <ComponentCover translucent>
            <CenteredContent>
                <LinearLoader {...args} />
            </CenteredContent>
        </ComponentCover>
    </div>
)
OverlayComponent.args = { amount: 80 }
