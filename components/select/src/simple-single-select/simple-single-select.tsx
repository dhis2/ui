import cx from 'classnames'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import i18n from '../locales/index.js'
import { Menu } from './menu/index.ts'
import { SelectedValue } from './selected-value/index.ts'
import { OptionType } from './shared-prop-types.ts'
import {
    useHandleKeyPressOnCombobox,
    useHandleKeyPressOnFilterInput,
} from './use-handle-key-press/index.ts'

function useFocussedOptionIndex({
    filterable,
    filterValue,
    options,
}: {
    filterable: boolean
    filterValue: string
    options: OptionType[]
}): [number, (index: number) => void] {
    const [defaultFocussedOptionIndex, setDefaultFocussedOptionIndex] =
        useState(0)
    const [searchFocussedOptionIndex, setSearchFocussedOptionIndex] =
        useState(0)

    // We want to reset the focussed option index when searching when the
    // options change BUT we don't want to reset options when adding more
    // options by using the "infinite scrolling" strategy
    const initialized = useRef(false)
    const prevFirstOption = useRef<string | undefined>()
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

export interface SimpleSingleSelectProps {
    name: string
    options: OptionType[]
    onChange: (option: { label: string; value: string }) => void
    autoFocus?: boolean
    className?: string
    clearText?: string
    clearable?: boolean
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    empty?: React.ReactNode
    error?: boolean
    filterLabel?: string
    filterPlaceholder?: string
    filterValue?: string
    filterable?: boolean
    inputMaxHeight?: string | number
    labelledBy?: string
    loading?: boolean
    menuLoadingText?: string
    menuMaxHeight?: string
    noMatchText?: string
    optionComponent?: React.ElementType
    optionUpdateStrategy?: 'off' | 'polite' | 'assertive'
    placeholder?: string
    prefix?: string
    selected?: { label: string; value: string }
    tabIndex?: string | number
    valid?: boolean
    warning?: boolean
    onBlur?: (e: React.FocusEvent) => void
    onClear?: () => void
    onEndReached?: () => void
    onFilterChange?: (value: string) => void
    onFocus?: (e: React.FocusEvent) => void
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
}: SimpleSingleSelectProps) {
    // We can't translate with default props as the translation function would
    // be called before we get any translations from the consuming app/lib
    const clearText = _clearText || i18n.t('Clear')
    const empty = _empty || i18n.t('No data found')
    const filterPlaceholder =
        _filterPlaceholder || i18n.t('Type to filter options')
    const menuLoadingText = _menuLoadingText || i18n.t('Loading options')
    const noMatchText = _noMatchText || i18n.t('No options found')

    const comboBoxId = `${name}-combo`

    const comboBoxRef = useRef<HTMLDivElement>(null)
    const listBoxRef = useRef<HTMLDivElement>(null)
    const filterInputRef = useRef<HTMLInputElement>(null)
    const [focussedOptionIndex, setFocussedOptionIndex] =
        useFocussedOptionIndex({
            filterable,
            filterValue,
            options,
        })

    const [selectRef, setSelectRef] = useState<HTMLDivElement | null>(null)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (expanded && filterable) {
            requestAnimationFrame(() => {
                filterInputRef.current?.focus()
            })
        }
    }, [expanded, filterable])

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

        if (selectedOptionIndex === -1) {
            setFocussedOptionIndex(0)
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
        clearable,
        onClear,
        filterable,
        onFilterChange,
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
                filterLabel={filterLabel}
                filterPlaceholder={filterPlaceholder}
                filterRef={filterInputRef}
                filterable={filterable}
                filterValue={filterValue}
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
                onFilterChange={onFilterChange}
                onFilterInputKeyDown={handleKeyDownOnFilterInput}
                onFocus={onFocus}
                onKeyDown={handleKeyDown}
            />

            <Menu
                comboBoxId={comboBoxId}
                optionComponent={optionComponent}
                disabled={disabled}
                empty={empty}
                filterValue={filterValue}
                focussedOptionIndex={focussedOptionIndex}
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
                onBlur={onBlur}
                onChange={(nextValue) => {
                    onChange(nextValue)
                    closeMenu()
                }}
                onClose={closeMenu}
                onEndReached={onEndReached}
            />
        </div>
    )
}
