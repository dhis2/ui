import PropTypes from 'prop-types'
import React from 'react'
import Heading from '../sections/heading.js'
import List from '../sections/list.js'
import { escapeRegExpCharacters } from '../utils/escapeCharacters.js'

function ListView({ heading, itemsArray, filter, type }) {
    const filteredItems = itemsArray.filter(({ displayName, name }) => {
        const itemName = displayName || name
        const formattedItemName = itemName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedItemName.match(formattedFilter)
            : true
    })

    return (
        <div>
            <Heading
                filter={filter}
                filteredItems={filteredItems}
                heading={heading}
            />
            <List filteredItems={filteredItems} type={type} />
        </div>
    )
}

ListView.propTypes = {
    filter: PropTypes.string,
    heading: PropTypes.string,
    itemsArray: PropTypes.array,
    type: PropTypes.string,
}

export default ListView
