import PropTypes from 'prop-types'
import React from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import ListItem from './list-item.js'

function List({ filteredItems, type }) {
    const { highlightedIndex, setHighlightedIndex } = useCommandPaletteContext()
    return (
        <div data-test="headerbar-list">
            {filteredItems.map(
                (
                    { displayName, name, defaultAction, icon, description },
                    idx
                ) => (
                    <ListItem
                        type={type}
                        key={`app-${name}-${idx}`}
                        title={displayName || name}
                        path={defaultAction}
                        image={icon}
                        description={description}
                        highlighted={highlightedIndex === idx}
                        handleMouseEnter={() => setHighlightedIndex(idx)}
                    />
                )
            )}
        </div>
    )
}
List.propTypes = {
    filteredItems: PropTypes.array,
    type: PropTypes.string,
}

export default List
