import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface PrefixProps {
    dataTest: string
    className?: string
    prefix?: string
}

export function Prefix({ prefix, className, dataTest }: PrefixProps) {
    return (
        <div className={className} data-test={dataTest}>
            {prefix}

            <style jsx>{`
                div {
                    color: ${colors.grey600};
                    padding-inline-end: ${spacers.dp12};
                    font-size: 14px;
                    user-select: none;
                }
            `}</style>
        </div>
    )
}
