import '@fontsource/roboto/latin.css'
import React, { Fragment } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { addDecorator, addParameters } from '@storybook/react'
import { CssReset } from '@dhis2/ui-core'

// Enable storybook jsx visualization
addDecorator(jsxDecorator)

/**
 * Basic wrapper for all our components, styles the root elements and applies
 * our css reset for consistency/
 */
addDecorator(Component => (
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
))

/**
 * Sort all our stories alphabetically
 *
 * See: https://storybook.js.org/docs/configurations/options-parameter/#sorting-stories
 */
addParameters({
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
            ? 0
            : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
})
