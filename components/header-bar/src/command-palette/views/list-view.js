import PropTypes from 'prop-types'
import React from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import BackActionItem from '../sections/back-action.js'
import List from '../sections/list.js'
import EmptySearchResults from '../sections/search-results.js'

function ListView({ filteredItems, actions }) {
    const { filter } = useCommandPaletteContext()

    return filteredItems.length > 0 ? (
        <>
            {!filter ? <BackActionItem actions={actions} /> : null}
            <List filteredItems={filteredItems} />
        </>
    ) : (
        filter && <EmptySearchResults />
    )
}

ListView.propTypes = {
    actions: PropTypes.array,
    filteredItems: PropTypes.array,
}

export default ListView
