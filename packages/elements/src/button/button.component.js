import cx from 'classnames'

import PropTypes from 'prop-types'

import styles from './button.styles.js'

/**
 * Buttons are used for triggering actions. There are different types
 * of buttons in the design system which are intended for different
 * types of actions.
 *
 * ```js
 * import { Button } from '@dhis2/ui'
 * ```
 */
export const Button = React.forwardRef(
    (
        {
            children,
            className,
            dataTest,
            primary,
            secondary,
            destructive,
            small,
            large,
            toggled,
            ...props
        },
        ref
    ) => (
        <button
            {...props}
            data-test={dataTest}
            className={cx(className, {
                primary,
                secondary,
                destructive,
                small,
                large,
                toggled,
            })}
            ref={ref}
        >
            {children}
            <style jsx>{styles}</style>
        </button>
    )
)

Button.defaultProps = {
    dataTest: 'dhis2-uielements-button',
}

Button.displayName = 'Button'

Button.propTypes = {
    /**
     * A string that will be applied as a `data-test` attribute on the button element
     * for identification during testing
     */
    dataTest: PropTypes.string,
    /** Component to render inside the button */
    children: PropTypes.node,
    /** A className that will be passed to the `<button>` element */
    className: PropTypes.string,
    /**
     * Indicates that the button makes potentially dangerous
     * deletions or data changes.
     * Mutually exclusive with `primary` and `secondary` props
     */
    destructive: PropTypes.bool,
    /** Makes the button large. Mutually exclusive with `small` */
    large: PropTypes.bool,
    /**
     * Applies 'primary' button appearance.
     * Mutually exclusive with `destructive` and `secondary` props
     */
    primary: PropTypes.bool,
    /**
     * Applies 'secondary' button appearance.
     * Mutually exclusive with `primary` and `destructive` props
     */
    secondary: PropTypes.bool,
    /** Makes the button small. Mutually exclusive with `large` prop */
    small: PropTypes.bool,
    /** Changes appearance of button to an on/off state */
    toggled: PropTypes.bool,
}
