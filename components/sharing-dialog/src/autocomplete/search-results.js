import { Menu, MenuItem } from '@dhis2-ui/menu'
import PropTypes from 'prop-types'
import React from 'react'

export const SearchResults = ({ searchResults, onClick }) => (
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
