import { InputField } from '@dhis2-ui/input'
import { useOnlineStatus } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { createRef, useState, useLayoutEffect } from 'react'
import i18n from '../locales/index.js'
import { MenuWrapper } from './menu-wrapper.js'
import { SearchResults } from './search-results.js'

export const Autocomplete = ({
    label,
    placeholder,
    onChange,
    onClose,
    onSearch,
    dataTest,
    maxHeight,
    inputWidth,
    value,
    searchResults,
}) => {
    const inputRef = createRef()
    const menuRef = createRef()
    const { offline } = useOnlineStatus()
    const [menuWidth, setMenuWidth] = useState('auto')

    useLayoutEffect(() => {
        if (inputRef.current) {
            setMenuWidth(`${inputRef.current.offsetWidth}px`)
        }
    }, [])

    return (
        <div className="autocomplete-block" ref={menuRef}>
            <div ref={inputRef}>
                <InputField
                    label={label}
                    placeholder={placeholder}
                    onChange={({ value }) => {
                        onSearch(value)
                    }}
                    value={value}
                    inputWidth={inputWidth}
                    disabled={offline}
                    helpText={offline ? i18n.t('Not available offline') : ''}
                />
            </div>
            {searchResults.length > 0 && (
                <MenuWrapper
                    onClick={onClose}
                    maxHeight={maxHeight}
                    menuRef={menuRef}
                    menuWidth={menuWidth}
                    dataTest={`${dataTest}-menu`}
                >
                    <SearchResults
                        searchResults={searchResults}
                        onClick={({ value }) => {
                            onChange(value)
                        }}
                    />
                </MenuWrapper>
            )}
        </div>
    )
}

Autocomplete.defaultProps = {
    dataTest: 'dhis2-sharingdialog-autocomplete',
}

Autocomplete.propTypes = {
    searchResults: PropTypes.array.isRequired,
    dataTest: PropTypes.string,
    inputWidth: PropTypes.string,
    label: PropTypes.string,
    maxHeight: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    onSearch: PropTypes.func,
}
