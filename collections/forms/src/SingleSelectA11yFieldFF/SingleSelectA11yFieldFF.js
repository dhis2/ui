import { requiredIf } from '@dhis2/prop-types'
import { SingleSelectA11yField } from '@dhis2-ui/select'
import PropTypes from 'prop-types'
import React from 'react'
import {
    createFocusHandler,
    createBlurHandler,
    hasError,
    isLoading,
    isValid,
    getValidationText,
} from '../shared/helpers.js'
import { inputPropType, metaPropType } from '../shared/propTypes.js'

export const SingleSelectA11yFieldFF = ({
    error,
    input,
    loading,
    meta,
    showLoadingStatus,
    showValidStatus,
    valid,
    validationText,
    onBlur,
    onFocus,
    ...rest
}) => {
    return (
        <SingleSelectA11yField
            {...rest}
            error={hasError(meta, error)}
            valid={isValid(meta, valid, showValidStatus)}
            loading={isLoading(meta, loading, showLoadingStatus)}
            validationText={getValidationText(meta, validationText, error)}
            onFocus={createFocusHandler(input, onFocus)}
            onChange={(value) => input.onChange(value)}
            onBlur={createBlurHandler(input, onBlur)}
            value={input.value || ''}
        />
    )
}

SingleSelectA11yFieldFF.propTypes = {
    /** necessary for IDs that are required for accessibility **/
    idPrefix: PropTypes.string.isRequired,

    /** `input` props received from Final Form `Field` */
    input: inputPropType.isRequired,

    /** Label displayed above the input **/
    label: PropTypes.string.isRequired,

    /** `meta` props received from Final Form `Field` */
    meta: metaPropType.isRequired,

    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,

    /** Will focus the select initially **/
    autoFocus: PropTypes.bool,

    /** Additional class names that will be applied to the root element **/
    className: PropTypes.string,

    /** This will allow us to put an aria-label on the clear button **/
    clearText: requiredIf((props) => props.clearable, PropTypes.string),

    /** Whether a clear button should be displayed or not **/
    clearable: PropTypes.bool,

    /** Allows to override what's rendered inside the `button[role="option"]`.
     * Can be overriden on an individual option basis **/
    customOption: PropTypes.elementType,

    /** A value for a `data-test` attribute on the root element **/
    dataTest: PropTypes.string,

    /** Renders a select with lower height **/
    dense: PropTypes.bool,

    /** Disables all interactions with the select (except focussing) **/
    disabled: PropTypes.bool,

    /** Text or component to display when there are no options **/
    empty: PropTypes.node,

    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    error: PropTypes.bool,

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

    /** For a11y: How aggressively the user should be updated about changes in options **/
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),

    /** String to show when there's no value and no valueLabel **/
    placeholder: PropTypes.string,

    /** String that will be displayed before the label of the selected option **/
    prefix: PropTypes.string,

    /** Whether a value is required or not **/
    required: PropTypes.bool,

    showLoadingStatus: PropTypes.bool,

    showValidStatus: PropTypes.bool,

    /** Standard HTML tab-index attribute that will be put on the combobox's root element **/
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    valid: PropTypes.bool,

    validationText: PropTypes.string,

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
    warning: PropTypes.bool,

    /** Will be called when the combobox is loses focus **/
    onBlur: PropTypes.func,

    /** Will be called when the last option is scrolled into the visible area **/
    onEndReached: PropTypes.func,

    /** Will be called when the filter value changes **/
    onFilterChange: PropTypes.func,

    /** Will be called when the combobox is being focused **/
    onFocus: PropTypes.func,
}
