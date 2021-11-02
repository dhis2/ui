import { Button } from '@dhis2-ui/button'
import { useDataMutation, useOnlineStatus } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

const mutation = {
    resource: 'dashboards/cascadeSharing',
    id: ({ id }) => id,
    type: 'create',
}

export const Controls = ({ id, entityAmount }) => {
    const { offline } = useOnlineStatus()
    const [mutate, { loading }] = useDataMutation(mutation)

    return (
        <Button
            type="button"
            disabled={offline || loading || !entityAmount}
            loading={loading}
            secondary
            onClick={() => mutate({ id })}
        >
            {i18n.t('Apply sharing to dashboard visualizations')}
        </Button>
    )
}

Controls.propTypes = {
    entityAmount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
