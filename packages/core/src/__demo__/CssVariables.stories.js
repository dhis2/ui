import React from 'react'
import { storiesOf } from '@storybook/react'
import { CssVariables } from '../index.js'

// eslint-disable-next-line react/prop-types
const App = ({ children }) => <div>{children}</div>

storiesOf('Utility/CssVariables', module)
    .add('Default', () => (
        <App>
            <CssVariables />

            <p>By default no custom properties are inserted.</p>
        </App>
    ))

    .add('All', () => (
        <App>
            <CssVariables colors theme layers spacers elevations />

            <p>
                The sections of the theme that should be inserted can be toggled
                with flags, which allows the theme variables to be used as
                regular CSS custom properties. So this{' '}
                <span style={{ color: 'var(--colors-red500)' }}>text</span> uses
                the vanilla CSS{' '}
                <span style={{ color: 'var(--colors-blue500)' }}>
                    custom properties
                </span>{' '}
                set by the CssVariables component.
            </p>
        </App>
    ))
