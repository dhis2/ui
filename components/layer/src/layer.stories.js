import { CenteredContent } from '@dhis2-ui/centered-content'
import { CircularLoader } from '@dhis2-ui/circular-loader'
import React from 'react'
import { Layer } from './layer.js'

const description = `
Layers are used for creating different levels of stacking of interface elements.
See more about stacking guidelines at the [design system](https://github.com/dhis2/design-system/blob/master/principles/layout.md#stacking).

Layers are used in Modals, Popovers, and Alerts.

\`\`\`js
import { Layer } from '@dhis2/ui'
\`\`\`

_**Note:** These demos may take some time to load._
`

export default {
    title: 'Helpers/Layer',
    component: Layer,
    /**
     * `inlineStories: false` renders these layers in iframes instead of inline.
     * This fixes an issue where all the layers on the docs page render on top
     * of eachother, each covering the whole screen.
     * There is a performance tradeof, and they are slow to load.
     */
    parameters: {
        docs: {
            inlineStories: false,
            iframeHeight: '180px',
            description: { component: description },
        },
    },
    // Handle weird treatment of non-literal defaultProps (see Transfer.stories)
    args: { ...Layer.defaultProps },
}

const Template = args => (
    <>
        <Layer {...args} />

        <h1>Text behind the layer</h1>
        <p>Lorem ipsum</p>
    </>
)

export const Default = Template.bind({})

export const Translucent = Template.bind({})
Translucent.args = { translucent: true }

export const WithClickHandler = Template.bind({})
WithClickHandler.args = { onClick: () => alert('layer was clicked') }

export const WithCenteredContentCircularLoader = Template.bind({})
WithCenteredContentCircularLoader.args = {
    children: (
        <CenteredContent>
            <CircularLoader />
        </CenteredContent>
    ),
}
