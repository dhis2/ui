import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import React from 'react'
import { Portal } from '../portal/Portal.js'

const createClickHandler = onClick => event => {
    // don't respond to clicks that originated in the children
    if (onClick && event.target === event.currentTarget) {
        onClick({}, event)
    }
}

/**
 * @module
 * @param {Layer.PropTypes} props
 * @returns {React.Component}
 * @example import {     } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/component-widget-layer--default|Storybook}
 */
const Layer = ({
    children,
    className,
    disablePortal,
    dataTest,
    onClick,
    position,
    translucent,
    zIndex,
}) => {
    return (
        <Portal disable={disablePortal}>
            <div
                className={cx('layer', className, position, {
                    translucent,
                })}
                data-test={dataTest}
                onClick={createClickHandler(onClick)}
            >
                {children}

                <style jsx>{`
                    div {
                        z-index: ${zIndex};
                    }
                `}</style>

                <style jsx>{`
                    div {
                        top: 0;
                        left: 0;
                        min-height: 100vh;
                        min-width: 100vw;
                    }
                    div.fixed {
                        position: fixed;
                        height: 100vh;
                        width: 100vw;
                    }
                    div.absolute {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                    }
                    div.translucent {
                        background-color: rgba(33, 43, 54, 0.4);
                    }
                `}</style>
            </div>
        </Portal>
    )
}

Layer.defaultProps = {
    position: 'fixed',
    dataTest: 'dhis2-uicore-layer',
    zIndex: 'auto',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {boolean} [disablePortal] - Disable the Portal, useful for
 * nesting layers
 * @prop {string} [dataTest=dhis2-uicore-layer]
 * @prop {boolean} [translucent] - When true a semi-transparent background is added
 * @prop {function} [onClick]
 */
Layer.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    disablePortal: propTypes.bool,
    position: propTypes.oneOf(['absolute', 'fixed']),
    translucent: propTypes.bool,
    zIndex: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onClick: propTypes.func,
}

export { Layer }
