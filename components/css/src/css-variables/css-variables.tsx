import * as themeModule from '@dhis2/ui-constants'
import React from 'react'

export interface CssVariablesProps {
    colors?: boolean
    theme?: boolean
    layers?: boolean
    spacers?: boolean
    elevations?: boolean
}

const toPrefixedThemeSection = (themeSectionKey: string): Record<string, string> =>
    Object.entries(
        (themeModule as unknown as Record<string, Record<string, string>>)[themeSectionKey]
    ).reduce<Record<string, string>>((prefixed, [key, value]) => {
        prefixed[`${themeSectionKey}-${key}`] = value

        return prefixed
    }, {})

const toCustomPropertyString = (themeSection: Record<string, string>): string =>
    Object.entries(themeSection)
        .map(([key, value]) => `--${key}: ${value};`)
        .join('\n')

const CssVariables = ({
    colors = false,
    theme = false,
    layers = false,
    spacers = false,
    elevations = false,
}: CssVariablesProps): React.ReactElement => {
    const allowedProps: Record<string, boolean> = { colors, theme, layers, spacers, elevations }
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

export { CssVariables }
