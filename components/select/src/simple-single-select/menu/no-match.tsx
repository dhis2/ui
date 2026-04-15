import { colors, spacers, theme } from '@dhis2/ui-constants'
import React from 'react'

export interface SimpleNoMatchProps {
    children: string
    className?: string
}

const NoMatch = ({ children, className }: SimpleNoMatchProps) => (
    <div className={className}>
        {children}

        <style jsx>{`
            div {
                color: ${colors.grey700};
                font-family: ${theme.fonts};
                font-size: 13px;
                line-height: 16px;
                padding-block: ${spacers.dp8};
                padding-inline: ${spacers.dp24};
                text-align: center;
            }
        `}</style>
    </div>
)

export { NoMatch }
