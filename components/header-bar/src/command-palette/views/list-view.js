import PropTypes from 'prop-types'
import React from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import List from '../sections/list.js'
import EmptySearchResults from '../sections/search-results.js'

function ListView({ filteredItems, actions }) {
    const { filter } = useCommandPaletteContext()
    const backAction = actions?.[0]

    return filteredItems.length > 0 ? (
        <List filteredItems={filteredItems} backAction={backAction} />
    ) : (
        filter && <EmptySearchResults />
    )
}

ListView.propTypes = {
    actions: PropTypes.array,
    filteredItems: PropTypes.array,
}

export default ListView
