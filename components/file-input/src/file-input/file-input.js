import { Button } from '@dhis2-ui/button'
import { StatusIcon } from '@dhis2-ui/status-icon'
import { colors, spacers, sharedPropTypes } from '@dhis2/ui-constants'
import { IconUpload24 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { createRef, Component } from 'react'

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
                    />
                    <Button
                        disabled={disabled}
                        icon={<IconUpload24 color={colors.grey700} />}
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
