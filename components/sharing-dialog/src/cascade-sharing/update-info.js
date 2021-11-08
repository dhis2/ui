import { useDataQuery } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import { IconInfo16 } from '@dhis2/ui-icons'
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

    return (
        <div className="box-block">
            <div className="box box-info">
                <IconInfo16 color={colors.grey900} />
                <span className="box-text">{message}</span>
            </div>
            <style jsx>{`
                .title {
                    font-size: 16px;
                    color: ${colors.grey900};
                    font-weight: 500;
                }

                .description {
                    margin: 8px 0 13px 0;
                    font-size: 14px;
                    line-height: 19px;
                    color: ${colors.grey800};
                }

                .box-block {
                    display: block;
                }

                .box {
                    display: inline-flex;
                    margin-bottom: 14px;
                    border-radius: 3px;
                    padding: 8px 8px 6px 8px;
                }
                .box-text {
                    padding-left: 6px;
                    font-size: 14px;
                    color: ${colors.grey900};
                    line-height: 19px;
                }

                .box-info {
                    background-color: ${colors.grey200};
                }

                .box-success {
                    background-color: ${colors.green100};
                }

                .result-box {
                    margin-top: 14px;
                }

                .loading {
                    display: flex;
                    align-items: center;
                    color: ${colors.grey800};
                    font-size: 14px;
                    line-height: 19px;
                }
            `}</style>
        </div>
    )
}

UpdateInfo.propTypes = {
    entityAmount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
