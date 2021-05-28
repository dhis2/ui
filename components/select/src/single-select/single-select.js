import { requiredIf } from '@dhis2/prop-types'
import { theme, spacers, sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { Loading as CommonLoading } from '../loading.js'
import { Select } from '../select.js'
import { FilterableMenu } from './filterable-menu.js'
import { Input } from './input.js'
import { Menu } from './menu.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

// TODO: ui-icons
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
    className: PropTypes.string,
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
    className: PropTypes.string,
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
    className: PropTypes.string,
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
    className: PropTypes.string,
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

/**
 * @module
 *
 * @param {SingleSelect.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SingleSelect } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 */
const SingleSelect = ({
    className,
    selected,
    tabIndex,
    maxHeight,
    inputMaxHeight,
    onChange,
    onFocus,
    onBlur,
    loading,
    error,
    warning,
    valid,
    disabled,
    children,
    clearable,
    clearText,
    filterable,
    filterPlaceholder,
    placeholder,
    prefix,
    empty,
    loadingText,
    noMatchText,
    initialFocus,
    dense,
    dataTest,
}) => {
    // If the select is filterable, use a filterable menu
    const menu = filterable ? (
        <FilterableMenu
            dataTest={dataTest}
            empty={empty}
            noMatchText={noMatchText}
            placeholder={filterPlaceholder}
        />
    ) : (
        <Menu empty={empty} dataTest={dataTest} />
    )

    return (
        <div className="root" data-test={dataTest}>
            <div className="root-input">
                <Select
                    className={className}
                    selected={selected}
                    input={
                        <Input
                            clearable={clearable}
                            clearText={clearText}
                            dataTest={dataTest}
                            placeholder={placeholder}
                            prefix={prefix}
                            inputMaxHeight={inputMaxHeight}
                        />
                    }
                    menu={menu}
                    tabIndex={tabIndex}
                    maxHeight={maxHeight}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    error={error}
                    warning={warning}
                    valid={valid}
                    disabled={disabled}
                    initialFocus={initialFocus}
                    dense={dense}
                >
                    {children}
                    {loading && (
                        <CommonLoading
                            message={loadingText}
                            dataTest={`${dataTest}-loading`}
                        />
                    )}
                </Select>
            </div>
            <StatusIcon error={error} valid={valid} warning={warning} />

            <style jsx>{`
                .root {
                    align-items: center;
                    display: flex;
                }

                .root-input {
                    margin-right: ${spacers.dp4};
                    flex: 1;
                }
            `}</style>
        </div>
    )
}

SingleSelect.defaultProps = {
    selected: '',
    dataTest: 'dhis2-uicore-singleselect',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} [onChange]
 * @prop {String} [selected]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Node} [children]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {boolean} [initialFocus]
 * @prop {string} [clearText] - Only required if clearable is true
 * @prop {boolean} [clearable]
 * @prop {Node} [empty]
 * @prop {string} [filterPlaceholder]
 * @prop {boolean} [filterable]
 * @prop {string} [loadingText]
 * @prop {string} [maxHeight]
 * @prop {string} [inputMaxHeight]
 * @prop {string} [noMatchText] - Only required if filterable is true
 * @prop {string} [placeholder]
 * @prop {string} [prefix]
 * @prop {string} [dataTest]
 */
SingleSelect.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /** Text on button that clears selection. Required if `clearable` prop is true */
    clearText: requiredIf(props => props.clearable, PropTypes.string),
    /** Adds a button to clear selection */
    clearable: PropTypes.bool,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    /** Text or component to display when there are no options */
    empty: PropTypes.node,
    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props */
    error: sharedPropTypes.statusPropType,
    filterPlaceholder: PropTypes.string,
    /** Adds a filter field to add text to filter options */
    filterable: PropTypes.bool,
    initialFocus: PropTypes.bool,
    inputMaxHeight: PropTypes.string,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    maxHeight: PropTypes.string,
    /** Text to show when filter returns no results. Required if `filterable` prop is true */
    noMatchText: requiredIf(props => props.filterable, PropTypes.string),
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    selected: PropTypes.string,
    tabIndex: PropTypes.string,
    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `error` props */
    valid: sharedPropTypes.statusPropType,
    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
}

export { SingleSelect }
