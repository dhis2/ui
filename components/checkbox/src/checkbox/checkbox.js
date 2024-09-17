import { mutuallyExclusive } from '@dhis2/prop-types'
import { colors, spacers, theme, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import { CheckboxRegular, CheckboxDense } from './checkbox-icon.js'

class Checkbox extends Component {
    ref = createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.ref.current.focus()
        }

        this.setIndeterminate(this.props.indeterminate)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.indeterminate !== this.props.indeterminate) {
            this.setIndeterminate(this.props.indeterminate)
        }
    }

    setIndeterminate(indeterminate) {
        this.ref.current.indeterminate = indeterminate
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
            checked,
            indeterminate,
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
            indeterminate,
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
                    type="checkbox"
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
                        <CheckboxDense className={classes} />
                    ) : (
                        <CheckboxRegular className={classes} />
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
                        cursor: pointer;
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
                        width: 18px;
                        /* The same offset as the icon, 2px border, 1px padding */
                        inset-inline-start: 3px;
                    }

                    label.dense input {
                        /* The same size as the dense icon */
                        height: 14px;
                        width: 14px;
                    }

                    .icon {
                        user-select: none;
                        margin-inline-end: ${spacers.dp4};
                        border: 2px solid transparent;
                        padding: 1px;
                        border-radius: 5px;
                    }

                    label.dense .icon {
                        margin-inline-end: 3px;
                        border-radius: 4px;
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

Checkbox.defaultProps = {
    checked: false,
    indeterminate: false,
    dataTest: 'dhis2-uicore-checkbox',
}

const uniqueOnStatePropType = mutuallyExclusive(
    ['checked', 'indeterminate'],
    PropTypes.bool
)

Checkbox.propTypes = {
    checked: uniqueOnStatePropType,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    error: sharedPropTypes.statusPropType,
    indeterminate: uniqueOnStatePropType,
    initialFocus: PropTypes.bool,
    label: PropTypes.node,
    name: PropTypes.string,
    tabIndex: PropTypes.string,
    valid: sharedPropTypes.statusPropType,
    value: PropTypes.string,
    warning: sharedPropTypes.statusPropType,
    onBlur: PropTypes.func,
    /** Called with signature `(object, event)` */
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
}

export { Checkbox }
