import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

export const Leaves = ({ children, open, dataTest }) => (
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

Leaves.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
    open: propTypes.bool,
}
