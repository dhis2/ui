import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

const flipMargin = (margin: string): string => {
    const splitMargin = margin.split(/\s+/)
    if (splitMargin?.length === 4) {
        return [
            splitMargin[0],
            splitMargin[3],
            splitMargin[2],
            splitMargin[1],
        ].join(' ')
    }
    return margin
}

export interface DividerProps {
    className?: string
    dataTest?: string
    dense?: boolean
    margin?: string
}

const Divider = ({
    className,
    dataTest = 'dhis2-uicore-divider',
    dense,
    margin = `${spacers.dp8} 0`,
}: DividerProps) => {
    return (
        <div className={className} data-test={dataTest} role="separator">
            <style jsx>{`
                div {
                    display: inline-block;
                    width: 100%;
                    height: 1px;
                    background-color: ${colors.grey300};
                }
            `}</style>
            <style jsx>{`
                div {
                    margin: ${dense ? `${spacers.dp4} 0` : margin};
                }
                :dir(rtl) {
                    margin: ${dense ? `${spacers.dp4} 0` : flipMargin(margin)};
                }
            `}</style>
        </div>
    )
}

export { Divider }
