import { colors, spacers, theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { Component, createRef } from 'react'
import { RadioRegular, RadioDense } from './radio-icons.tsx'

interface RadioHandlerPayload {
    value?: string
    name?: string
    checked: boolean
}

type RadioEventHandler<E> = (payload: RadioHandlerPayload, event: E) => void

export interface RadioProps {
    checked?: boolean
    className?: string
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    /** Adds 'error' styling for feedback. Mutually exclusive with `valid` and `warning` props */
    error?: boolean
    initialFocus?: boolean
    label?: React.ReactNode
    /** Name associated with this element. Passed in object to event handler functions */
    name?: string
    tabIndex?: string
    /** Adds 'valid' styling for feedback. Mutually exclusive with `error` and `warning` props */
    valid?: boolean
    /** Value associated with this element. Passed in object to event handler functions */
    value?: string
    /** Adds 'warning' styling for feedback. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
    /** Called with the signature `({ name: string, value: string, checked: bool }, event)` */
    onBlur?: RadioEventHandler<React.FocusEvent<HTMLInputElement>>
    /** Called with the signature `({ name: string, value: string, checked: bool }, event)` */
    onChange?: RadioEventHandler<React.ChangeEvent<HTMLInputElement>>
    /** Called with the signature `({ name: string, value: string, checked: bool }, event)` */
    onFocus?: RadioEventHandler<React.FocusEvent<HTMLInputElement>>
    /** Called with the signature `({ name: string, value: string, checked: bool }, event)` */
    onKeyDown?: RadioEventHandler<React.KeyboardEvent<HTMLInputElement>>
}

class Radio extends Component<RadioProps> {
    ref = createRef<HTMLInputElement>()

    static defaultProps = {
        dataTest: 'dhis2-uicore-radio',
    }

    componentDidMount() {
        if (this.props.initialFocus) {
            this.ref.current?.focus()
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

    createHandlerPayload(): RadioHandlerPayload {
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
            dataTest = 'dhis2-uicore-radio',
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
                    tabIndex={tabIndex != null ? Number(tabIndex) : undefined}
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
                        margin-inline-end: ${label ? spacers.dp4 : 0};
                        border: 2px solid transparent;
                        padding: 1px;
                        border-radius: 50%;
                    }

                    label.dense .icon {
                        margin-inline-end: 3px;
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

export { Radio }
