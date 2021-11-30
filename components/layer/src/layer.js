import { Portal } from '@dhis2-ui/portal'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const createClickHandler = (onClick) => (event) => {
    // don't respond to clicks that originated in the children
    if (onClick && event.target === event.currentTarget) {
        onClick({}, event)
    }
}

const Layer = ({
    children,
    className,
    dataTest,
    disablePortal,
    level,
    onClick,
    position,
    translucent,
}) => (
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
                    z-index: ${level};
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

Layer.defaultProps = {
    position: 'fixed',
    dataTest: 'dhis2-uicore-layer',
    level: 'auto',
}

Layer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Disable the Portal, useful for nesting layers */
    disablePortal: PropTypes.bool,
    /** Z-index level */
    level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    position: PropTypes.oneOf(['absolute', 'fixed']),
    /** Adds a semi-transparent background */
    translucent: PropTypes.bool,
    /** Click handler */
    onClick: PropTypes.func,
}

export { Layer }