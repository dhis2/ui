import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Leaves } from './leaves.js'
import { Spacer } from './spacer.js'
import { Toggle } from './toggle.js'

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

Node.propTypes = {
    /** Content below this level of the hierarchy; children are revealed when this leaf is 'open' */
    children: PropTypes.node,
    className: PropTypes.string,
    /** Content/label for this leaf, for example a checkbox */
    component: PropTypes.element,
    dataTest: PropTypes.string,
    /** A custom icon to use instead of a toggle arrow */
    icon: PropTypes.node,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
}
