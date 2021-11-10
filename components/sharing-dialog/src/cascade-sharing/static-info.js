import { colors } from '@dhis2/ui-constants'
import React from 'react'
import i18n from '../locales/index.js'

export const StaticInfo = () => {
    return (
        <>
            <p>
                {i18n.t(
                    'Applying the same sharing settings makes sure that users and groups that have access to the dashboard also have at least "View only" access to its visualizations (charts, tables, maps, event charts and event reports).'
                )}
            </p>
            <p>
                {i18n.t(
                    'If a user or group already has "View and edit" access to a visualization, this won\'t be reduced to "View only". The "All users" access level won\'t be updated or changed.'
                )}
            </p>
            <p>
                {i18n.t(
                    "Applying sharing can't be undone, and needs to be done again if new visualizations are added to the dashboard or its sharing settings are changed."
                )}
            </p>
            <style jsx>{`
                p {
                    font-size: 14px;
                    line-height: 19px;
                    color: ${colors.grey800};
                }
            `}</style>
        </>
    )
}
