import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface OuTreeNodeLabelProps {
    onClick?: () => void
    clickable?: boolean
    /** Paints the result background. */
    result?: boolean
    dataTest?: string
    children: React.ReactNode
}

export const OuTreeNodeLabel = ({
    onClick,
    clickable,
    result,
    dataTest,
    children,
}: OuTreeNodeLabelProps) => (
    <span
        className={cx('label', { clickable, result })}
        data-test={dataTest}
        onClick={onClick}
    >
        {children}
        <style jsx>{`
            .label {
                font-size: 14px;
                line-height: 24px;
                padding: 0 5px;
                color: ${colors.grey900};
                user-select: none;
                border-radius: 3px;
                min-width: 0;
                overflow-wrap: anywhere;
            }
            .clickable {
                cursor: pointer;
            }
            .result {
                background: ${colors.yellow100};
            }
        `}</style>
    </span>
)
