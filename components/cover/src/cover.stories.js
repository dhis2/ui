import { Center } from '@dhis2-ui/center'
import { CircularLoader } from '@dhis2-ui/loader'
import React from 'react'
import { Cover } from './cover.js'

const description = `
Covers sibling components.  Useful for covering a component while it is loading.

\`\`\`js
import { Cover } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Helpers/Component Cover',
    component: Cover,
    parameters: { docs: { description: { component: description } } },
}

const Template = (args) => (
    <div
        style={{
            width: '400px',
            height: '200px',
            position: 'relative',
            border: '1px dotted grey',
        }}
    >
        <Cover {...args} />

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
        <Center>
            <CircularLoader />
        </Center>
    ),
}
