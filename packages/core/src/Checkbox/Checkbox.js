import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React, { Component, createRef } from 'react'

import { statusPropType } from '../common-prop-types.js'
import { Regular, Dense } from '../icons/Checkbox.js'
import { colors, theme } from '@dhis2/ui-constants'
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
                        <Dense className={classes} />
                    ) : (
                        <Regular className={classes} />
                    )}
                </div>

                {label}

                <style jsx>{`
                    label {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
                        cursor: pointer;
                        pointer-events: all;
                        user-select: none;
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
                        pointer-events: none;
                        position: absolute;
                    }

                    .icon {
                        pointer-events: none;
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

const uniqueOnStatePropType = propTypes.mutuallyExclusive(
    ['checked', 'indeterminate'],
    propTypes.bool
)

Checkbox.propTypes = {
    checked: uniqueOnStatePropType,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    indeterminate: uniqueOnStatePropType,
    initialFocus: propTypes.bool,
    label: propTypes.node,
    name: propTypes.string,
    tabIndex: propTypes.string,
    valid: statusPropType,
    value: propTypes.string,
    warning: statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { Checkbox }
