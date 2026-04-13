import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface RightFooterProps {
    children?: React.ReactNode
    dataTest?: string
}

export const RightFooter = ({ children, dataTest }: RightFooterProps) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                flex-grow: 0;
                border-top: 1px solid ${colors.grey400};
                padding: 0 ${spacers.dp8};
            }
        `}</style>
    </div>
)
