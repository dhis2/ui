import { layers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {AlertStack.PropTypes} props
 * @returns {React.Component}
 * @example import { AlertStack } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/alertstack--default|Storybook}
 */
export const AlertStack = ({ className, children, dataTest }) => (
    <>
        {createPortal(
            <div className={cx(className)} data-test={dataTest}>
                {children}
                <style jsx>{`
                    div {
                        position: fixed;
                        top: auto;
                        right: auto;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);

                        z-index: ${layers.alert};

                        display: flex;
                        flex-direction: column-reverse;

                        pointer-events: none;
                    }
                `}</style>
            </div>,
            document.body
        )}
    </>
)

AlertStack.defaultProps = {
    dataTest: 'dhis2-uicore-alertstack',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Array.<AlertBar>} [children]
 * @prop {string} [dataTest]
 */
AlertStack.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
