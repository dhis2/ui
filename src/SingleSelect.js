import React from 'react'
import propTypes from '@dhis2/prop-types'
import { singleSelectedPropType, statusPropType } from './common-prop-types.js'
import { Select } from './Select.js'
import { Input } from './SingleSelect/Input.js'
import { Menu } from './SingleSelect/Menu.js'
import { FilterableMenu } from './SingleSelect/FilterableMenu.js'
import { Loading } from './Select/Loading.js'
import { StatusIcon } from './icons/Status.js'
import { spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

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
                        <Loading
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
    selected: {},
    dataTest: 'dhis2-uicore-singleselect',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} [onChange]
 * @prop {Object} [selected]
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
    children: propTypes.node,
    className: propTypes.string,
    clearText: propTypes.requiredIf(props => props.clearable, propTypes.string),
    clearable: propTypes.bool,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    empty: propTypes.node,
    error: statusPropType,
    filterPlaceholder: propTypes.string,
    filterable: propTypes.bool,
    initialFocus: propTypes.bool,
    inputMaxHeight: propTypes.string,
    loading: propTypes.bool,
    loadingText: propTypes.string,
    maxHeight: propTypes.string,
    noMatchText: propTypes.requiredIf(
        props => props.filterable,
        propTypes.string
    ),
    placeholder: propTypes.string,
    prefix: propTypes.string,
    selected: singleSelectedPropType,
    tabIndex: propTypes.string,
    valid: statusPropType,
    warning: statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { SingleSelect }
