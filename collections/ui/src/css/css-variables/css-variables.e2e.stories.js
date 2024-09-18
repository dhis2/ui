import React from 'react'
import { CssVariables } from './index.js'

export default { title: 'CssVariables' }
export const WithColors = () => (
    <React.Fragment>
        <CssVariables colors />
        <div
            id="custom"
            style={{ backgroundColor: 'var(--colors-blue900)' }}
        ></div>
    </React.Fragment>
)
export const WithTheme = () => (
    <React.Fragment>
        <CssVariables theme />
        <div
            id="custom"
            style={{ backgroundColor: 'var(--theme-primary900)' }}
        ></div>
    </React.Fragment>
)
export const WithLayers = () => (
    <React.Fragment>
        <CssVariables layers />
        <div
            id="custom"
            style={{ zIndex: 'var(--layers-alert)', position: 'absolute' }}
        ></div>
    </React.Fragment>
)
export const WithSpacers = () => (
    <React.Fragment>
        <CssVariables spacers />
        <div id="custom" style={{ margin: 'var(--spacers-dp4)' }}></div>
    </React.Fragment>
)
export const WithElevations = () => (
    <React.Fragment>
        <CssVariables elevations />
        <div id="custom" style={{ boxShadow: 'var(--elevations-e100)' }}></div>
    </React.Fragment>
)
