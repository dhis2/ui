import cx from 'classnames'
import React from 'react'

export interface LeavesProps {
    children?: React.ReactNode
    dataTest?: string
    open?: boolean
}

export const Leaves = ({ children, open, dataTest }: LeavesProps) => (
    <div className={cx({ open })} data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                height: 0;
                overflow: hidden;
                flex-grow: 1;
            }

            .open {
                height: auto;
            }
        `}</style>
    </div>
)
