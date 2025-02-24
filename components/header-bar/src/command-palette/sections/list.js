import PropTypes from 'prop-types'
import React from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import ListItem from './list-item.js'

function List({ filteredItems, type }) {
    const { highlightedIndex } = useCommandPaletteContext()
    return (
        <div data-test="headerbar-list">
            {filteredItems.map(
                (
                    {
                        displayName,
                        name,
                        defaultAction,
                        icon,
                        description,
                        url,
                    },
                    idx
                ) => {
                    const isImage = typeof icon === 'string'
                    const isIcon = React.isValidElement(icon)
                    return (
                        <ListItem
                            type={type}
                            key={`app-${name}-${idx}`}
                            title={displayName || name}
                            path={defaultAction || url}
                            image={isImage ? icon : undefined}
                            icon={isIcon ? icon : undefined}
                            description={description}
                            highlighted={highlightedIndex === idx}
                        />
                    )
                }
            )}
        </div>
    )
}
List.propTypes = {
    filteredItems: PropTypes.array,
    type: PropTypes.string,
}

export default List
