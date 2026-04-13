import { spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface RequiredProps {
    dataTest: string
}

export const Required = ({ dataTest }: RequiredProps) => (
    <span data-test={dataTest}>
        *
        <style jsx>{`
            span {
                padding-inline-start: ${spacers.dp4};
            }
        `}</style>
    </span>
)
