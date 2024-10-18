import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import Heading from '../sections/heading.js'
import List from '../sections/list.js'
import { escapeRegExpCharacters } from '../utils/escapeCharacters.js'
import SearchResults from './search-results.js'

function BrowseApps({ apps, filter }) {
    const filteredItems = apps.filter(({ displayName, name }) => {
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
                    <Heading heading={i18n.t('All Apps')} />
                    <List filteredItems={filteredItems} />
                </>
            )}
        </>
    )
}

BrowseApps.propTypes = {
    apps: PropTypes.array,
    filter: PropTypes.string,
}

export default BrowseApps
