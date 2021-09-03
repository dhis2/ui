import React from 'react'
import { CssVariables } from './index.js'

const description = `
A utility for adding DHIS2 theme variables to global CSS variables.

\`\`\`js
import { CssVariables } from '@dhis2/ui'
\`\`\`
`

const App = ({ children }) => <div>{children}</div>

export default {
    title: 'Helpers/CSS Variables',
    component: CssVariables,
    parameters: { docs: { description: { component: description } } },
}

export const AllVariables = args => (
    <App>
        <CssVariables {...args} />

        <p>
            The sections of the theme that should be inserted can be toggled
            with flags, which allows the theme variables to be used as regular
            CSS custom properties. So this{' '}
            <span style={{ color: 'var(--colors-red500)' }}>text</span> uses the
            vanilla CSS{' '}
            <span style={{ color: 'var(--colors-blue500)' }}>
                custom properties
            </span>{' '}
            set by the CssVariables component.
        </p>
    </App>
)
AllVariables.args = {
    colors: true,
    theme: true,
    layers: true,
    spacers: true,
    elevations: true,
}

export const NoVariables = args => (
    <App>
        <CssVariables {...args} />

        <p>By default no custom properties are inserted.</p>
    </App>
)
