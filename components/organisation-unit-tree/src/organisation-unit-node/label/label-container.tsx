import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface LabelContainerProps {
    children?: React.ReactNode
    highlighted?: boolean
}

export const LabelContainer = ({ highlighted, children }: LabelContainerProps) => (
    <div className={cx({ highlighted })}>
        <span>{children}</span>

        <style jsx>{`
            div {
                display: flex;
            }

            span {
                display: block;
            }

            .highlighted {
                background: ${colors.teal200};
                padding-inline-end: 4px;
            }
        `}</style>
    </div>
)
