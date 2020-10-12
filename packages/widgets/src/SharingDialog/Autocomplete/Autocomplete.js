import React, { createRef, useState, useEffect } from 'react'
import propTypes from '@dhis2/prop-types'

import { Menu, MenuItem } from '@dhis2/ui'

import { InputField } from '../../'
import { MenuWrapper } from './MenuWrapper'

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
    searchResults: propTypes.array,
    onClick: propTypes.func,
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

    const [menuWidth, setMenuWidth] = useState('auto')

    useEffect(() => {
        if (inputRef.current) {
            setMenuWidth(`${inputRef.current.offsetWidth}px`)
        }
    }, [])

    // TODO debounce
    const onInputChange = ({ value }) => {
        onSearch(value)
    }

    const onSelect = ({ value }) => {
        onChange(value)
    }

    return (
        <div className="autocomplete-block" ref={menuRef}>
            <div ref={inputRef}>
                <InputField
                    label={label}
                    placeholder={placeholder}
                    onChange={onInputChange}
                    value={value}
                    inputWidth={inputWidth}
                />
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
    dataTest: propTypes.string,
    inputWidth: propTypes.string,
    label: propTypes.string,
    maxHeight: propTypes.string,
    placeholder: propTypes.string,
    searchResults: propTypes.array,
    value: propTypes.string,
    onChange: propTypes.func,
    onClose: propTypes.func,
    onSearch: propTypes.func,
}
