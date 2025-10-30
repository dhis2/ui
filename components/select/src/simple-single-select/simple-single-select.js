import { requiredIf } from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import i18n from '../locales/index.js'
import { Menu } from './menu/index.js'
import { SelectedValue } from './selected-value/index.js'
import { optionProp } from './shared-prop-types.js'
import {
    useHandleKeyPressOnCombobox,
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

export function SimpleSingleSelect({
    name,
    options,
    onChange,
    autoFocus = false,
    className = '',
    clearText: _clearText = '',
    clearable = false,
    optionComponent = undefined,
    dataTest = 'dhis2-simplesingleselect',
    dense = false,
    disabled = false,
    empty: _empty = false,
    error = false,
    filterHelpText = '',
    filterLabel = '',
    filterPlaceholder: _filterPlaceholder = '',
    filterValue = '',
    filterable = false,
    inputMaxHeight = '',
    labelledBy = '',
    loading = false,
    menuLoadingText: _menuLoadingText = '',
    menuMaxHeight = '288px',
    noMatchText: _noMatchText = '',
    optionUpdateStrategy = 'polite',
    placeholder = '',
    prefix = '',
    selected = { label: '', value: '' },
    tabIndex = '0',
    valid = false,
    warning = false,
    onBlur = () => undefined,
    onClear = () => undefined,
    onEndReached = () => undefined,
    onFilterChange = () => undefined,
    onFocus = () => undefined,
}) {
    // We can't translate with default props as the translation function would
    // be called before we get any translations from the consuming app/lib
    const clearText = _clearText || i18n.t('Clear')
    const empty = _empty || i18n.t('No data found')
    const filterPlaceholder =
        _filterPlaceholder || i18n.t('Type to filter options')
    const menuLoadingText = _menuLoadingText || i18n.t('Loading options')
    const noMatchText = _noMatchText || i18n.t('No options found')

    const comboBoxId = `${name}-combo`

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

    const selectedValue = selected?.value || ''
    const selectedLabel = selected?.label || ''
    const openMenu = useCallback(() => {
        const selectedOptionIndex = options.findIndex(
            (option) => option.value === selectedValue
        )
        if (selectedOptionIndex !== focussedOptionIndex) {
            setFocussedOptionIndex(selectedOptionIndex)
        }

        setExpanded(true)
    }, [options, selectedValue, focussedOptionIndex, setFocussedOptionIndex])

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
            onChange(option)
        }
    }, [focussedOptionIndex, options, onChange])

    const focusComboBox = useCallback(
        () => comboBoxRef.current?.focus(),
        [comboBoxRef]
    )

    const handleKeyDown = useHandleKeyPressOnCombobox({
        value: selectedValue,
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
        value: selectedValue,
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
            className={cx('simple-single-select', className)}
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
                hasSelection={!!selectedValue}
                inputMaxHeight={inputMaxHeight}
                labelledBy={labelledBy}
                name={name}
                placeholder={placeholder}
                prefix={prefix}
                tabIndex={tabIndex.toString()}
                warning={warning}
                valid={valid}
                selectedLabel={selectedLabel}
                onBlur={onBlur}
                onClear={onClear}
                onClick={toggleMenu}
                onFocus={onFocus}
                onKeyDown={handleKeyDown}
            />

            <Menu
                comboBoxId={comboBoxId}
                optionComponent={optionComponent}
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
                name={name}
                labelledBy={labelledBy}
                listBoxRef={listBoxRef}
                loading={loading}
                loadingText={menuLoadingText}
                maxHeight={menuMaxHeight}
                noMatchText={noMatchText}
                optionUpdateStrategy={optionUpdateStrategy}
                options={options}
                selectRef={selectRef}
                selectedValue={selectedValue}
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

SimpleSingleSelect.propTypes = {
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

    /** Max height of the container displaying the selected value **/
    inputMaxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

    /** Allows to override what's rendered inside the `button[role="option"]`.
     * Can be overriden on an individual option basis **/
    optionComponent: PropTypes.elementType,

    /** For a11y: How aggressively the user should be updated about changes in options **/
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),

    /** String to show when there's no selected option **/
    placeholder: PropTypes.string,

    /** String that will be displayed before the label of the selected option **/
    prefix: PropTypes.string,

    selected: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),

    /** Standard HTML tab-index attribute that will be put on the combobox's root element **/
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    valid: sharedPropTypes.statusPropType,

    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props **/
    warning: sharedPropTypes.statusPropType,

    /** Will be called when the combobox is loses focus **/
    onBlur: PropTypes.func,

    /** Will be called when the combobox is loses focus **/
    onClear: PropTypes.func,

    /** Will be called when the last option is scrolled into the visible area **/
    onEndReached: PropTypes.func,

    /** Will be called when the filter value changes **/
    onFilterChange: PropTypes.func,

    /** Will be called when the combobox is being focused **/
    onFocus: PropTypes.func,
}
