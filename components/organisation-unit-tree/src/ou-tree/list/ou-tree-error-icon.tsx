import { Tooltip } from '@dhis2-ui/tooltip'
import { theme } from '@dhis2/ui-constants'
import { IconErrorFilled16 } from '@dhis2/ui-icons'
import React from 'react'

export interface OuTreeErrorIconProps {
    message: string
    dataTest?: string
}

export const OuTreeErrorIcon = ({
    message,
    dataTest,
}: OuTreeErrorIconProps) => (
    <Tooltip content={message}>
        <span data-test={dataTest}>
            <IconErrorFilled16 color={theme.error} />
            <style jsx>{`
                span {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
            `}</style>
        </span>
    </Tooltip>
)
