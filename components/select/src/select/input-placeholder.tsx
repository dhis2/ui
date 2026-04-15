import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface InputPlaceholderProps {
    dataTest: string
    className?: string
    placeholder?: string
}

const InputPlaceholder = ({
    placeholder,
    className,
    dataTest,
}: InputPlaceholderProps) => {
    if (!placeholder) {
        return null
    }

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

export { InputPlaceholder }
