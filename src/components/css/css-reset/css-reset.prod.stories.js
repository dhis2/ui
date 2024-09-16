import React from 'react'
import { CssReset } from './index.js'

const description = `
A tool for adding a global normalization stylesheet into the DOM that applies DHIS2 styles.

- https://github.com/necolas/normalize.css
- https://www.paulirish.com/2012/box-sizing-border-box-ftw/

\`\`\`js
import { CssReset } from '@dhis2/ui'
\`\`\`
`

const App = ({ children }) => <div>{children}</div>

export default {
    title: 'CSS Reset',
    component: CssReset,
    parameters: { docs: { description: { component: description } } },
}

export const Default = (args) => (
    <App>
        <CssReset {...args} />

        <p>
            The <code>CssReset</code> component injects a global normalization
            stylesheet into the DOM that sets the DHIS2 application defaults.
        </p>

        <p>
            This also sets the <code>font-family</code> on the <code>body</code>{' '}
            element to the DHIS2 font, which allows it to trickle down to the
            components as well.
        </p>

        <p>
            Just include the component in your application, preferably as early
            as possible to avoid FOUC.{' '}
        </p>
    </App>
)
