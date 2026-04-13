import { colors, spacers, theme } from '@dhis2/ui-constants'
import React from 'react'

export interface ErrorMessageProps {
    children: React.ReactNode
    dataTest: string
}

export const ErrorMessage = ({ children, dataTest }: ErrorMessageProps) => (
    <span data-test={`${dataTest}-error`}>
        {children}

        <style jsx>{`
            span {
                font-size: 14px;
                color: ${colors.grey800};
                margin: ${spacers.dp4};
                color: ${theme.error};
            }
        `}</style>
    </span>
)
