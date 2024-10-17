/* eslint-disable no-unused-vars */
import { requiredIf } from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useRef, useState } from 'react'
import { Menu } from './menu.js'
import { SelectedValue } from './selected-value.js'
import { optionsProp } from './shared-prop-types.js'
import { useHandleKeyPress } from './use-handle-key-press.js'

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
    inputMaxHeight = '',
    labelledBy = '',
    loading = false,
    menuLoadingText = '',
    menuMaxHeight = '280px',
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
    onKeyDown = () => undefined,
}) {
    // Non-stateful
    // ========
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

    // Stateful
    // ========

    // Using `useState` here so components get notified when the value changes (from null -> div)
    const comboBoxRef = useRef()
    const [focussedOptionIndex, setFocussedOptionIndex] = useState(() => {
        const foundIndex = options.findIndex((option) => option.value === value)

        return foundIndex !== -1 ? foundIndex : 0
    })
    const [selectRef, setSelectRef] = useState()
    const [expanded, setExpanded] = useState(false)
    const closeMenu = useCallback(() => setExpanded(false), [])
    const openMenu = useCallback(() => setExpanded(true), [])
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
        onChange,
        expanded,
        options,
        openMenu,
        closeMenu,
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
                handleKeyPress={handleKeyPress}
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
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

SingleSelectA11y.propTypes = {
    /** necessary for IDs that are required for accessibility **/
    idPrefix: PropTypes.string.isRequired,

    /** An array of options **/
    options: optionsProp.isRequired,

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

    /** Whether a clear button should be displayed or not **/
    clearable: PropTypes.bool,

    /** A value for a `data-test` attribute on the root element **/
    dataTest: PropTypes.string,

    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    empty: PropTypes.node,
    error: sharedPropTypes.statusPropType,
    filterLabel: PropTypes.string,
    filterPlaceholder: PropTypes.string,
    filterValue: PropTypes.string,
    filterable: PropTypes.bool,
    inputMaxHeight: PropTypes.string,
    labelledBy: PropTypes.string,
    loading: PropTypes.bool,
    menuLoadingText: PropTypes.string,
    menuMaxHeight: PropTypes.string,
    noMatchText: requiredIf((props) => props.filterable, PropTypes.string),
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

    warning: sharedPropTypes.statusPropType,
    onBlur: PropTypes.func,
    onFilterChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
}
