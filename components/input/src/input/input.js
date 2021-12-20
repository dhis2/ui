import { CircularLoader } from '@dhis2-ui/loader'
import { theme, colors, spacers, sharedPropTypes } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconWarningFilled24,
    IconCheckmark24,
} from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'

const StatusIcon = ({
    error,
    warning,
    valid,
    loading,
    className,
    defaultTo,
}) => {
    if (error) {
        return <IconErrorFilled24 color={theme.error} />
    }
    if (warning) {
        return <IconWarningFilled24 color={theme.warning} />
    }
    if (valid) {
        return <IconCheckmark24 color={theme.valid} />
    }
    if (loading) {
        return <CircularLoader small className={className} />
    }

    return defaultTo
}

StatusIcon.defaultProps = {
    defaultTo: null,
}

StatusIcon.propTypes = {
    className: PropTypes.string,
    defaultTo: PropTypes.element,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
}

const styles = css`
    .input {
        display: flex;
        align-items: center;
    }

    input {
        box-sizing: border-box;

        font-size: 14px;
        line-height: 16px;
        user-select: text;

        color: ${colors.grey900};
        background-color: white;

        padding: 12px 11px 10px;

        outline: 0;
        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        box-shadow: inset 0 1px 2px 0 rgba(48, 54, 60, 0.1);
        text-overflow: ellipsis;
    }

    input.dense {
        padding: 8px 11px 6px;
    }

    input:focus {
        outline: none;
        box-shadow: inset 0 0 0 2px ${theme.focus};
        border-color: ${theme.focus};
    }

    input.warning {
        border-color: ${theme.warning};
    }

    input.error {
        border-color: ${theme.error};
    }

    input.read-only {
        background-color: ${colors.grey050};
        border-color: ${colors.grey300};
        box-shadow: none;
        cursor: text;
    }

    input.disabled {
        background-color: ${colors.grey100};
        border-color: ${colors.grey500};
        color: ${theme.disabled};
        cursor: not-allowed;
    }

    .status-icon {
        flex-shrink: 0;
        flex-grow: 0;
        margin-left: ${spacers.dp8};
    }
`

export class Input extends Component {
    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(e), e)
        }
    }

    handleBlur = (e) => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(e), e)
        }
    }

    handleFocus = (e) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(e), e)
        }
    }

    createHandlerPayload(e) {
        return {
            value: e.target.value,
            name: this.props.name,
        }
    }

    render() {
        const {
            role,
            className,
            type,
            dense,
            disabled,
            readOnly,
            placeholder,
            name,
            valid,
            error,
            warning,
            loading,
            value,
            tabIndex,
            max,
            min,
            step,
            autoComplete,
            dataTest,
        } = this.props

        return (
            <div className={cx('input', className)} data-test={dataTest}>
                <input
                    role={role}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    ref={this.inputRef}
                    type={type}
                    value={value}
                    max={max}
                    min={min}
                    step={step}
                    disabled={disabled}
                    readOnly={readOnly}
                    tabIndex={tabIndex}
                    autoComplete={autoComplete}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    className={cx({
                        dense,
                        disabled,
                        error,
                        valid,
                        warning,
                        'read-only': readOnly,
                    })}
                />

                <div className="status-icon">
                    <StatusIcon
                        error={error}
                        valid={valid}
                        loading={loading}
                        warning={warning}
                    />
                </div>

                <style jsx>{styles}</style>
                <style jsx>{`
                    input {
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
}

Input.defaultProps = {
    type: 'text',
    dataTest: 'dhis2-uicore-input',
}

Input.propTypes = {
    /** The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete) */
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Makes the input smaller */
    dense: PropTypes.bool,
    /** Disables the input */
    disabled: PropTypes.bool,
    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props */
    error: sharedPropTypes.statusPropType,
    /** The input grabs initial focus on the page */
    initialFocus: PropTypes.bool,
    /** Adds a loading indicator beside the input */
    loading: PropTypes.bool,
    /** The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'` */
    max: PropTypes.string,
    /** The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'` */
    min: PropTypes.string,
    /** Name associated with the input. Passed to event handler callbacks in object */
    name: PropTypes.string,
    /** Placeholder text for the input */
    placeholder: PropTypes.string,
    /** Makes the input read-only */
    readOnly: PropTypes.bool,
    /** Sets a role attribute on the input */
    role: PropTypes.string,
    /** The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'` */
    step: PropTypes.string,
    tabIndex: PropTypes.string,
    /** The native input `type` attribute */
    type: PropTypes.oneOf([
        'text',
        'number',
        'password',
        'email',
        'url',
        'tel',
        'date',
        'datetime',
        'datetime-local',
        'month',
        'week',
        'time',
        'search',
    ]),
    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props */
    valid: sharedPropTypes.statusPropType,
    /** Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object */
    value: PropTypes.string,
    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature `({ name: string, value: string }, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `({ name: string, value: string }, event)` */
    onChange: PropTypes.func,
    /** Called with signature `({ name: string, value: string }, event)` */
    onFocus: PropTypes.func,
}
