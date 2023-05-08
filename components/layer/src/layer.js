import { Portal } from '@dhis2-ui/portal'
import { deprecated } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const Layer = ({
    children,
    className,
    dataTest,
    disablePortal,
    level,
    onBackdropClick,
    onClick,
    position,
    translucent,
}) => {
    const resolvedOnClick = onBackdropClick || onClick

    return (
        <Portal disable={disablePortal}>
            <div
                className={cx('layer', className, position, {
                    translucent,
                })}
                data-test={dataTest}
            >
                {resolvedOnClick && (
                    <div
                        className="backdrop"
                        onClick={(event) => resolvedOnClick({}, event)}
                    />
                )}
                {children}

                <style jsx>{`
                    div {
                        z-index: ${level};
                    }
                `}</style>

                <style jsx>{`
                    div {
                        block-start: 0;
                        inline-start: 0;
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
                    div.backdrop {
                        position: absolute;
                        inset: 0;
                        z-index: -1;
                    }
                `}</style>
            </div>
        </Portal>
    )
}

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
    /** Backdrop click handler */
    onBackdropClick: PropTypes.func,
    /** Click handler - DEPRECATED */
    onClick: deprecated(PropTypes.func, 'Please use "onBackdropClick" instead'),
}

export { Layer }
