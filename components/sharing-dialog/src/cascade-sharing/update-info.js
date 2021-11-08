import { useDataQuery } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import { IconInfo16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import { getVisualizationsCount } from './helpers.js'

const query = {
    dashboard: {
        resource: 'dashboards',
        id: ({ id }) => id,
        params: {
            fields: 'dashboardItems[type]',
        },
    },
}

const getInfoMessage = ({ entityAmount, visualizationsCount }) => {
    if (entityAmount === 0) {
        return i18n.t(
            'There are no users, groups or roles to apply sharing settings for.'
        )
    }

    const first = i18n.t(
        '{{count}} visualization on this dashboard will potentially get updated sharing settings.',
        {
            count: visualizationsCount,
            defaultValue:
                '{{count}} visualization on this dashboard will potentially get updated sharing settings.',
            defaultValue_plural:
                'All {{count}} visualizations on this dashboard will potentially get updated sharing settings.',
        }
    )

    const second = i18n.t(
        'These updated sharing settings will apply to {{count}} user or group.',
        {
            count: entityAmount,
            defaultValue:
                'These updated sharing settings will apply to {{count}} user or group.',
            defaultValue_plural:
                'These updated sharing settings will apply to {{count}} users or groups.',
        }
    )

    return `${first} ${second}`
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
