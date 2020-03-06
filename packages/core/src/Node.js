import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { Toggle } from './Node/Toggle.js'
import { Spacer } from './Node/Spacer.js'
import { Leaves } from './Node/Leaves.js'

/**
 * @module
 *
 * @param {Node.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Node } from '@dhis2/ui-core'
 *
 * @see Live demo: {@link /demo/?path=/story/node--multiple-roots|Storybook}
 */
export const Node = ({
    open,
    className,
    component: label,
    children,
    icon,
    onOpen,
    onClose,
    dataTest,
}) => {
    const hasLeaves = !!React.Children.toArray(children).filter(i => i).length
    const showArrow = !icon && hasLeaves
    const showSpacer = !icon && !hasLeaves

    return (
        <div className={cx('node', className)} data-test={dataTest}>
            {icon && <div data-test={`${dataTest}-icon`}>{icon}</div>}

            {showArrow && (
                <Toggle
                    open={open}
                    onOpen={onOpen}
                    onClose={onClose}
                    dataTest={`${dataTest}-toggle`}
                />
            )}

            {showSpacer && <Spacer />}

            <div data-test={`${dataTest}-content`}>
                <div data-test={`${dataTest}-label`}>{label}</div>

                <Leaves open={open} dataTest={`${dataTest}-leaves`}>
                    {children}
                </Leaves>
            </div>

            <style jsx>{`
                .node {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

Node.defaultProps = {
    dataTest: 'dhis2-uicore-node',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Element} [component]
 * @prop {className} [string]
 * @prop {Node} [children]
 * @prop {Node} [icon]
 * @prop {boolean} [open]
 * @prop {function} [onOpen]
 * @prop {funtion} [onClose]
 * @prop {string} [dataTest]
 */
Node.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    component: propTypes.element,
    dataTest: propTypes.string,
    icon: propTypes.node,
    open: propTypes.bool,
    onClose: propTypes.func,
    onOpen: propTypes.func,
}
