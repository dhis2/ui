import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import Heading from '../sections/heading.js'
import List from '../sections/list.js'
import SearchResults from './search-results.js'

function BrowseApps({ apps, filter }) {
    return (
        <>
            {filter.length > 0 && (
                <SearchResults filter={filter} filteredItems={apps} />
            )}
            {filter.length < 1 && (
                <>
                    <Heading heading={i18n.t('All Apps')} />
                    <List filteredItems={apps} />
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
