import { InputField } from '@dhis2-ui/input'
import { useOnlineStatus } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { createRef, useState, useEffect } from 'react'
import { ConditionalTooltip } from '../conditional-tooltip.js'
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

    useEffect(() => {
        if (inputRef.current) {
            setMenuWidth(`${inputRef.current.offsetWidth}px`)
        }
    }, [])

    const onInputChange = ({ value }) => {
        onSearch(value)
    }

    const onSelect = ({ value }) => {
        onChange(value)
    }

    return (
        <div className="autocomplete-block" ref={menuRef}>
            <div ref={inputRef}>
                <ConditionalTooltip
                    show={offline}
                    content={i18n.t('Not available offline')}
                >
                    <InputField
                        label={label}
                        placeholder={placeholder}
                        onChange={onInputChange}
                        value={value}
                        inputWidth={inputWidth}
                        disabled={offline}
                    />
                </ConditionalTooltip>
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
                        onClick={onSelect}
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
