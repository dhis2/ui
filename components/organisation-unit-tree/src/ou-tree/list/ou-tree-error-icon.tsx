import { theme } from '@dhis2/ui-constants'
import { IconErrorFilled16 } from '@dhis2/ui-icons'
import { Tooltip } from '@dhis2-ui/tooltip'
import React from 'react'

export interface OuTreeErrorIconProps {
    message: string
    dataTest?: string
}

/**
 * The icon is the tooltip's reference and its tab stop, so the tooltip
 * sits over the icon wherever it is placed.
 */
export const OuTreeErrorIcon = ({
    message,
    dataTest,
}: OuTreeErrorIconProps) => (
    <Tooltip content={message}>
        {({ ref, ...tooltip }) => (
            <span
                {...tooltip}
                ref={ref as React.RefObject<HTMLSpanElement>}
                tabIndex={0}
                data-test={dataTest}
            >
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
        )}
    </Tooltip>
)
