import { colors, theme, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import { RadioRegular, RadioDense } from './radio-icons.js'

class Radio extends Component {
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
            checked = false,
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
        } = this.props

        const classes = cx({
            checked,
            disabled,
            valid,
            error,
            warning,
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
                    type="radio"
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
                    {dense ? (
                        <RadioDense className={classes} />
                    ) : (
                        <RadioRegular className={classes} />
                    )}
                </div>

                {label}

                <style jsx>{`
                    label {
                        display: flex;
                        position: relative;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
                        color: ${colors.grey900};
                        font-size: 16px;
                        line-height: 20px;
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
                        width: 18px;

                        /* The same offset as the icon, 2px border, 1px padding */
                        left: 3px;
                    }

                    label.dense input {
                        /* The same size as the dense icon */
                        height: 14px;
                        width: 14px;
                    }

                    .icon {
                        user-select: none;
                        margin-right: ${label ? '5px' : 0};
                        border: 2px solid transparent;
                        padding: 1px;
                        border-radius: 50%;
                    }

                    label.dense .icon {
                        margin-right: 3px;
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

Radio.defaultProps = {
    dataTest: 'dhis2-uicore-radio',
}

Radio.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    /** Adds 'error' styling for feedback. Mutually exclusive with `valid` and `warning` props */
    error: sharedPropTypes.statusPropType,
    initialFocus: PropTypes.bool,
    label: PropTypes.node,
    /** Name associated with this element. Passed in object to event handler functions  */
    name: PropTypes.string,
    tabIndex: PropTypes.string,
    /** Adds 'valid' styling for feedback. Mutually exclusive with `error` and `warning` props */
    valid: sharedPropTypes.statusPropType,
    /** Value associated with this element. Passed in object to event handler functions */
    value: PropTypes.string,
    /** Adds 'warning' styling for feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    /** Called with the signature `({ name: string, value: string, checked: bool }, event)` */
    onBlur: PropTypes.func,
    /** Called with the signature `({ name: string, value: string, checked: bool }, event)` */
    onChange: PropTypes.func,
    /** Called with the signature `({ name: string, value: string, checked: bool }, event)` */
    onFocus: PropTypes.func,
    /** Called with the signature `({ name: string, value: string, checked: bool }, event)` */
    onKeyDown: PropTypes.func,
}

export { Radio }
