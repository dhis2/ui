import 'fontsource-roboto/latin.css'
import React, { Fragment } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { addDecorator, addParameters } from '@storybook/react'
import { CssReset } from '@dhis2/ui-core'

addDecorator(jsxDecorator)

addDecorator(fn => (
    <Fragment>
        <CssReset />
        {fn()}
    </Fragment>
))

addDecorator(fn => (
    <Fragment>
        {fn()}

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

//https://storybook.js.org/docs/configurations/options-parameter/#sorting-stories
addParameters({
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
            ? 0
            : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
})
