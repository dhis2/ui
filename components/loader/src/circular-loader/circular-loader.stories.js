import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { CircularLoader } from './index.js'

const subtitle = `Used to inform the user that an element or page is in a loading state`

const description = `
Use loading indicators whenever a component or application takes longer than 700ms to load. After this time a loader should be displayed so that the user can understand what is happening: loading is in progress. Consider that without a loading indicator a user would be unsure of their current status, so they are important UI elements.

A circular loader is used when the loading time is uncertain and cannot be displayed as a percentage. A circular loader can spin many times, and each spin does not represent any amount of completion.

\`\`\`js
import { CircularLoader } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Feedback/Loading Indicators/Circular Loader',
    component: CircularLoader,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    argTypes: {
        small: { ...sharedPropTypes.sizeArgType },
        large: { ...sharedPropTypes.sizeArgType },
        extrasmall: { ...sharedPropTypes.sizeArgType },
    },
}

const Template = args => <CircularLoader {...args} />

export const Default = Template.bind({})

export const Small = Template.bind({})
Small.args = { small: true }

export const Large = Template.bind({})
Large.args = { large: true }

export const ExtraSmall = Template.bind({})
ExtraSmall.args = { extrasmall: true }
