import { CenteredContent } from '@dhis2/ui-centered-content'
import React from 'react'
import { CircularLoader } from '../index.js'
import { ComponentCover } from './ComponentCover.js'

const description = `
Covers sibling components.  Useful for covering a component while it is loading.

\`\`\`js
import { ComponentCover } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Helpers/Component Cover',
    component: ComponentCover,
    parameters: { docs: { description: { component: description } } },
}

const Template = args => (
    <div
        style={{
            width: '400px',
            height: '200px',
            position: 'relative',
            border: '1px dotted grey',
        }}
    >
        <ComponentCover {...args} />

        <h1>Text behind the cover</h1>
        <p>Lorem ipsum</p>
    </div>
)

export const Default = Template.bind({})

export const Translucent = Template.bind({})
Translucent.args = { translucent: true }

export const WithClickHandler = Template.bind({})
WithClickHandler.args = { onClick: () => alert('Cover was clicked') }

export const WithCenteredContentCircularLoader = Template.bind({})
WithCenteredContentCircularLoader.args = {
    translucent: true,
    children: (
        <CenteredContent>
            <CircularLoader />
        </CenteredContent>
    ),
}
