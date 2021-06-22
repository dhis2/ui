import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

export const TableToolbar = forwardRef(
    ({ children, className, dataTest, position, ...props }, ref) => (
        <div
            {...props}
            data-test={dataTest}
            className={cx(className, position)}
            ref={ref}
        >
            {children}
            <style jsx>{`
                div {
                    width: 100%;
                    box-sizing: border-box;
                    display: flex;
                    border: 1px solid ${colors.grey300};
                    padding: ${spacers.dp12};
                }
                div.top {
                    border-bottom: none;
                }
                div.bottom {
                    border-top: none;
                }
            `}</style>
        </div>
    )
)

TableToolbar.displayName = 'TableToolbar'

TableToolbar.defaultProps = {
    dataTest: 'dhis2-uicore-tabletoolbar',
    position: 'top',
}

TableToolbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    position: PropTypes.oneOf(['top', 'bottom']),
}
