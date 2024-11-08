import {
    useDataQuery,
    useDataEngine,
    useDhis2ConnectionStatus,
} from '@dhis2/app-runtime'
import { spacers } from '@dhis2/ui-constants'
import { Box } from '@dhis2-ui/box'
import { Button } from '@dhis2-ui/button'
import { NoticeBox } from '@dhis2-ui/notice-box'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import i18n from '../locales/index.js'
import { ResultInfo } from './result-info.js'
import { UpdateInfo } from './update-info.js'

const query = {
    dashboard: {
        resource: 'dashboards',
        id: ({ id }) => id,
        params: {
            fields: 'dashboardItems[type]',
        },
    },
}

export const Controls = ({ id, entityAmount }) => {
    const { isDisconnected: offline } = useDhis2ConnectionStatus()
    const { data, refetch } = useDataQuery(query, {
        variables: { id },
    })

    useEffect(() => {
        refetch({ id })
    }, [refetch, id])

    /**
     * The useDataMutation hook does not allow for a variable id,
     * so we're using the engine directly as a workaround.
     */

    const engine = useDataEngine()
    const [called, setCalled] = useState(false)
    const [mutating, setMutating] = useState(false)
    const [error, setError] = useState(null)
    const [mutationResult, setMutationResult] = useState(null)
    const mutation = {
        resource: `dashboards/cascadeSharing/${id}`,
        type: 'create',
    }
    const mutate = () => {
        setCalled(true)
        setMutating(true)
        setMutationResult(null)
        setError(null)
        engine
            .mutate(mutation)
            .then((data) => {
                setMutationResult(data)
            })
            .catch((e) => {
                setError(e.message || i18n.t('Something went wrong'))
            })
            .finally(() => {
                setMutating(false)
            })
    }

    const hasErrors = mutationResult?.errorReports?.length > 0
    const updatedItems = mutationResult?.countUpdatedDashboardItems

    return (
        <>
            {!called && <UpdateInfo id={id} entityAmount={entityAmount} />}
            {error && (
                <Box marginTop={spacers.dp12}>
                    <NoticeBox error>{error}</NoticeBox>
                </Box>
            )}
            {data && mutationResult && (
                <Box marginTop={spacers.dp12}>
                    <ResultInfo
                        hasErrors={hasErrors}
                        updatedItems={updatedItems}
                        dashboardItems={data.dashboard.dashboardItems}
                        itemsCount={data.dashboard.itemsCount}
                    />
                </Box>
            )}
            <Box marginTop={spacers.dp12}>
                <Button
                    type="button"
                    disabled={offline || mutating || !entityAmount}
                    loading={mutating}
                    secondary
                    onClick={mutate}
                >
                    {i18n.t('Apply sharing to dashboard visualizations')}
                </Button>
            </Box>
        </>
    )
}

Controls.propTypes = {
    entityAmount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
