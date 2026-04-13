import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface InputPrefixProps {
    dataTest: string
    className?: string
    prefix?: string
}

const InputPrefix = ({ prefix, className, dataTest }: InputPrefixProps) => {
    if (!prefix) {
        return null
    }

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

export { InputPrefix }
