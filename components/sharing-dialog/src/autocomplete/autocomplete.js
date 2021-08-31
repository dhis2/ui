import { InputField } from '@dhis2-ui/input'
import { Menu, MenuItem } from '@dhis2-ui/menu'
import { Tooltip } from '@dhis2-ui/tooltip'
import { useOnlineStatus } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from '@dhis2/prop-types'
import React, { createRef, useState, useEffect } from 'react'
import { MenuWrapper } from './menu-wrapper'

// Keycodes for the keypress event handlers
// XXX implement keyboard navigation in the Menu ?!
/*const ESCAPE_KEY = 27
const SPACE_KEY = 32
const UP_KEY = 38
const DOWN_KEY = 40
*/

// XXX pass this whole component or the one that renders the MenuItem
// from the app/parent to make it as flexible as possible
const SearchResults = ({ searchResults, onClick }) => (
    <Menu>
        {searchResults.map(searchResult => (
            <MenuItem
                key={searchResult.id}
                label={searchResult.displayName}
                value={searchResult.id}
                onClick={onClick}
            />
        ))}
    </Menu>
)

SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

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

    const AutocompleteField = () => (
        <InputField
            label={label}
            placeholder={placeholder}
            onChange={onInputChange}
            value={value}
            inputWidth={inputWidth}
            disabled={offline}
        />
    )

    return (
        <div className="autocomplete-block" ref={menuRef}>
            <div ref={inputRef}>
                {offline ? (
                    <Tooltip content={i18n.t('Not available offline')}>
                        <AutocompleteField />
                    </Tooltip>
                ) : (
                    <AutocompleteField />
                )}
            </div>
            {Boolean(searchResults.length) && (
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
    dataTest: 'dhis2-uicore-select',
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
