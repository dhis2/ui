import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import Heading from '../sections/heading.js'
import List from '../sections/list.js'
import SearchResults from './search-results.js'

function BrowseCommands({ commands, filter, type }) {
    return (
        <>
            {filter.length > 0 && (
                <SearchResults filter={filter} filteredItems={commands} />
            )}
            {filter.length < 1 && (
                <>
                    <Heading heading={i18n.t('All Commands')} />
                    <List filteredItems={commands} type={type} />
                </>
            )}
        </>
    )
}

BrowseCommands.propTypes = {
    commands: PropTypes.array,
    filter: PropTypes.string,
    type: PropTypes.string,
}

export default BrowseCommands
