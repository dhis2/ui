import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

export const Spacer = ({ children, dense }) => (
    <div className={cx({ dense })}>
        {children}

        <style jsx>{`
            div,
            div.dense:first-of-type {
                padding-top: 4px;
            }

            div.dense {
                padding-top: 2px;
            }
        `}</style>
    </div>
)

Spacer.propTypes = {
    children: propTypes.node.isRequired,
    dense: propTypes.bool,
}
