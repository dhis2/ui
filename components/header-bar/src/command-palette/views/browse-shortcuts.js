import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import Heading from '../sections/heading.js'
import List from '../sections/list.js'
import { escapeRegExpCharacters } from '../utils/escapeCharacters.js'
import SearchResults from './search-results.js'

function BrowseShortcuts({ shortcuts, filter }) {
    const filteredItems = shortcuts.filter(({ displayName, name }) => {
        const itemName = displayName || name
        const formattedItemName = itemName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedItemName.match(formattedFilter)
            : true
    })

    return (
        <>
            {filter.length > 0 && (
                <SearchResults filter={filter} filteredItems={filteredItems} />
            )}
            {filter.length < 1 && (
                <>
                    <Heading heading={i18n.t('All Shortcuts')} />
                    <List filteredItems={filteredItems} />
                </>
            )}
        </>
    )
}

BrowseShortcuts.propTypes = {
    filter: PropTypes.string,
    shortcuts: PropTypes.array,
}

export default BrowseShortcuts
