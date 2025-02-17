import PropTypes from 'prop-types'
import React from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import ListItem from './list-item.js'

function BackActionItem({ actionProps }) {
    const { highlightedIndex } = useCommandPaletteContext()
    const { name, icon, dataTest, action } = actionProps
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
    actionProps: PropTypes.shape({
        action: PropTypes.func,
        dataTest: PropTypes.string,
        icon: PropTypes.element,
        name: PropTypes.string,
    }),
}

export default BackActionItem
