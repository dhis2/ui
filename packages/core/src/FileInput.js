import React, { createRef, Component } from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { statusPropType, sizePropType } from './common-prop-types.js'
import { Button } from './Button/Button.js'
import { spacers } from '@dhis2/ui-constants'
import { Upload } from './icons/Upload.js'
import { StatusIcon } from './icons/Status.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {FileInput.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileInput } from '@dhis2/ui-core'
 */
class FileInput extends Component {
    ref = createRef()

    handleClick = () => {
        this.ref.current.click()
    }

    handleChange = e => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(), e)
        }

        // reset the file input so it won't prevent on-change
        // if the same file was added in a second attempt
        this.ref.current.value = ''
    }

    handleBlur = e => {
        if (this.props.onBlur) {
            this.props.onBlur(this.createHandlerPayload(), e)
        }
    }

    handleFocus = e => {
        if (this.props.onFocus) {
            this.props.onFocus(this.createHandlerPayload(), e)
        }
    }

    createHandlerPayload() {
        return {
            files: this.ref.current.files,
            name: this.props.name,
        }
    }

    render() {
        const {
            accept,
            buttonLabel,
            className,
            dataTest,
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
                <input
                    id={name}
                    name={name}
                    type="file"
                    ref={this.ref}
                    onChange={this.handleChange}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                />
                <Button
                    disabled={disabled}
                    icon={<Upload />}
                    initialFocus={initialFocus}
                    large={large}
                    onBlur={this.handleBlur}
                    onClick={this.handleClick}
                    onFocus={this.handleFocus}
                    small={small}
                    tabIndex={tabIndex}
                    type="button"
                >
                    {buttonLabel}
                </Button>
                <StatusIcon error={error} valid={valid} warning={warning} />

                <style jsx>{`
                    input {
                        display: none;
                    }

                    .file-input {
                        display: flex;
                        align-items: center;
                        padding-bottom: ${spacers.dp4};
                    }

                    .file-input > :global(svg) {
                        width: 18px;
                        height: 18px;
                        margin-left: ${spacers.dp8};
                    }
                `}</style>
            </div>
        )
    }
}

FileInput.defaultProps = {
    accept: '*',
    dataTest: 'dhis2-uicore-fileinput',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [name]
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {function} [onFocus] - called with the signature `object, event`
 * @prop {function} [onBlur] - called with the signature `object, event`
 * @prop {string} [buttonLabel]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning` and `error` are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 *
 * @prop {string} [accept=*] - the `accept` attribute of the [native file input]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}
 * @prop {boolean} [multiple] - the `multiple` attribute of the [native file input]{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple}
 * @prop {string} [dataTest]
 */
FileInput.propTypes = {
    accept: propTypes.string,
    buttonLabel: propTypes.string,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    error: statusPropType,
    initialFocus: propTypes.bool,
    large: sizePropType,
    multiple: propTypes.bool,
    name: propTypes.string,
    small: sizePropType,
    tabIndex: propTypes.string,
    valid: statusPropType,
    warning: statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { FileInput }
