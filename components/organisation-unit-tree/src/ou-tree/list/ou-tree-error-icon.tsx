import { theme } from '@dhis2/ui-constants'
import { IconErrorFilled16 } from '@dhis2/ui-icons'
import React from 'react'

export interface OuTreeErrorIconProps {
    dataTest?: string
}

/** The error icon in the toggle's place of a node whose children did not load. */
export const OuTreeErrorIcon = ({ dataTest }: OuTreeErrorIconProps) => (
    <span className="icon" data-test={dataTest} aria-hidden>
        <IconErrorFilled16 color={theme.error} />
        <style jsx>{`
            .icon {
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
        `}</style>
    </span>
)
