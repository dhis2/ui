import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

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
    children: PropTypes.node,
    dataTest: PropTypes.string,
    open: PropTypes.bool,
}
