import { StatusIcon } from '@dhis2-ui/status-icon'
import cx from 'classnames'
import React, { Component } from 'react'
import { styles } from './text-area.styles.ts'

interface TextAreaEventPayload {
    value: string
    name?: string
}

export interface TextAreaProps {
    /** Grow the text area in response to overflow instead of adding a scroll bar */
    autoGrow?: boolean
    className?: string
    dataTest?: string
    /** Compact mode */
    dense?: boolean
    /** Disables the textarea and makes in non-interactive */
    disabled?: boolean
    /** Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props */
    error?: boolean
    /** Grabs initial focus on the page */
    initialFocus?: boolean
    /** Adds a loading spinner */
    loading?: boolean
    /** Name associated with the text area. Passed in object argument to event handlers. */
    name?: string
    /** Placeholder text for an empty textarea */
    placeholder?: string
    /** Makes the textarea read-only */
    readOnly?: boolean
    /** [Resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for the textarea element */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical'
    /** Initial height of the textarea, in lines of text */
    rows?: number
    tabIndex?: string
    /** Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props */
    valid?: boolean
    /** Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers. */
    value?: string
    /** Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning?: boolean
    /** Width of the text area. Can be any valid CSS measurement */
    width?: string
    /** Called with signature `({ name: string, value: string }, event)` */
    onBlur?: (payload: TextAreaEventPayload, event: React.FocusEvent<HTMLTextAreaElement>) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onChange?: (payload: TextAreaEventPayload, event: React.ChangeEvent<HTMLTextAreaElement>) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onFocus?: (payload: TextAreaEventPayload, event: React.FocusEvent<HTMLTextAreaElement>) => void
    /** Called with signature `({ name: string, value: string }, event)` */
    onKeyDown?: (payload: TextAreaEventPayload, event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

interface TextAreaState {
    height: string
}

export class TextArea extends Component<TextAreaProps, TextAreaState> {
    textareaRef = React.createRef<HTMLTextAreaElement>()
    state: TextAreaState = {
        height: 'auto',
    }
    textareaDimensions = { width: 0, height: 0 }
    userHasResized = false

    static defaultProps = {
        rows: 4,
        width: '100%',
        resize: 'vertical',
        dataTest: 'dhis2-uicore-textarea',
    }

    componentDidMount() {
        this.attachResizeListener()

        if (this.props.initialFocus) {
            this.textareaRef.current?.focus()
        }

        if (this.shouldDoAutoGrow()) {
            this.setHeight()
        }
    }

    componentDidUpdate(prevProps: TextAreaProps) {
        if (this.shouldDoAutoGrow() && this.props.value !== prevProps.value) {
            this.setHeight()
        }
    }

    attachResizeListener() {
        const textarea = this.textareaRef.current
        if (textarea) {
            textarea.addEventListener('mousedown', this.setTextareaDimensions)
            textarea.addEventListener('mouseup', this.hasUserResized)
        }
    }

    removeResizeListener() {
        const textarea = this.textareaRef.current
        if (textarea) {
            textarea.removeEventListener('mousedown', this.setTextareaDimensions)
            textarea.removeEventListener('mouseup', this.hasUserResized)
        }
    }

    setHeight() {
        const textarea = this.textareaRef.current
        if (textarea) {
            const offset = textarea.offsetHeight - textarea.clientHeight
            const height = textarea.scrollHeight + offset + 'px'
            this.setState({ height })
        }
    }

    setTextareaDimensions = () => {
        const textarea = this.textareaRef.current
        if (textarea) {
            this.textareaDimensions = {
                width: textarea.clientWidth,
                height: textarea.clientHeight,
            }
        }
    }

    shouldDoAutoGrow() {
        return this.props.autoGrow && !this.userHasResized
    }

    hasUserResized = () => {
        const { width: oldWidth, height: oldHeight } = this.textareaDimensions

        this.setTextareaDimensions()

        const { width: newWidth, height: newHeight } = this.textareaDimensions
        const userHasResized = newWidth !== oldWidth || newHeight !== oldHeight

        if (userHasResized) {
            this.userHasResized = true
            this.removeResizeListener()
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(e), e)
        }
    }

    handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(e), e)
        }
    }

    handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(e), e)
        }
    }

    handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(this.createHandlerPayload(e), e)
        }
    }

    createHandlerPayload(e: React.SyntheticEvent<HTMLTextAreaElement>): TextAreaEventPayload {
        return {
            value: e.currentTarget.value,
            name: this.props.name,
        }
    }

    render() {
        const {
            className,
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
            resize = 'vertical',
            rows = 4,
            width = '100%',
            dataTest = 'dhis2-uicore-textarea',
        } = this.props
        const { height } = this.state

        return (
            <div className={cx('textarea', className)} data-test={dataTest}>
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    ref={this.textareaRef}
                    value={value}
                    disabled={disabled}
                    readOnly={readOnly}
                    tabIndex={tabIndex as unknown as number}
                    onFocus={this.handleFocus}
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    rows={rows}
                    className={cx({
                        dense,
                        disabled,
                        error,
                        valid,
                        warning,
                        'read-only': readOnly,
                    })}
                />
                <StatusIcon
                    error={error}
                    valid={valid}
                    loading={loading}
                    warning={warning}
                />

                <style jsx>{styles}</style>
                <style jsx>{`
                    textarea {
                        width: ${width};
                        height: ${height};
                        resize: ${resize};
                    }
                `}</style>
            </div>
        )
    }
}
