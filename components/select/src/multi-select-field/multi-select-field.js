import { sharedPropTypes } from '@dhis2/ui-constants'
import { Box } from '@dhis2-ui/box'
import { Field } from '@dhis2-ui/field'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import { MultiSelect } from '../multi-select/index.js'

// TODO: translate
const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

class MultiSelectField extends React.Component {
    static defaultProps = {
        selected: [],
        dataTest: 'dhis2-uiwidgets-multiselectfield',

        clearText: () => i18n.t('Clear'),
        empty: () => i18n.t('No data found'),
        filterPlaceholder: () => i18n.t('Type to filter options'),
        loadingText: () => i18n.t('Loading options'),
        noMatchText: () => i18n.t('No options found'),
    }

    render() {
        const {
            className,
            onChange,
            onFocus,
            onKeyDown,
            onBlur,
            required,
            label,
            valid,
            error,
            disabled,
            warning,
            loading,
            selected = MultiSelectField.defaultProps.selected,
            tabIndex,
            helpText,
            validationText,
            maxHeight,
            inputMaxHeight,
            inputWidth,
            children,
            clearable,
            clearText = MultiSelectField.defaultProps.clearText,
            filterable,
            filterPlaceholder = MultiSelectField.defaultProps.filterPlaceholder,
            placeholder,
            prefix,
            empty = MultiSelectField.defaultProps.empty,
            loadingText = MultiSelectField.defaultProps.loadingText,
            noMatchText = MultiSelectField.defaultProps.noMatchText,
            initialFocus,
            dense,
            dataTest = MultiSelectField.defaultProps.dataTest,
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
                        onKeyDown={onKeyDown}
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
    /** Called with signature `({ selected: [String] }, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `({ selected: [String] }, event)` */
    onChange: PropTypes.func,
    /** Called with signature `({ selected: [String] }, event)` */
    onFocus: PropTypes.func,
    /** Called with signature `({ selected: [String] }, event)` */
    onKeyDown: PropTypes.func,
}

export { MultiSelectField }
