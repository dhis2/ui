import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { forwardRef } from 'react'

export const TableToolbar = forwardRef(
    ({ children, className, dataTest, position }, ref) => (
        <div data-test={dataTest} className={cx(className, position)} ref={ref}>
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
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    position: propTypes.oneOf(['top', 'bottom']),
}
