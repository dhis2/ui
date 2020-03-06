import propTypes from '@dhis2/prop-types'
import React from 'react'

import { statusPropType, multiSelectedPropType } from './common-prop-types.js'
import { Field } from './Field/Field.js'
import { Label } from './Label/Label.js'
import { Help } from './Help/Help.js'
import { MultiSelect } from './MultiSelect.js'
import { Box } from './Box/Box.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 *
 * @param {MultiSelectField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { MultiSelectField } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/multiselectfield--default|Storybook}
 */
class MultiSelectField extends React.Component {
    render() {
        const {
            className,
            onChange,
            onFocus,
            onBlur,
            required,
            label,
            valid,
            error,
            disabled,
            warning,
            loading,
            selected,
            tabIndex,
            helpText,
            validationText,
            maxHeight,
            inputMaxHeight,
            inputWidth,
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
        } = this.props

        return (
            <Field className={className} dataTest={dataTest}>
                {label && (
                    <Label required={required} disabled={disabled}>
                        {label}
                    </Label>
                )}

                <Box width={inputWidth} minWidth="100px">
                    <MultiSelect
                        selected={selected}
                        tabIndex={tabIndex}
                        maxHeight={maxHeight}
                        inputMaxHeight={inputMaxHeight}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        loading={loading}
                        error={error}
                        warning={warning}
                        valid={valid}
                        disabled={disabled}
                        clearable={clearable}
                        clearText={clearText}
                        filterable={filterable}
                        filterPlaceholder={filterPlaceholder}
                        placeholder={placeholder}
                        prefix={prefix}
                        empty={empty}
                        loadingText={loadingText}
                        noMatchText={noMatchText}
                        initialFocus={initialFocus}
                        dense={dense}
                    >
                        {children}
                    </MultiSelect>
                </Box>

                {helpText && (
                    <Help dataTest={`${dataTest}-help`}>{helpText}</Help>
                )}

                {validationText && (
                    <Help
                        error={error}
                        warning={warning}
                        valid={valid}
                        dataTest={`${dataTest}-validation`}
                    >
                        {validationText}
                    </Help>
                )}
            </Field>
        )
    }
}

MultiSelectField.defaultProps = {
    selected: [],
    dataTest: 'dhis2-uicore-multiselectfield',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} [onChange]
 * @prop {string} [label]
 * @prop {Array} [selected]
 * @prop {string} [className]
 * @prop {string} [tabIndex]
 * @prop {Node} [children]
 * @prop {boolean} [required]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dense]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [loading]
 * @prop {function} [onFocus]
 * @prop {function} [onBlur]
 * @prop {boolean} [initialFocus]
 * @prop {string} [validationText]
 * @prop {string} [helpText]
 * @prop {string} [clearText] - Only required if clearable is true
 * @prop {boolean} [clearable]
 * @prop {Node} [empty]
 * @prop {string} [filterPlaceholder]
 * @prop {boolean} [filterable]
 * @prop {string} [loadingText]
 * @prop {string} [maxHeight]
 * @prop {string} [inputMaxHeight]
 * @prop {string} [inputWidth]
 * @prop {string} [noMatchText] - Only required if filterable is true
 * @prop {string} [placeholder]
 * @prop {string} [prefix]
 * @prop {string} [dataTest]
 */
MultiSelectField.propTypes = {
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
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    inputMaxHeight: propTypes.string,
    inputWidth: propTypes.string,
    label: propTypes.string,
    loading: propTypes.bool,
    loadingText: propTypes.string,
    maxHeight: propTypes.string,
    noMatchText: propTypes.requiredIf(
        props => props.filterable,
        propTypes.string
    ),
    placeholder: propTypes.string,
    prefix: propTypes.string,
    required: propTypes.bool,
    selected: multiSelectedPropType,
    tabIndex: propTypes.string,
    valid: statusPropType,
    validationText: propTypes.string,
    warning: statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { MultiSelectField }
