import React from 'react'
import cx from 'classnames'

import propTypes from '@dhis2/prop-types'

import styles from './ButtonBase.styles.js'

/**
 * @module
 * @param {ButtonBase.PropTypes} props
 * @returns {React.Component}
 */
function ButtonBase(
    {
        children,
        className,
        primary,
        secondary,
        destructive,
        small,
        large,
        disabled,
        ...props
    },
    ref
) {
    return (
        <button
            {...props}
            className={cx(className, {
                primary,
                secondary,
                destructive,
                small,
                large,
            })}
            disabled={disabled}
            ref={ref}
        >
            {children}
            <style jsx>{styles}</style>
        </button>
    )
}

export default React.forwardRef(ButtonBase)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {boolean} [small]
 * @prop {boolean} [large]
 * @prop {boolean } [primary]
 * @prop {boolean } [secondary]
 * @prop {boolean } [destructive]
 * @prop {boolean} [disabled]
 */
ButtonBase.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    destructive: propTypes.bool,
    disabled: propTypes.bool,
    large: propTypes.bool,
    primary: propTypes.bool,
    secondary: propTypes.bool,
    small: propTypes.bool,
}
