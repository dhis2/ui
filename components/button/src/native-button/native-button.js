import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styles from './native-button.styles.js'

export const NativeButton = forwardRef(function NativeButton(props, ref) {
    const { children, className, ...rest } = props

    return (
        <button className={className} ref={ref} {...rest}>
            {children}
            <style jsx>{styles}</style>
        </button>
    )
})

NativeButton.propTypes = {
    /** Component to render inside the button */
    children: PropTypes.node,
    className: PropTypes.string,
}
