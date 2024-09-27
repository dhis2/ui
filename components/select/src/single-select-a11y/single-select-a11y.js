import { requiredIf } from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { Context } from './context.js'
import { Menu } from './menu.js'
import { SelectedValue } from './selected-value.js'

export function SingleSelectA11y({
    options,
    idPrefix,
    onChange: _onChange,
    className,
    labelledBy,
    value,
    tabIndex,
    onKeyDown,
    onBlur,
    error,
    warning,
    valid,
    disabled,
    dense,
    clearable,
    placeholder,
    prefix,
    dataTest,
    maxHeight,
    onFocus,
    valueLabel,

    inputMaxHeight,
    loading,
    clearText,

    filterable,
    filterValue,
    onFilterChange,
    filterPlaceholder,

    empty,
    loadingText,
    noMatchText,
    initialFocus,
}) {
    // Non-stateful
    const comboBoxId = `combo-${idPrefix}`

    // Stateful
    // ========

    // Using `useState` here so components get notified when the value changes (from null -> div)
    const [selectRef, setSelectRef] = useState()
    const comboBoxRef = useRef()
    const [expanded, setExpanded] = useState(false)

    // Callbacks
    const closeMenu = useCallback(() => setExpanded(false), [])
    const toggleMenu = useCallback(() => setExpanded((prevExpanded) => !prevExpanded), [])
    const focusCombo = useCallback(() => comboBoxRef.current?.focus(), [])
    const blurCombo = useCallback(() => comboBoxRef.current?.blur(), [])
    const onComboKeyDown = useCallback(() => null, []) // @TODO: Rename me!
    const onChange = useCallback((nextValue) => {
        _onChange(nextValue)
        closeMenu()
    }, [closeMenu, _onChange])

    return (
        <Context.Provider value={{ comboBoxId }}>
            <div
                className={cx('single-select-a11y', className)}
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
                    comboBoxRef={comboBoxRef}
                    idPrefix={idPrefix}
                    expanded={expanded}
                    labelledBy={labelledBy}
                    comboBoxId={comboBoxId}
                    tabIndex={tabIndex.toString()}
                    onFocus={onFocus}
                    onBlur={blurCombo}
                    prefix={prefix}
                    dataTest={dataTest}
                    placeholder={placeholder}
                    value={value}
                    options={options}
                    onClear={() => onChange('')}
                    clearText={clearText}
                    clearable={clearable}
                    disabled={disabled}
                    hasSelection={!!value}
                    valueLabel={valueLabel}
                    onClick={toggleMenu}
                    error={error}
                    warning={warning}
                    valid={valid}
                    disabled={disabled}
                    dense={dense}
                />

                <Menu
                    idPrefix={idPrefix}
                    onBlur={onBlur}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    options={options}
                    selected={value}
                    hidden={!expanded}
                    labelledBy={labelledBy}
                    onClose={closeMenu}
                    selectRef={selectRef}
                    maxHeight={maxHeight}
                    disabled={disabled}
                    filterable={filterable}
                    filterValue={filterValue}
                    onFilterChange={onFilterChange}
                    filterPlaceholder={filterPlaceholder}
                />
            </div>
        </Context.Provider>
    )
}

SingleSelectA11y.defaultProps = {
    dataTest: 'dhis2-uicore-singleselect',
    value: '',
    tabIndex: 0,
}

SingleSelectA11y.propTypes = {
    idPrefix: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
    ).isRequired,

    className: PropTypes.string,
    /** Text on button that clears selection. Required if `clearable` prop is true */
    clearText: requiredIf((props) => props.clearable, PropTypes.string),
    /** Adds a button to clear selection */
    clearable: PropTypes.bool,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    /** Text or component to display when there are no options */
    empty: PropTypes.node,
    /** Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props */
    error: sharedPropTypes.statusPropType,

    /** Adds a filter field to add text to filter options */
    filterable: PropTypes.bool,
    filterValue: PropTypes.string,
    onFilterChange: PropTypes.func,
    filterPlaceholder: PropTypes.string,
    /** Text to show when filter returns no results. Required if `filterable` prop is true */
    noMatchText: requiredIf((props) => props.filterable, PropTypes.string),

    initialFocus: PropTypes.bool,
    inputMaxHeight: PropTypes.string,
    labelledBy: PropTypes.string,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    maxHeight: PropTypes.string,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,

    value: PropTypes.string,
    // This is done so that when the options are filtered,
    // we still have access to the selected option's label
    valueLabel: PropTypes.string,

    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `error` props */
    valid: sharedPropTypes.statusPropType,
    /** Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props */
    warning: sharedPropTypes.statusPropType,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
}
