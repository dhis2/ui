import '@fontsource/roboto/latin.css'
import { CssReset } from '@dhis2-ui/css'
import React, { Fragment } from 'react'
import '@storybook/addon-console'
const { withJsx } = require('@mihkeleidast/storybook-addon-source')

export const decorators = [
    withJsx,
    /**
     * Basic wrapper for all our components, styles the root elements and applies
     * our css reset for consistency/
     */
    (Component) => (
        <Fragment>
            <CssReset />
            <Component />

            <style jsx>{`
                :global(html) {
                    height: 100%;
                }
                :global(body) {
                    height: 100%;
                    min-height: 100%;
                }
                :global(#root) {
                    height: 100%;
                    padding: 16px;
                }
            `}</style>
        </Fragment>
    ),
]

export const parameters = {
    options: {
        storySort: {
            method: 'alphabetical',
        },
    },
    // A11y addon config
    a11y: {
        // the target DOM element
        element: '#root',
        // execution mode for the addon
        manual: false,
    },
    controls: { hideNoControlsWarning: true, expanded: true },
}
