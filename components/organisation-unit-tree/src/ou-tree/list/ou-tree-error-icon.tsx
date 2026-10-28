import { theme } from '@dhis2/ui-constants'
import { IconErrorFilled16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import React from 'react'

export interface OuTreeErrorIconProps {
    /** Given, the icon is clickable, like the toggle whose place it takes. */
    onClick?: () => void
    dataTest?: string
}

/** The error icon in the toggle's place of a node whose children did not load. */
export const OuTreeErrorIcon = ({
    onClick,
    dataTest,
}: OuTreeErrorIconProps) => (
    <span
        className={cx('icon', { clickable: onClick })}
        data-test={dataTest}
        aria-hidden
        onClick={onClick}
    >
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
            .clickable {
                cursor: pointer;
            }
        `}</style>
    </span>
)
