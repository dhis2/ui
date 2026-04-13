import { colors, spacers } from '@dhis2/ui-constants'
import { IconUpload24 } from '@dhis2/ui-icons'
import { Button, ButtonEventPayload } from '@dhis2-ui/button'
import { StatusIcon } from '@dhis2-ui/status-icon'
import cx from 'classnames'
import React, { createRef, Component } from 'react'

interface FileInputProps {
    /** The `accept` attribute of the native file input */
    accept?: string
    buttonLabel?: string
    className?: string
    dataTest?: string
    disabled?: boolean
    /** Input status. Mutually exclusive with `warning` and `valid` */
    error?: boolean
    initialFocus?: boolean
    /** Button size. Mutually exclusive with `small` */
    large?: boolean
    /** The `multiple` attribute of the native file input */
    multiple?: boolean
    name?: string
    /** Button size. Mutually exclusive with `large` */
    small?: boolean
    tabIndex?: string
    /** Input status. Mutually exclusive with `warning` and `error` */
    valid?: boolean
    /** Input status. Mutually exclusive with `valid` and `error` */
    warning?: boolean
    /** Called with signature `(object, event)` */
    onBlur?: (
        payload: { files: FileList; name?: string },
        event: React.FocusEvent
    ) => void
    /** Called with signature `(object, event)` */
    onChange?: (
        payload: { files: FileList; name?: string },
        event: React.ChangeEvent
    ) => void
    /** Called with signature `(object, event)` */
    onFocus?: (
        payload: { files: FileList; name?: string },
        event: React.FocusEvent
    ) => void
    /** Called with signature `(object, event)` */
    onKeyDown?: (
        payload: { files: FileList; name?: string },
        event: React.KeyboardEvent
    ) => void
}

class FileInput extends Component<FileInputProps> {
    static defaultProps = {
        accept: '*',
        dataTest: 'dhis2-uicore-fileinput',
    }

    ref = createRef<HTMLInputElement>()

    handleClick = () => {
        this.ref.current?.click()
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(), e)
        }

        // reset the file input so it won't prevent on-change
        // if the same file was added in a second attempt
        if (this.ref.current) {
            this.ref.current.value = ''
        }
    }

    handleBlur = (
        _payload: ButtonEventPayload,
        e: React.FocusEvent<HTMLButtonElement>
    ) => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(), e)
        }
    }

    handleFocus = (
        _payload: ButtonEventPayload,
        e: React.FocusEvent<HTMLButtonElement>
    ) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(), e)
        }
    }

    handleKeyDown = (
        _payload: ButtonEventPayload,
        e: React.KeyboardEvent<HTMLButtonElement>
    ) => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.createHandlerPayload(), e)
        }
    }

    createHandlerPayload() {
        return {
            files: this.ref.current!.files!,
            name: this.props.name,
        }
    }

    render() {
        const {
            accept = '*',
            buttonLabel,
            className,
            dataTest = 'dhis2-uicore-fileinput',
            disabled,
            error,
            initialFocus,
            large,
            multiple,
            name,
            small,
            tabIndex,
            valid,
            warning,
        } = this.props

        return (
            <div className={cx('file-input', className)} data-test={dataTest}>
                <div>
                    <input
                        id={name}
                        name={name}
                        type="file"
                        ref={this.ref}
                        onChange={this.handleChange}
                        accept={accept}
                        multiple={multiple}
                        disabled={disabled}
                        data-test={`${dataTest}-input`}
                    />
                    <Button
                        disabled={disabled}
                        icon={<IconUpload24 color={colors.grey700} />}
                        initialFocus={initialFocus}
                        large={large}
                        onBlur={this.handleBlur}
                        onClick={this.handleClick}
                        onFocus={this.handleFocus}
                        onKeyDown={this.handleKeyDown}
                        small={small}
                        tabIndex={tabIndex}
                        type="button"
                    >
                        {buttonLabel}
                    </Button>
                </div>
                <StatusIcon error={error} valid={valid} warning={warning} />

                <style jsx>{`
                    input {
                        display: none;
                    }

                    .file-input {
                        display: flex;
                        align-items: center;
                        gap: ${spacers.dp8};
                        padding-bottom: ${spacers.dp4};
                    }
                `}</style>
            </div>
        )
    }
}

export { FileInput }
export type { FileInputProps }
