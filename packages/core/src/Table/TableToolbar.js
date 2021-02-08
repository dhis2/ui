import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export const TableToolbar = ({ children, className, dataTest, position }) => (
    <div dataTest={dataTest} className={cx(className, position)}>
        {children}
        <style jsx>{`
            div {
                width: 100%;
                box-sizing: border-box;
                border: 1px solid ${colors.grey300};
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
