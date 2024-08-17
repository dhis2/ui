import * as theme from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const toPrefixedThemeSection = (themeSectionKey) =>
    // eslint-disable-next-line import/namespace
    Object.entries(theme[themeSectionKey]).reduce((prefixed, [key, value]) => {
        prefixed[`${themeSectionKey}-${key}`] = value

        return prefixed
    }, {})

const toCustomPropertyString = (themeSection) =>
    Object.entries(themeSection)
        .map(([key, value]) => `--${key}: ${value};`)
        .join('\n')

const CssVariables = ({ colors, theme, layers, spacers, elevations }) => {
    const allowedProps = { colors, theme, layers, spacers, elevations }
    const variables = Object.keys(allowedProps)
        // Filter all props that are false
        .filter((prop) => allowedProps[prop])
        // Map props to corresponding theme section and prefixes keys with section name
        .map(toPrefixedThemeSection)
        // Map each section to a single string of css custom property declarations
        .map(toCustomPropertyString)
        // Join all the sections to a single string
        .join('\n')

    return (
        <style jsx global>{`
            html {
                ${variables}
            }
        `}</style>
    )
}

CssVariables.defaultProps = {
    colors: false,
    theme: false,
    layers: false,
    spacers: false,
    elevations: false,
}

CssVariables.propTypes = {
    colors: PropTypes.bool,
    elevations: PropTypes.bool,
    layers: PropTypes.bool,
    spacers: PropTypes.bool,
    theme: PropTypes.bool,
}

export { CssVariables }
