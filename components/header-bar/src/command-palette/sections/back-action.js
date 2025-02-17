import PropTypes from 'prop-types'
import React from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import ListItem from './list-item.js'

function BackActionItem({ actions }) {
    const { highlightedIndex } = useCommandPaletteContext()
    const { name, icon, dataTest, action } = actions?.[0]
    const backActionIndexInListView = 0

    return (
        <ListItem
            key={'back-action-item'}
            title={name}
            icon={icon}
            dataTest={dataTest}
            onClickHandler={action}
            highlighted={highlightedIndex === backActionIndexInListView}
        />
    )
}

BackActionItem.propTypes = {
    actions: PropTypes.array,
}

export default BackActionItem
