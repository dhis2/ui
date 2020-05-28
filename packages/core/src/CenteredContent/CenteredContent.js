import cx from 'classnames'
import React, { forwardRef } from 'react'
import propTypes from '@dhis2/prop-types'
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
        <div className={cx(className, position)} data-test={dataTest} ref={ref}>
            {children}
            <style jsx>{`
                div {
                    position: absolute;
                    left: 50%;
                }
                div.middle {
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                div.top {
                    top: 0;
                    transform: translate(-50%, 0);
                }
                div.bottom {
                    bottom: 0;
                    transform: translate(-50%, 0);
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
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    position: propTypes.oneOf(['top', 'middle', 'bottom']),
}

export { CenteredContent }
