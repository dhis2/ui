import React from 'react'
import { storiesOf } from '@storybook/react'
import { CssVariables } from '../index.js'

storiesOf('CssVariables', module)
    .add('With colors', () => (
        <React.Fragment>
            <CssVariables colors />
            <div
                id="custom"
                style={{ backgroundColor: 'var(--colors-blue900)' }}
            ></div>
        </React.Fragment>
    ))
    .add('With theme', () => (
        <React.Fragment>
            <CssVariables theme />
            <div
                id="custom"
                style={{ backgroundColor: 'var(--theme-primary900)' }}
            ></div>
        </React.Fragment>
    ))
    .add('With layers', () => (
        <React.Fragment>
            <CssVariables layers />
            <div
                id="custom"
                style={{ zIndex: 'var(--layers-alert)', position: 'absolute' }}
            ></div>
        </React.Fragment>
    ))
    .add('With spacers', () => (
        <React.Fragment>
            <CssVariables spacers />
            <div id="custom" style={{ margin: 'var(--spacers-dp4)' }}></div>
        </React.Fragment>
    ))
    .add('With elevations', () => (
        <React.Fragment>
            <CssVariables elevations />
            <div
                id="custom"
                style={{ boxShadow: 'var(--elevations-e100)' }}
            ></div>
        </React.Fragment>
    ))
