import React from 'react'
import { CssReset } from './CssReset.js'

// eslint-disable-next-line react/prop-types
const App = ({ children }) => <div>{children}</div>

export default {
    title: 'Helpers/CSS Reset',
    component: CssReset,
}

export const Default = () => (
    <App>
        <CssReset />

        <p>
            The <code>CssReset</code> component injects a global normalization
            stylesheet into the DOM that sets the DHIS2 application defaults.
        </p>

        <p>
            This also sets the <code>font-family</code> on the
            <code>body</code> element to the DHIS2 font, which allows it to
            trickle down to the components as well.
        </p>

        <p>
            Just include the component in your application, preferably as early
            as possible to avoid FOUC.{' '}
        </p>
    </App>
)
