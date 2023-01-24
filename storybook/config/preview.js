import '@fontsource/roboto/latin.css'
import { CssReset } from '@dhis2-ui/css'
import React, { Fragment } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import '@storybook/addon-console'

export const decorators = [
    // Enable storybook jsx visualization
    jsxDecorator,
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
    jsx: {
        filterProps: (val) => val !== undefined,
        showDefaultProps: false,
        functionValue: (fn) => fn.name,
        tabStop: 4,
        maxInlineAttributesLineLength: 80,
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
