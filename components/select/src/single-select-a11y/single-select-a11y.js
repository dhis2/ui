/* eslint-disable no-unused-vars */
import { requiredIf } from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useRef, useState } from 'react'
import { Menu } from './menu/index.js'
import { SelectedValue } from './selected-value/index.js'
import { optionProp } from './shared-prop-types.js'
import { useHandleKeyPress } from './use-handle-key-press/index.js'

export function SingleSelectA11y({
    options,
    idPrefix,
    onChange,
    autoFocus = false,
    className = '',
    clearText = '',
    clearable = false,
    dataTest = 'dhis2-singleselecta11y',
    dense = false,
    disabled = false,
    empty = false,
    error = false,
    filterLabel = '',
    filterPlaceholder = '',
    filterValue = '',
    filterable = false,
    labelledBy = '',
    loading = false,
    menuLoadingText = '',
    menuMaxHeight = '288px',
    noMatchText = '',
    placeholder = '',
    prefix = '',
    tabIndex = '0',
    valid = false,
    value = '',
    warning = false,
    valueLabel: _valueLabel = '',
    onBlur = () => undefined,
    onFilterChange = () => undefined,
    onFocus = () => undefined,
}) {
    const comboBoxId = `${idPrefix}-combo`
    const valueLabel =
        _valueLabel ||
        options.find((option) => option.value === value)?.label ||
        ''

    if (
        !valueLabel &&
        options.length &&
        !options.find((option) => option.value === '') &&
        !placeholder
    ) {
        throw new Error(
            'You must either provide a "valueLabel" or include an empty option in the options array'
        )
    }

    // Using `useState` here so components get notified when the value changes (from null -> div)
    const comboBoxRef = useRef()
    const listBoxRef = useRef()
    const [focussedOptionIndex, setFocussedOptionIndex] = useState(0)
    const [selectRef, setSelectRef] = useState()
    const [expanded, setExpanded] = useState(false)
    const closeMenu = useCallback(() => setExpanded(false), [])
    const openMenu = useCallback(() => {
        const selectedOptionIndex = options.findIndex(
            (option) => option.value === value
        )
        if (selectedOptionIndex !== focussedOptionIndex) {
            setFocussedOptionIndex(selectedOptionIndex)
        }

        setExpanded(true)
    }, [options, value, focussedOptionIndex])
    const toggleMenu = useCallback(() => {
        if (expanded) {
            closeMenu()
        } else {
            openMenu()
        }
    }, [expanded, openMenu, closeMenu])

    const selectFocussedOption = useCallback(() => {
        const option = options[focussedOptionIndex]

        if (option) {
            onChange(option.value)
        }
    }, [focussedOptionIndex, options, onChange])

    const handleKeyPress = useHandleKeyPress({
        value,
        disabled,
        onChange,
        expanded,
        options,
        openMenu,
        closeMenu,
        listBoxRef,
        focussedOptionIndex,
        setFocussedOptionIndex,
        selectFocussedOption,
    })

    return (
        <div
            className={cx('single-select-a11y', className)}
            data-test={dataTest}
            ref={(div) => {
                if (
                    // when setting the state (with `setSelectRef), this
                    // component will rerender and this function will be run
                    // again twice. The first call will provide a null-value
                    !div ||
                    // Making sure we're not setting state
                    // if we already have the correct element
                    div === selectRef
                ) {
                    return
                }

                setSelectRef(div)
            }}
        >
            <SelectedValue
                autoFocus={autoFocus}
                clearText={clearText}
                clearable={clearable}
                comboBoxRef={comboBoxRef}
                comboBoxId={comboBoxId}
                dataTest={dataTest}
                dense={dense}
                disabled={disabled}
                error={error}
                expanded={expanded}
                hasSelection={!!value}
                idPrefix={idPrefix}
                labelledBy={labelledBy}
                options={options}
                placeholder={placeholder}
                prefix={prefix}
                tabIndex={tabIndex.toString()}
                value={value}
                warning={warning}
                valid={valid}
                valueLabel={valueLabel}
                onBlur={onBlur}
                onClear={() => onChange('')}
                onClick={toggleMenu}
                onFocus={onFocus}
                onKeyPress={handleKeyPress}
            />

            <Menu
                comboBoxId={comboBoxId}
                disabled={disabled}
                empty={empty}
                filterLabel={filterLabel}
                filterable={filterable}
                filterValue={filterValue}
                filterPlaceholder={filterPlaceholder}
                focussedOptionIndex={focussedOptionIndex}
                hidden={!expanded}
                idPrefix={idPrefix}
                labelledBy={labelledBy}
                listBoxRef={listBoxRef}
                loading={loading}
                loadingText={menuLoadingText}
                maxHeight={menuMaxHeight}
                options={options}
                selectRef={selectRef}
                selected={value}
                onBlur={onBlur}
                onChange={(nextValue) => {
                    onChange(nextValue)
                    closeMenu()
                }}
                onClose={closeMenu}
                onFilterChange={onFilterChange}
            />
        </div>
    )
}

