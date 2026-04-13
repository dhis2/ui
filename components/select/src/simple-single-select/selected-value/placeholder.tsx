import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface PlaceholderProps {
    dataTest: string
    className?: string
    placeholder?: string
}

export function Placeholder({
    placeholder,
    className,
    dataTest,
}: PlaceholderProps) {
    return (
        <div className={className} data-test={dataTest}>
            {placeholder}

            <style jsx>{`
                div {
                    color: ${colors.grey600};
                    user-select: none;
                }
            `}</style>
        </div>
    )
}
