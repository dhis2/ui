import { colors, spacers, theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { Component, createRef } from 'react'
import { CheckboxRegular, CheckboxDense } from './checkbox-icon.tsx'

interface CheckboxHandlerPayload {
    value?: string
    name?: string
    checked: boolean
}

export interface CheckboxProps {
    checked?: boolean
    indeterminate?: boolean
    className?: string
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    error?: boolean
    initialFocus?: boolean
    label?: React.ReactNode
    name?: string
    tabIndex?: string
    valid?: boolean
    value?: string
    warning?: boolean
    onBlur?: (
        payload: CheckboxHandlerPayload,
        event: React.FocusEvent<HTMLInputElement>
    ) => void
    onChange?: (
        payload: CheckboxHandlerPayload,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void
    onFocus?: (
        payload: CheckboxHandlerPayload,
        event: React.FocusEvent<HTMLInputElement>
    ) => void
    onKeyDown?: (
        payload: CheckboxHandlerPayload,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => void
}

interface CheckboxState {}

class Checkbox extends Component<CheckboxProps, CheckboxState> {
    ref = createRef<HTMLInputElement>()

    static defaultProps = {
        checked: false,
        indeterminate: false,
        dataTest: 'dhis2-uicore-checkbox',
    }

    componentDidMount() {
        if (this.props.initialFocus) {
            this.ref.current?.focus()
        }

        this.setIndeterminate(this.props.indeterminate)
    }

    componentDidUpdate(prevProps: CheckboxProps) {
        if (prevProps.indeterminate !== this.props.indeterminate) {
            this.setIndeterminate(this.props.indeterminate)
        }
    }

    setIndeterminate(indeterminate?: boolean) {
        if (this.ref.current) {
            this.ref.current.indeterminate = !!indeterminate
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(), e)
        }
    }

    handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(), e)
        }
    }

    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(), e)
        }
    }

    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.createHandlerPayload(), e)
        }
    }

    createHandlerPayload(): CheckboxHandlerPayload {
        return {
            value: this.props.value,
            name: this.props.name,
            checked: !this.props.checked,
        }
    }

    render() {
        const {
            checked = false,
            indeterminate = false,
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
            dataTest = 'dhis2-uicore-checkbox',
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
                    tabIndex={
                        tabIndex !== undefined ? Number(tabIndex) : undefined
                    }
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

export { Checkbox }
