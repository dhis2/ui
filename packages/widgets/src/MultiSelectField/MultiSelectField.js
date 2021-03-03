import { sharedPropTypes } from '@dhis2/ui-constants'
import { Field, Box, MultiSelect } from '@dhis2/ui-core'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
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
    /** Should be `MultiSelectOption` components */
    children: PropTypes.node,
    className: PropTypes.string,
    /** Label for the button that clears selections */
    clearText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Adds a button to the MultiSelect that clears selections when pressed */
    clearable: PropTypes.bool,
    dataTest: PropTypes.string,
    /** Makes the MultiSelect smaller */
    dense: PropTypes.bool,
    /** Disables the MultiSelect */
    disabled: PropTypes.bool,
    /** Text to display when there are no options */
    empty: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props */
    error: sharedPropTypes.statusPropType,
    /** Placeholder text to show in the filter field when it is empty */
    filterPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Adds a field to filter options */
    filterable: PropTypes.bool,
    /** Useful guiding text to display below the MultiSelect */
    helpText: PropTypes.string,
    /** Grabs initial focus on the page */
    initialFocus: PropTypes.bool,
    /** Constrains the height of the input */
    inputMaxHeight: PropTypes.string,
    /** Sets the width of the input. Can be any valid CSS measurement */
    inputWidth: PropTypes.string,
    /** Text for the label above the MultiSelect */
    label: PropTypes.string,
    /** Applies a loading appearance to the dropdown options */
    loading: PropTypes.bool,
    /** Text to display when `loading` is true */
    loadingText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Constrains height of the MultiSelect */
    maxHeight: PropTypes.string,
    /** Text to display when there are no filter results */
    noMatchText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Placeholder text when the MultiSelect is empty */
    placeholder: PropTypes.string,
    /** Leading text to prefix selections */
    prefix: PropTypes.string,
    /** Indicates that a selection is required */
    required: PropTypes.bool,
    /** Selected items in the MultiSelect (each string should refer to the item's `value` attribute) */
    selected: PropTypes.arrayOf(PropTypes.string),
    tabIndex: PropTypes.string,
    /** Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props */
    valid: sharedPropTypes.statusPropType,
    /** Text to provide form validation feedback. Receives styles according to validation status */
    validationText: PropTypes.string,
    /** Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature `({ selected: [String] }, event) */
    onBlur: PropTypes.func,
    /** Called with signature `({ selected: [String] }, event) */
    onChange: PropTypes.func,
    /** Called with signature `({ selected: [String] }, event) */
    onFocus: PropTypes.func,
}

export { MultiSelectField }
