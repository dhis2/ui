import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface DestructiveSelectOptionProps {
    label: string
    onClick: () => void
}

export const DestructiveSelectOption = ({
    label,
    onClick,
}: DestructiveSelectOptionProps) => {
    return (
        <div onClick={onClick}>
            {label}
            <style jsx>{`
                div {
                    cursor: pointer;
                    font-size: 14px;
                    text-decoration: none;
                    color: ${colors.red700};
                    padding: ${spacers.dp8} ${spacers.dp12};
                }

                div:hover {
                    background-color: ${colors.red050};
                }
            `}</style>
        </div>
    )
}
