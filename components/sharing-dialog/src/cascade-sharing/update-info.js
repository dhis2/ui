import { NoticeBox } from '@dhis2-ui/notice-box'
import { useDataQuery } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'
import { getVisualizationsCount, getInfoMessage } from './helpers.js'

const query = {
    dashboard: {
        resource: 'dashboards',
        id: ({ id }) => id,
        params: {
            fields: 'dashboardItems[type]',
        },
    },
}

export const UpdateInfo = ({ id, entityAmount }) => {
    const { data, loading } = useDataQuery(query, {
        variables: { id },
    })

    if (loading) {
        return null
    }

    const { dashboard } = data
    const visualizationsCount = getVisualizationsCount(dashboard.dashboardItems)

    if (!visualizationsCount) {
        return null
    }

    const message = getInfoMessage({ visualizationsCount, entityAmount })

    return <NoticeBox>{message}</NoticeBox>
}

UpdateInfo.propTypes = {
    entityAmount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
