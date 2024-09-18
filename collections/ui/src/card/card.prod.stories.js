import { Box } from '../box/index.js'
import React from 'react'
import { Card } from './card.js'

const subtitle = `
A card is a container element for grouping together
and separating blocks of content.
`

const description = `
Use a card where there is content that can be grouped together.
Cards are most often useful when this grouped content may be repeated,
for example with items on a dashboard, or different sections of patient
information displayed in a profile.

Note that it requires a parent, like [Box](../?path=/docs/layout-box--default), to define its size.

\`\`\`js
import { Card } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Card',
    component: Card,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    argTypes: {
        children: { control: { type: 'text' } },
    },
}

export const Default = (args) => (
    <Box width="200px" height="75px">
        <Card {...args} />
    </Box>
)

Default.args = {
    children: 'Card content',
}
