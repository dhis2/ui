import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

export const Center = forwardRef(
    ({ className, dataTest, children, position }, ref) => (
        <div
            className={cx('center', className, position)}
            data-test={dataTest}
            ref={ref}
        >
            <div className="center-inner-content">{children}</div>

            <style jsx>{`
                .center {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                    pointer-events: none;
                    align-items: center;
                }
                .center.top {
                    align-items: flex-start;
                }
                .center.bottom {
                    align-items: flex-end;
                }
                .center-inner-content {
                    pointer-events: all;
                }
            `}</style>
        </div>
    )
)

Center.displayName = 'Center'

Center.defaultProps = {
    dataTest: 'dhis2-uicore-centeredcontent',
    position: 'middle',
}

Center.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Vertical alignment */
    position: PropTypes.oneOf(['top', 'middle', 'bottom']),
}
