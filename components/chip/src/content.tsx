import { spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface ContentProps {
    children?: React.ReactNode
    overflow?: boolean
}

export const Content = ({ children, overflow }: ContentProps) => (
    <span className={cx({ overflow })}>
        {children}

        <style jsx>{`
            span {
                margin: 0 ${spacers.dp12};
                color: inherit;
                white-space: nowrap;
            }

            .overflow {
                max-width: 150px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `}</style>
    </span>
)
