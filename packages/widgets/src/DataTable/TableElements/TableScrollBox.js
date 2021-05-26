import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

export const TableScrollBox = forwardRef(
    ({ children, className, dataTest, maxHeight, maxWidth, ...props }, ref) => (
        <div {...props} className={className} data-test={dataTest} ref={ref}>
            {children}
            <style jsx>{`
                div {
                    border: 1px solid ${colors.grey300};
                    border-top: none;
                    box-sizing: border-box;
                    max-height: ${maxHeight};
                    max-width: ${maxWidth};
                    overflow: auto;
                }
            `}</style>
        </div>
    )
)

TableScrollBox.displayName = 'TableScrollBox'

TableScrollBox.defaultProps = {
    dataTest: 'dhis2-uicore-tablescrollbox',
    maxHeight: 'auto',
    maxWidth: 'auto',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {React.ref|function} [ref]
 * @prop {(asc|desc|default)} [sortDirection]
 * @prop {function} [onClick]
 *
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-tablescrollbox]
 * @prop {string} [maxHeight=auto]
 * @prop {string} [maxWidth=auto]
 */
TableScrollBox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
}
