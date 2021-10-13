import { Button } from '@dhis2-ui/button'
import { CircularLoader } from '@dhis2-ui/loader'
import { colors, theme, spacers, sharedPropTypes } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconCheckmark24,
    IconInfo24,
    IconUpload24,
    IconWarningFilled24,
} from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { createRef, Component } from 'react'

function Valid({ className }) {
    return <IconCheckmark24 color={theme.valid} className={className} />
}

Valid.propTypes = {
    className: PropTypes.string,
}

function Warning({ className }) {
    return <IconWarningFilled24 color={theme.warning} className={className} />
}

Warning.propTypes = {
    className: PropTypes.string,
}

function Error({ className }) {
    return <IconErrorFilled24 color={theme.error} className={className} />
}

Error.propTypes = {
    className: PropTypes.string,
}

function Info({ className }) {
    return <IconInfo24 color={theme.info} className={className} />
}

Info.propTypes = {
    className: PropTypes.string,
}

function Loading({ className }) {
    return <CircularLoader small className={className} />
}

Loading.propTypes = {
    className: PropTypes.string,
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
    className: PropTypes.string,
    defaultTo: PropTypes.element,
    error: PropTypes.bool,
    info: PropTypes.bool,
    loading: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
}

function Upload({ className }) {
    return <IconUpload24 color={colors.grey700} className={className} />
}

Upload.propTypes = {
    className: PropTypes.string,
}
class FileInput extends Component {
    ref = createRef()

    handleClick = () => {
        this.ref.current.click()
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(), e)
        }

        // reset the file input so it won't prevent on-change
        // if the same file was added in a second attempt
        this.ref.current.value = ''
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
