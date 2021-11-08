import PropTypes from 'prop-types'
import React from 'react'
import { getVisualizationsCount, getResultMessage } from './helpers.js'

export const ResultInfo = ({
    hasErrors,
    updatedItems,
    dashboardItems,
    itemsCount,
}) => {
    const visualizationsCount = getVisualizationsCount(dashboardItems)

    if (!visualizationsCount) {
        return null
    }

    const message = getResultMessage({
        visualizationsCount,
        itemsCount,
        hasErrors,
        updatedItems,
    })

    return <div>{message}</div>
}

ResultInfo.propTypes = {
    dashboardItems: PropTypes.array.isRequired,
    hasErrors: PropTypes.bool.isRequired,
    itemsCount: PropTypes.number.isRequired,
    updatedItems: PropTypes.number.isRequired,
}
