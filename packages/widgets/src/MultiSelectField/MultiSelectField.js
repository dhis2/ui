import propTypes from '@dhis2/prop-types'
import React from 'react'

import i18n from '@dhis2/d2-i18n'
import { sharedPropTypes } from '@dhis2/ui-constants'
import { Field, Box, MultiSelect } from '@dhis2/ui-core'
import translate from '../translate'

/**
 * @module
 *
 * @param {MultiSelectField.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { MultiSelectField } from '@dhis2/ui-widgets'
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
            <Field
                className={className}
                dataTest={dataTest}
                name={name}
                disabled={disabled}
                required={required}
                label={label}
                helpText={helpText}
                validationText={validationText}
                error={error}
                warning={warning}
                valid={valid}
            >
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
                        clearText={translate(clearText)}
                        filterable={filterable}
                        filterPlaceholder={translate(filterPlaceholder)}
                        placeholder={placeholder}
                        prefix={prefix}
                        empty={translate(empty)}
                        loadingText={translate(loadingText)}
                        noMatchText={translate(noMatchText)}
                        initialFocus={initialFocus}
                        dense={dense}
                    >
                        {children}
                    </MultiSelect>
                </Box>
            </Field>
        )
    }
}

MultiSelectField.defaultProps = {
    selected: [],
    dataTest: 'dhis2-uiwidgets-multiselectfield',

    clearText: () => i18n.t('Clear'),
    empty: () => i18n.t('No data found'),
    filterPlaceholder: () => i18n.t('Type to filter options'),
    loadingText: () => i18n.t('Loading options'),
    noMatchText: () => i18n.t('No options found'),
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {function} [onChange]
 * @prop {string} [label]
 * @prop {Array.<string>} [selected]
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
 * @prop {string|function} [clearText]
 * @prop {boolean} [clearable]
 * @prop {Node|function} [empty]
 * @prop {string|function} [filterPlaceholder]
 * @prop {boolean} [filterable]
 * @prop {string|function} [loadingText]
 * @prop {string} [maxHeight]
 * @prop {string} [inputMaxHeight]
 * @prop {string} [inputWidth]
 * @prop {string|function} [noMatchText]
 * @prop {string} [placeholder]
 * @prop {string} [prefix]
 * @prop {string} [dataTest]
 */
MultiSelectField.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    clearText: propTypes.oneOfType([propTypes.string, propTypes.func]),
    clearable: propTypes.bool,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    empty: propTypes.oneOfType([propTypes.node, propTypes.func]),
    error: sharedPropTypes.statusPropType,
    filterPlaceholder: propTypes.oneOfType([propTypes.node, propTypes.func]),
    filterable: propTypes.bool,
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    inputMaxHeight: propTypes.string,
    inputWidth: propTypes.string,
    label: propTypes.string,
    loading: propTypes.bool,
    loadingText: propTypes.oneOfType([propTypes.string, propTypes.func]),
    maxHeight: propTypes.string,
    noMatchText: propTypes.oneOfType([propTypes.string, propTypes.func]),
    placeholder: propTypes.string,
    prefix: propTypes.string,
    required: propTypes.bool,
    selected: propTypes.arrayOf(propTypes.string),
    tabIndex: propTypes.string,
    valid: sharedPropTypes.statusPropType,
    validationText: propTypes.string,
    warning: sharedPropTypes.statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}

export { MultiSelectField }
