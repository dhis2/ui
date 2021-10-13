import React from 'react'
import * as icons from './react/index.js'

const description = `
A suite of icons is provided by the UI library; a list is shown below with the
icon's component name and a demo of the icon. The number in the name refers to
the size of the icon in px.

Each icon accepts a \`color\` prop that will be applied to the underlying SVG 
element.

**Example usage:**

\`\`\`jsx
import { IconAdd16, colors } from '@dhis2/ui'

const IconDemo = () => {
    return <IconAdd16 color={colors.blue700} />
}
\`\`\`
`

export default {
    title: 'Icons/List',
    component: icons.IconAdd16,
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
}

export const CompleteIconSet = () => (
    <table>
        <thead>
            <tr>
                <td>
                    <h4>Name</h4>
                </td>
                <td>
                    <h4>Icon</h4>
                </td>
            </tr>
        </thead>
        <tbody>
            {Object.keys(icons).map(key => {
                // eslint-disable-next-line import/namespace
                const Icon = icons[key]
                return (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>
                            <Icon />
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
)
