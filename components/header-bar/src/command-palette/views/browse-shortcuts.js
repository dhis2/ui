import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import Heading from '../sections/heading.js'
import List from '../sections/list.js'
import SearchResults from './search-results.js'

function BrowseShortcuts({ shortcuts, filter }) {
    return (
        <>
            {filter.length > 0 && (
                <SearchResults filter={filter} filteredItems={shortcuts} />
            )}
            {filter.length < 1 && (
                <>
                    <Heading heading={i18n.t('All Shortcuts')} />
                    <List filteredItems={shortcuts} />
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
