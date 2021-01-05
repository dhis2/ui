import propTypes from '@dhis2/prop-types'
import { layers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

const createClickHandler = onClick => event => {
    // don't respond to clicks that originated in the children
    if (onClick && event.target === event.currentTarget) {
        onClick({}, event)
    }
}

/**
 * @module
 * @param {ComponentCover.PropTypes} props
 * @returns {React.Component}
 * @example import { ComponentCover } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/component-widget-componentcover--default|Storybook}
 */
const ComponentCover = ({
    children,
    className,
    dataTest,
    onClick,
    translucent,
}) => (
    <div
        className={cx(className, { translucent })}
        onClick={createClickHandler(onClick)}
        data-test={dataTest}
    >
        {children}
        <style jsx>{`
            div {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: ${layers.applicationTop};
            }
            div.translucent {
                background: rgba(33, 43, 54, 0.4);
            }
        `}</style>
    </div>
)

ComponentCover.defaultProps = {
    dataTest: 'dhis2-uicore-componentcover',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest=dhis2-uicore-componentcover]
 * @prop {boolean} [translucent] - When true a semi-transparent background is added
 * @prop {function} [onClick]
 */
ComponentCover.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    translucent: propTypes.bool,
    onClick: propTypes.func,
}

export { ComponentCover }
