import propTypes from '@dhis2/prop-types'
import React, { Component } from 'react'
import cx from 'classnames'

import { statusPropType } from '../common-prop-types.js'
import { StatusIcon } from '../icons/Status.js'

import { styles } from './TextArea.styles.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {TextArea.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { TextArea } from '@dhis2/ui-core'
 */
export class TextArea extends Component {
    textareaRef = React.createRef()
    state = {
        height: 'auto',
    }
    textareaDimensions = { width: 0, height: 0 }
    userHasResized = false

    componentDidMount() {
        this.attachResizeListener()

        if (this.props.initialFocus) {
            this.textareaRef.current.focus()
        }

        if (this.shouldDoAutoGrow()) {
            this.setHeight()
        }
    }

    componentDidUpdate(prevProps) {
        if (this.shouldDoAutoGrow() && this.props.value !== prevProps.value) {
            this.setHeight()
        }
    }

    attachResizeListener() {
        const textarea = this.textareaRef.current
        textarea.addEventListener('mousedown', this.setTextareaDimensions)
        textarea.addEventListener('mouseup', this.hasUserResized)
    }

    removeResizeListener() {
        const textarea = this.textareaRef.current
        textarea.removeEventListener('mousedown', this.setTextareaDimensions)
        textarea.removeEventListener('mouseup', this.hasUserResized)
    }

    setHeight() {
        const textarea = this.textareaRef.current
        const offset = textarea.offsetHeight - textarea.clientHeight
        const height = textarea.scrollHeight + offset + 'px'
        this.setState({ height })
    }

    setTextareaDimensions = () => {
        const textarea = this.textareaRef.current
        this.textareaDimensions = {
            width: textarea.clientWidth,
            height: textarea.clientHeight,
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

    handleChange = e => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(e), e)
        }
    }

    handleBlur = e => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(e), e)
        }
    }

    handleFocus = e => {
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
            rows,
            width,
            resize,
            dataTest,
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
                    tabIndex={tabIndex}
                    onFocus={this.handleFocus}
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

TextArea.defaultProps = {
    rows: 4,
    width: '100%',
    resize: 'vertical',
    dataTest: 'dhis2-uicore-textarea',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} name
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {function} [onBlur]
 * @prop {function} [onFocus]
 * @prop {string} [className]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense] - Compact mode
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, and `loading`
 * are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 *
 * @prop {boolean} [autoGrow]
 * @prop {boolean} [readOnly]
 * @prop {string} [resize=vertical] - resize attribute on the textarea,
 * one of `none`, `both`, `horizontal`, `vertical`
 * @prop {number} [rows=4]
 * @prop {string} [width]
 * @prop {string} [dataTest]
 */
TextArea.propTypes = {
    autoGrow: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    initialFocus: propTypes.bool,
    loading: propTypes.bool,
    name: propTypes.string,
    placeholder: propTypes.string,
    readOnly: propTypes.bool,
    resize: propTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
    rows: propTypes.number,
    tabIndex: propTypes.string,
    valid: statusPropType,
    value: propTypes.string,
    warning: statusPropType,
    width: propTypes.string,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}
