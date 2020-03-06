import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { Layer } from './LayerContext.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @private
 * @param {Object} PropTypes
 * @returns {React.Component}
 */
const Backdrop = ({
    onClick,
    transparent,
    children,
    zIndex,
    className,
    dataTest,
}) => {
    return (
        <Layer zIndex={zIndex}>
            {zIndexComputed => (
                <div
                    className={cx('backdrop', className)}
                    onClick={event => onClick && onClick({}, event)}
                    data-test={dataTest}
                >
                    <div
                        onClick={e => {
                            // stop events from bubbling up through the
                            // children to the backdrop click handler
                            e.stopPropagation()
                        }}
                    >
                        {children}
                    </div>

                    <style jsx>{`
                        .backdrop {
                            position: fixed;
                            height: 100%;
                            width: 100%;
                            left: 0;
                            top: 0;
                        }
                    `}</style>

                    <style jsx>{`
                        .backdrop {
                            background: ${transparent
                                ? 'transparent'
                                : 'rgba(33, 43, 54, 0.4)'};

                            z-index: ${zIndexComputed};
                        }
                    `}</style>
                </div>
            )}
        </Layer>
    )
}

Backdrop.defaultProps = {
    dataTest: 'dhis2-uicore-backdrop',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} onClick
 * @prop {boolean} transparent
 * @prop {Node} children
 * @prop {number} zIndex
 * @prop {string} className
 * @prop {string} [dataTest]
 */
Backdrop.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    transparent: propTypes.bool,
    zIndex: propTypes.number,
    onClick: propTypes.func,
}

export { Backdrop }