SingleSelectA11y.propTypes = {
    /** necessary for IDs that are required for accessibility **/
    idPrefix: PropTypes.string.isRequired,

    /** An array of options **/
    options: PropTypes.arrayOf(optionProp).isRequired,

    /** As of now, this component does not support being uncontrolled */
    value: PropTypes.string.isRequired,

    /** A callback that will be called with the new value or an empty string **/
    onChange: PropTypes.func.isRequired,

    /** Will focus the select initially **/
    autoFocus: PropTypes.bool,

    /** Additional class names that will be applied to the root element **/
    className: PropTypes.string,

    /** This will allow us to put an aria-label on the clear button **/
    clearText: requiredIf((props) => props.clearable, PropTypes.string),

    /** Whether a clear button should be displayed or not */
    clearable: PropTypes.bool,

    /** A value for a `data-test` attribute on the root element */
    dataTest: PropTypes.string,

    /** Renders a select with lower height **/
    dense: PropTypes.bool,

    /** Disables all interactions with the select (except focussing) */
    disabled: PropTypes.bool,

    /** Text or component to display when there are no options */
    empty: PropTypes.node,

    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props */
    error: sharedPropTypes.statusPropType,

    /** Value will be used as aria-label attribute on the filter input **/
    filterLabel: PropTypes.string,

    /** Placeholder for the filter input **/
    filterPlaceholder: PropTypes.string,

    /** Value of the filter input **/
    filterValue: PropTypes.string,

    /** Whether the select should display a filter input **/
    filterable: PropTypes.bool,

    /** Should contain the id of the element that labels the select, if applicable **/
    labelledBy: PropTypes.string,

    /** Will show a loading indicator at the end of the options-list **/
    loading: PropTypes.bool,

    /** Text that will be displayed next to the loading indicator **/
    menuLoadingText: PropTypes.string,

    /** Allows to modify the max height of the menu **/
    menuMaxHeight: PropTypes.string,

    /** String that will be displayed when the select is being filtered but the options array is empty **/
    noMatchText: requiredIf((props) => props.filterable, PropTypes.string),

    /** String to show when there's no value and no valueLabel **/
    placeholder: PropTypes.string,

    /** String that will be displayed before the label of the selected option **/
    prefix: PropTypes.string,

    /** Standard HTML tab-index attribute that will be put on the combobox's root element **/
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props */
    valid: sharedPropTypes.statusPropType,

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

    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props */
    warning: sharedPropTypes.statusPropType,

    /** Will be called when the combobox is loses focus */
    onBlur: PropTypes.func,

    /** Will be called when the filter value changes **/
    onFilterChange: PropTypes.func,

    /** Will be called when the combobox is being focused */
    onFocus: PropTypes.func,
}
