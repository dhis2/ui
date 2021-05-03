import { spacers, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { createRef, Component } from 'react'
import { Button } from '@dhis2/ui-button'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

function Valid({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.valid};
                }
            `}</style>
        </svg>
    )
}

Valid.propTypes = {
    className: propTypes.string,
}

function Warning({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.warning};
                }
            `}</style>
        </svg>
    )
}

Warning.propTypes = {
    className: propTypes.string,
}

function Error({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.error};
                }
            `}</style>
        </svg>
    )
}

Error.propTypes = {
    className: propTypes.string,
}

function Info({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.info};
                }
            `}</style>
        </svg>
    )
}

Info.propTypes = {
    className: propTypes.string,
}

function Loading({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="22 22 44 44"
            className={className}
        >
            <circle
                className="circle"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
            <style jsx>{`
                svg {
                    fill: ${theme.primary600};
                    color: ${theme.primary600};
                    width: 24px;
                    height: 24px;
                    animation: anim-rotate 1.4s linear infinite;
                }

                .circle {
                    stroke: currentColor;
                    stroke-dasharray: 80px, 200px;
                    stroke-dashoffset: 0;
                    animation: anim-dash 1.4s ease-in-out infinite;
                }

                @keyframes anim-rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes anim-dash {
                    0% {
                        stroke-dasharray: 1px, 200px;
                        stroke-dashoffset: 0;
                    }
                    50% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -15px;
                    }
                    100% {
                        stroke-dasharray: 100px, 200px;
                        stroke-dashoffset: -120px;
                    }
                }
            `}</style>
        </svg>
    )
}

Loading.propTypes = {
    className: propTypes.string,
}

const StatusIcon = ({
    error,
    warning,
    valid,
    loading,
    info,
    className,
    defaultTo,
}) => {
    if (error) {
        return <Error className={className} />
    }
    if (warning) {
        return <Warning className={className} />
    }
    if (valid) {
        return <Valid className={className} />
    }
    if (loading) {
        return <Loading className={className} />
    }
    if (info) {
        return <Info className={className} />
    }

    return defaultTo
}

StatusIcon.defaultProps = {
    defaultTo: null,
}

StatusIcon.propTypes = {
    className: propTypes.string,
    defaultTo: propTypes.element,
    error: propTypes.bool,
    info: propTypes.bool,
    loading: propTypes.bool,
    valid: propTypes.bool,
    warning: propTypes.bool,
}

function Upload({ className }) {
    return (
        <svg className={className}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}

Upload.propTypes = {
    className: propTypes.string,
}

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
    /**
     * The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)
     */
    accept: PropTypes.string,
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    /** Input status. Mutually exclusive with `warning` and `valid` */
    error: sharedPropTypes.statusPropType,
    initialFocus: PropTypes.bool,
    /** Button size. Mutually exclusive with `small` */
    large: sharedPropTypes.sizePropType,
    /**
     * The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)
     */
    multiple: PropTypes.bool,
    name: PropTypes.string,
    /** Button size. Mutually exclusive with `large` */
    small: sharedPropTypes.sizePropType,
    tabIndex: PropTypes.string,
    /** Input status. Mutually exclusive with `warning` and `error` */
    valid: sharedPropTypes.statusPropType,
    /** Input status. Mutually exclusive with `valid` and `error` */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature `(object, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `(object, event)` */
    onChange: PropTypes.func,
    /** Called with signature `(object, event)` */
    onFocus: PropTypes.func,
}

export { FileInput }
