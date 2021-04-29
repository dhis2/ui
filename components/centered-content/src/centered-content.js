import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {CenteredContent.PropTypes} props
 * @returns {React.Component}
 * @example import { CenteredContent } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/component-widget-centeredcontent--default|Storybook}
 */
const CenteredContent = forwardRef(
    ({ className, dataTest, children, position }, ref) => (
        <div
            className={cx('centered-content', className, position)}
            data-test={dataTest}
            ref={ref}
        >
            <div className="centered-inner-content">{children}</div>

            <style jsx>{`
                .centered-content {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                    pointer-events: none;
                    align-items: center;
                }
                .centered-content.top {
                    align-items: flex-start;
                }
                .centered-content.bottom {
                    align-items: flex-end;
                }
                .centered-inner-content {
                    pointer-events: all;
                }
            `}</style>
        </div>
    )
)

CenteredContent.displayName = 'CenteredContent'

CenteredContent.defaultProps = {
    dataTest: 'dhis2-uicore-centeredcontent',
    position: 'middle',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest=dhis2-uicore-centeredcontent]
 * @prop {string} [position=middle] One of `top`, `middle`, `bottom`
 */
CenteredContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Vertical alignment */
    position: PropTypes.oneOf(['top', 'middle', 'bottom']),
}

export { CenteredContent }
