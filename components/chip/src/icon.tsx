import { spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface IconProps {
    dataTest: string
    /** the slot for an icon is 24x24px, bigger elements will be clipped */
    icon?: React.ReactElement
}

export const Icon = ({ icon, dataTest }: IconProps) => {
    if (!icon) {
        return null
    }

    return (
        <span data-test={dataTest}>
            {icon}

            <style jsx>{`
                span {
                    width: 24px;
                    height: 24px;
                    margin-inline-start: ${spacers.dp4};
                    margin-inline-end: -6px;
                    border-radius: 50%;
                    overflow: hidden;
                }

                span > :global(*) {
                    max-height: 24px;
                    max-width: 24px;
                }
            `}</style>
        </span>
    )
}
