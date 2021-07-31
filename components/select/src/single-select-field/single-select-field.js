import { Box } from '@dhis2-ui/box'
import { Field } from '@dhis2-ui/field'
import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { SingleSelect } from '../index.js'
import i18n from '../locales/index.js'

// TODO: translate
const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}
class SingleSelectField extends React.Component {
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
            warning,
            disabled,
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
                    <SingleSelect
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
                    </SingleSelect>
                </Box>
            </Field>
        )
    }
}

SingleSelectField.defaultProps = {
    dataTest: 'dhis2-uiwidgets-singleselectfield',
    selected: '',

    clearText: () => i18n.t('Clear'),
    empty: () => i18n.t('No data found'),
    filterPlaceholder: () => i18n.t('Type to filter options'),
    loadingText: () => i18n.t('Loading options'),
    noMatchText: () => i18n.t('No options found'),
}

SingleSelectField.propTypes = {
    /** Should be `SingleSelectOption` components */
    children: PropTypes.node,
    className: PropTypes.string,
    /** Label for the button that clears selections */
    clearText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Adds a button to the SingleSelect that clears selections when pressed */
    clearable: PropTypes.bool,
    dataTest: PropTypes.string,
    /** Makes the SingleSelect smaller */
    dense: PropTypes.bool,
    /** Disables the SingleSelect */
    disabled: PropTypes.bool,
    /** Text to display when there are no options */
    empty: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props */
    error: sharedPropTypes.statusPropType,
    /** Placeholder text to show in the filter field when it is empty */
    filterPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Adds a field to filter options */
    filterable: PropTypes.bool,
    /** Useful guiding text to display below the SingleSelect */
    helpText: PropTypes.string,
    /** Grabs initial focus on the page */
    initialFocus: PropTypes.bool,
    /** Constrains the height of the input */
    inputMaxHeight: PropTypes.string,
    /** Sets the width of the input. Can be any valid CSS measurement */
    inputWidth: PropTypes.string,
    /** Text for the label above the SingleSelect */
    label: PropTypes.string,
    /** Applies a loading appearance to the dropdown options */
    loading: PropTypes.bool,
    /** Text to display when `loading` is true */
    loadingText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Constrains height of the SingleSelect */
    maxHeight: PropTypes.string,
    /** Text to display when there are no filter results */
    noMatchText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Placeholder text when the SingleSelect is empty */
    placeholder: PropTypes.string,
    /** Leading text to prefix selections */
    prefix: PropTypes.string,
    /** Indicates that a selection is required */
    required: PropTypes.bool,
    /** Selected item in the SingleSelect (the string should refer to the item's `value` attribute) */
    selected: PropTypes.string,
    tabIndex: PropTypes.string,
    /** Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props */
    valid: sharedPropTypes.statusPropType,
    /** Text to provide form validation feedback. Receives styles according to validation status */
    validationText: PropTypes.string,
    /** Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props */
    warning: sharedPropTypes.statusPropType,
    /** Called with signature `({ selected: string }, event)` */
    onBlur: PropTypes.func,
    /** Called with signature `({ selected: string }, event)` */
    onChange: PropTypes.func,
    /** Called with signature `({ selected: string }, event)` */
    onFocus: PropTypes.func,
}

export { SingleSelectField }
