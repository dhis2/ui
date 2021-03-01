import '@fontsource/roboto/latin.css'
import React, { Fragment } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { addDecorator, addParameters } from '@storybook/react'
import '@storybook/addon-console'
import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'
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

addParameters({
    options: {
        storySort: {
            // Manually sort top content
            order: [
                'About This Documentation',
                ['For readers', 'For maintainers'],
                'Using UI',
                [
                    'Getting Started',
                    'Troubleshooting',
                    'Advanced Usage',
                    'Recipes',
                ],
            ],
            // Then sort the rest alphabetically
            method: 'alphabetical',
        },
    },
    docs: {
        // Customize docs page layout (in order to rename 'Stories' section)
        page: () => (
            <>
                <Title />
                <Subtitle />
                <Description />
                <Primary />
                <ArgsTable story={PRIMARY_STORY} />
                <Stories title="Examples" />
            </>
        ),
    },
    jsx: {
        filterProps: val => val !== undefined,
        showDefaultProps: false,
        functionValue: fn => fn.name,
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
})
