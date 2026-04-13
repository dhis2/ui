import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface LeftHeaderProps {
    children?: React.ReactNode
    dataTest?: string
}

export const LeftHeader = ({ children, dataTest }: LeftHeaderProps) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                border-bottom: 1px solid ${colors.grey400};
                flex-grow: 0;
                padding: 0 ${spacers.dp8};
            }
        `}</style>
    </div>
)
