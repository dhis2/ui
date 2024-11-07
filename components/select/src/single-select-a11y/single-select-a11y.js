import { requiredIf } from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Menu } from './menu/index.js'
import { SelectedValue } from './selected-value/index.js'
import { optionProp } from './shared-prop-types.js'
import {
    useHandleKeyPress,
    useHandleKeyPressOnFilterInput,
} from './use-handle-key-press/index.js'

function useFocussedOptionIndex({ filterable, filterValue, options }) {
    const [defaultFocussedOptionIndex, setDefaultFocussedOptionIndex] =
        useState(0)
    const [searchFocussedOptionIndex, setSearchFocussedOptionIndex] =
        useState(0)

    // We want to reset the focussed option index when searching when the
    // options change BUT we don't want to reset options when adding more
    // options by using the "infinite scrolling" strategy
    const initialized = useRef(false)
    const prevFirstOption = useRef()
    useEffect(() => {
        // Ignore first call to prevent unnecessary re-render
        if (!initialized.current) {
            initialized.current = true
            prevFirstOption.current = options[0]?.value
        } else if (
            filterable &&
            prevFirstOption.current !== options[0]?.value
        ) {
            prevFirstOption.current = options[0]?.value
            setSearchFocussedOptionIndex(0)
        }
    }, [options, filterable, initialized, prevFirstOption])

    const focussedOptionIndex = useMemo(() => {
        return filterValue
            ? searchFocussedOptionIndex
            : defaultFocussedOptionIndex
    }, [defaultFocussedOptionIndex, searchFocussedOptionIndex, filterValue])

    const setFocussedOptionIndex = useMemo(() => {
        return filterValue
            ? setSearchFocussedOptionIndex
            : setDefaultFocussedOptionIndex
    }, [filterValue])

    return [focussedOptionIndex, setFocussedOptionIndex]
}

export function SingleSelectA11y({
    options,
    idPrefix,
    onChange,
    autoFocus = false,
    className = '',
    clearText = '',
    clearable = false,
    customOption = undefined,
    dataTest = 'dhis2-singleselecta11y',
    dense = false,
    disabled = false,
    empty = false,
    error = false,
    filterHelpText = '',
    filterLabel = '',
    filterPlaceholder = '',
    filterValue = '',
    filterable = false,
    labelledBy = '',
    loading = false,
    menuLoadingText = '',
    menuMaxHeight = '288px',
    noMatchText = '',
    optionUpdateStrategy = 'polite',
    placeholder = '',
    prefix = '',
    tabIndex = '0',
    valid = false,
    value = '',
    warning = false,
    valueLabel: _valueLabel = '',
    onBlur = () => undefined,
    onEndReached = () => undefined,
    onFilterChange = () => undefined,
    onFocus = () => undefined,
}) {
    const comboBoxId = `${idPrefix}-combo`
    const valueLabel =
        _valueLabel ||
        options.find((option) => option.value === value)?.label ||
        ''

    if (
        value &&
        !valueLabel &&
        options.length &&
        !options.find((option) => option.value === '') &&
        !placeholder
    ) {
        throw new Error(
            'You must either provide a "valueLabel" or include an empty option in the options array'
        )
    }

    const comboBoxRef = useRef()
    const listBoxRef = useRef()
    const [focussedOptionIndex, setFocussedOptionIndex] =
        useFocussedOptionIndex({
            filterable,
            filterValue,
            options,
        })

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
    }, [options, value, focussedOptionIndex, setFocussedOptionIndex])
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

    const focusComboBox = useCallback(
        () => comboBoxRef.current?.focus(),
        [comboBoxRef]
    )

    const handleKeyDown = useHandleKeyPress({
        value,
        disabled,
        onChange,
        expanded,
        loading,
        options,
        openMenu,
        closeMenu,
        listBoxRef,
        focussedOptionIndex,
        setFocussedOptionIndex,
        selectFocussedOption,
    })

    const handleKeyDownOnFilterInput = useHandleKeyPressOnFilterInput({
        value,
        options,
        loading,
        closeMenu,
        listBoxRef,
        focusComboBox,
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
                onKeyDown={handleKeyDown}
            />

            <Menu
                comboBoxId={comboBoxId}
                customOption={customOption}
                disabled={disabled}
                empty={empty}
                filterHelpText={filterHelpText}
                filterLabel={filterLabel}
                filterable={filterable}
                filterValue={filterValue}
                filterPlaceholder={filterPlaceholder}
                focussedOptionIndex={focussedOptionIndex}
                onFilterInputKeyDown={handleKeyDownOnFilterInput}
                hidden={!expanded}
                idPrefix={idPrefix}
                labelledBy={labelledBy}
                listBoxRef={listBoxRef}
                loading={loading}
                loadingText={menuLoadingText}
                maxHeight={menuMaxHeight}
                noMatchText={noMatchText}
                optionUpdateStrategy={optionUpdateStrategy}
                options={options}
                selectRef={selectRef}
                selected={value}
                tabIndex={tabIndex.toString()}
                onBlur={onBlur}
                onChange={(nextValue) => {
                    onChange(nextValue)
                    closeMenu()
                }}
                onClose={closeMenu}
                onEndReached={onEndReached}
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

    /** For a11y: How aggressively the user should be updated about changes in options **/
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),

    /** String to show when there's no value and no valueLabel **/
    placeholder: PropTypes.string,

    /** String that will be displayed before the label of the selected option **/
    prefix: PropTypes.string,

    /** Standard HTML tab-index attribute that will be put on the combobox's root element **/
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    valid: sharedPropTypes.statusPropType,

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
