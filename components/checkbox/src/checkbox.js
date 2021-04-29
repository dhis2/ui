import { mutuallyExclusive } from '@dhis2/prop-types'
import { colors, theme, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import { CheckboxRegular, CheckboxDense } from './checkbox-icon.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 *
 * @param {Checkbox.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Checkbox } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/checkbox.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/checkbox--default|Storybook}
 */
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

    handleChange = e => {
        if (this.props.onChange) {
            this.props.onChange(this.createHandlerPayload(), e)
        }
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
                        font-size: 16px;
                        line-height: 20px;
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
                        left: 3px;
                    }

                    label.dense input {
                        /* The same size as the dense icon */
                        height: 14px;
                        width: 14px;
                    }

                    .icon {
                        user-select: none;
                        margin-right: 5px;
                        border: 2px solid transparent;
                        padding: 1px;
                        border-radius: 5px;
                    }

                    label.dense .icon {
                        margin-right: 3px;
                        border-radius: 4px;
                    }

                    input:focus + .icon {
                        border-color: ${colors.blue600};
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} value
 * @prop {Node} [label]
 * @prop {function} [onChange] - called with the signature `object, event`
 * @prop {string} [name]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [checked]
 * @prop {boolean} [indeterminate]
 * @prop {boolean} [initialFocus]
 *
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 *
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {string} [dataTest]
 */

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
}

export { Checkbox }
