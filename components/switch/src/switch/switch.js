import { colors, theme, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import { SwitchRegular } from './switch-icons.js'

class Switch extends Component {
    ref = createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.ref.current.focus()
        }
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(), e)
        }
    }

    handleBlur = (e) => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(), e)
        }
    }

    handleFocus = (e) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(), e)
        }
    }

    handleKeyDown = (e) => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.createHandlerPayload(), e)
        }
    }

    createHandlerPayload() {
        return {
            value: this.props.value,
            name: this.props.name,
            checked: !this.props.checked,
        }
    }

    render() {
        const {
            'aria-label': ariaLabel,
            checked,
            className,
            disabled,
            error,
            label,
            name,
            tabIndex,
            valid,
            value,
            warning,
            dense,
            dataTest,
            role,
        } = this.props

        const classes = cx({
            checked,
            disabled,
            valid,
            error,
            warning,
            dense,
        })

        return (
            <label
                className={cx(className, {
                    disabled,
                    dense,
                })}
                data-test={dataTest}
            >
                <input
                    aria-label={ariaLabel}
                    type="checkbox"
                    role={role}
                    ref={this.ref}
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleBlur}
                />

                <div className={cx('icon', { dense })}>
                    <SwitchRegular className={classes} />
                </div>

                {label}

                <style jsx>{`
                    label {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
                        color: ${colors.grey900};
                        font-size: 14px;
                        line-height: 19px;
                    }

                    label.dense {
                        font-size: 14px;
                        line-height: 16px;
                    }

                    label.disabled {
                        cursor: not-allowed;
                        color: ${theme.disabled};
                    }

                    input {
                        opacity: 0;
                        position: absolute;

                        /* The same size as the icon */
                        height: 18px;
                        width: 35px;

                        /* The same offset as the icon, 2px border, 1px padding */
                        margin-left: 3px;
                    }

                    label.dense input {
                        /* The same size as the dense icon */
                        height: 14px;
                        width: 27px;
                    }

                    .icon {
                        user-select: none;
                        margin-right: 5px;
                        border: 2px solid transparent;
                        padding: 1px;
                        border-radius: 14px;
                    }

                    label.dense .icon {
                        margin-right: 3px;
                        border-radius: 12px;
                    }

                    input:focus + .icon {
                        outline: 3px solid ${theme.focus};
                        outline-offset: -3px;
                    }
                `}</style>
            </label>
        )
    }
}

Switch.defaultProps = {
    checked: false,
    dataTest: 'dhis2-uicore-switch',
    role: 'switch',
}

Switch.propTypes = {
    /** Sets an aria-label attribute on the input */
    'aria-label': PropTypes.string,
    checked: PropTypes.bool,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Makes the switch smaller for information-dense layouts */
    dense: PropTypes.bool,
    /** Disables the switch */
    disabled: PropTypes.bool,
    /** Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` prop types */
    error: sharedPropTypes.statusPropType,
    /** Grab initial focus on the page */
    initialFocus: PropTypes.bool,
    /** Label for the switch. Can be a string or an element, for example an image */
    label: PropTypes.node,
    /** Name associated with the switch. Passed to event handlers in object */
    name: PropTypes.string,
    /** Sets a role attribute on the input */
    role: PropTypes.string,
    tabIndex: PropTypes.string,
    /** Applies 'valid' styles for validation feedback. Mutually exclusive with `error` and `warning` prop types */
    valid: sharedPropTypes.statusPropType,
    /** Value associated with the switch. Passed to event handlers in object */
    value: PropTypes.string,
    /** Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` prop types */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onChange: PropTypes.func,
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onFocus: PropTypes.func,
    /** Called with signature `({ name: string, value: string, checked: bool }, event)` */
    onKeyDown: PropTypes.func,
}

export { Switch }
