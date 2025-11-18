import { requiredIf } from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import { Field } from '@dhis2-ui/field'
import PropTypes from 'prop-types'
import React from 'react'
import {
    SimpleSingleSelect,
    optionProp,
} from '../simple-single-select/index.js'

export function SimpleSingleSelectField(props) {
    const {
        className,
        dataTest,
        disabled,
        error,
        helpText,
        label,
        name,
        required,
        valid,
        validationText,
        warning,
    } = props
    const labelId = `${name}-label`

    return (
        <Field
            className={className}
            dataTest={dataTest}
            disabled={disabled}
            required={required}
            labelId={labelId}
            label={label}
            helpText={helpText}
            validationText={validationText}
            error={error}
            warning={warning}
            valid={valid}
        >
            <SimpleSingleSelect {...props} labelledBy={labelId} />
        </Field>
    )
}

SimpleSingleSelectField.propTypes = {
    /** Label displayed above the input **/
    label: PropTypes.string.isRequired,

    /** necessary for IDs that are required for accessibility **/
    name: PropTypes.string.isRequired,

    /** An array of options **/
    options: PropTypes.arrayOf(optionProp).isRequired,

    /** A callback that will be called with the new value or an empty string **/
    onChange: PropTypes.func.isRequired,

    /** Will focus the select initially **/
    autoFocus: PropTypes.bool,

    /** Additional class names that will be applied to the root element **/
    className: PropTypes.string,

    /** This will allow us to put an aria-label on the clear button **/
    clearText: requiredIf((props) => props.clearable, PropTypes.string),

    /** Whether a clear button should be displayed or not **/
    clearable: PropTypes.bool,

    /** A value for a `data-test` attribute on the root element **/
    dataTest: PropTypes.string,

    /** Renders a select with lower height **/
    dense: PropTypes.bool,

    /** Disables all interactions with the select (except focussing) **/
    disabled: PropTypes.bool,

    /** Text or component to display when there are no options **/
    empty: PropTypes.node,

    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    error: sharedPropTypes.statusPropType,

    /** Help text that will be displayed below the input **/
    filterHelpText: PropTypes.string,

    /** Value will be used as aria-label attribute on the filter input **/
    filterLabel: PropTypes.string,

    /** Placeholder for the filter input **/
    filterPlaceholder: PropTypes.string,

    /** Value of the filter input **/
    filterValue: PropTypes.string,

    /** Whether the select should display a filter input **/
    filterable: PropTypes.bool,

    /** Help text, displayed below the input **/
    helpText: PropTypes.string,

    /** Will show a loading indicator at the end of the options-list **/
    loading: PropTypes.bool,

    /** Text that will be displayed next to the loading indicator **/
    menuLoadingText: PropTypes.string,

    /** Allows to modify the max height of the menu **/
    menuMaxHeight: PropTypes.string,

    /** String that will be displayed when the select is being filtered but the options array is empty **/
    noMatchText: requiredIf((props) => props.filterable, PropTypes.string),

    /** Allows to override what's rendered inside the `button[role="option"]`.
     * Can be overriden on an individual option basis **/
    optionComponent: PropTypes.elementType,

    /** For a11y: How aggressively the user should be updated about changes in options **/
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),

    /** String to show when there's no value and no valueLabel **/
    placeholder: PropTypes.string,

    /** String that will be displayed before the label of the selected option **/
    prefix: PropTypes.string,

    /** Whether a value is required or not **/
    required: PropTypes.bool,

    /** Standard HTML tab-index attribute that will be put on the combobox's root element **/
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    valid: sharedPropTypes.statusPropType,

    /** Text shown below input when `props.error` is true **/
    validationText: PropTypes.string,

    /** As of now, this component does not support being uncontrolled **/
    value: PropTypes.string,

    /**
     * When the option is not in the options list (e.g. not loaded or list is
     * filtered), but a selected value needs to be displayed, then this prop can
     * be used to supply the text to be shown.
     **/
    valueLabel: requiredIf((props) => {
        if (props.options.find(({ value }) => props.value === value)) {
            return false
        }

        return props.value
    }, PropTypes.string),

    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    warning: sharedPropTypes.statusPropType,

    /** Will be called when the combobox is loses focus **/
    onBlur: PropTypes.func,

    /** Will be called when the last option is scrolled into the visible area **/
    onEndReached: PropTypes.func,

    /** Will be called when the filter value changes **/
    onFilterChange: PropTypes.func,

    /** Will be called when the combobox is being focused **/
    onFocus: PropTypes.func,
}
