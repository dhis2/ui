import { Button } from '@dhis2-ui/button'
import {
    useDataQuery,
    useDataMutation,
    useOnlineStatus,
} from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import { ResultInfo } from './result-info.js'

const query = {
    dashboard: {
        resource: 'dashboards',
        id: ({ id }) => id,
        params: {
            fields: 'dashboardItems[type]',
        },
    },
}

const mutation = {
    resource: 'dashboards/cascadeSharing',
    id: ({ id }) => id,
    type: 'create',
}

export const Controls = ({ id, entityAmount }) => {
    const { offline } = useOnlineStatus()
    const mutationResult = useDataMutation(mutation)
    const queryResult = useDataQuery(query, {
        variables: { id },
    })

    const hasErrors = mutationResult.data?.errorReports?.length > 0
    const updatedItems = mutationResult.data?.countUpdatedDashboardItems

    return (
        <>
            {queryResult.data && mutationResult.data && (
                <ResultInfo
                    hasErrors={hasErrors}
                    updatedItems={updatedItems}
                    dashboardItems={queryResult.data.dashboard.dashboardItems}
                    itemsCount={queryResult.data.dashboard.itemsCount}
                />
            )}
            <Button
                type="button"
                disabled={offline || mutationResult.loading || !entityAmount}
                loading={mutationResult.loading}
                secondary
                onClick={() => mutationResult.mutate({ id })}
            >
                {i18n.t('Apply sharing to dashboard visualizations')}
            </Button>
        </>
    )
}

Controls.propTypes = {
    entityAmount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
