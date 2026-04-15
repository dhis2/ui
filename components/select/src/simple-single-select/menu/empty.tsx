import { colors, spacers, theme } from '@dhis2/ui-constants'
import React from 'react'

export interface SimpleEmptyProps {
    children: string
}

const Empty = ({ children }: SimpleEmptyProps) => (
    <div>
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

export { Empty }
