import PropTypes from 'prop-types'
import React from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { HOME_VIEW } from '../utils/constants.js'
import BackActionItem from './back-action.js'
import ListItem from './list-item.js'

function List({ filteredItems, backAction }) {
    const { currentView, highlightedIndex, filter } = useCommandPaletteContext()
    const showBackAction = currentView !== HOME_VIEW && !filter

    return (
        <div data-test="headerbar-list">
            {showBackAction ? (
                <BackActionItem actionProps={backAction} />
            ) : null}
            {filteredItems.map(
                (
                    {
                        displayName,
                        name,
                        defaultAction,
                        icon,
                        description,
                        url,
                        type,
                    },
                    idx
                ) => {
                    const isImage = typeof icon === 'string'
                    const isIcon = React.isValidElement(icon)
                    const index = showBackAction ? idx + 1 : idx

                    return (
                        <ListItem
                            type={type}
                            key={`app-${name}-${idx}`}
                            title={displayName || name}
                            path={defaultAction || url}
                            image={isImage ? icon : undefined}
                            icon={isIcon ? icon : undefined}
                            description={description}
                            highlighted={highlightedIndex === index}
                        />
                    )
                }
            )}
        </div>
    )
}
List.propTypes = {
    backAction: PropTypes.object,
    filteredItems: PropTypes.array,
}

export default List
