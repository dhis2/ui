import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * @param {Object} props
 * @param {bool} props.highlighted
 * @param {React.Component|React.Component[]} props.children
 * @returns {React.Component}
 */
export const LabelContainer = ({ highlighted, children }) => (
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
                padding-right: 4px;
            }
        `}</style>
    </div>
)

LabelContainer.propTypes = {
    children: PropTypes.node,
    highlighted: PropTypes.bool,
}
