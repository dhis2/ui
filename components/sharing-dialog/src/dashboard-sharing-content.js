import { TabBar, Tab } from '@dhis2-ui/tab'
import PropTypes from '@dhis2/prop-types'
import React, { useState } from 'react'
import { DashboardCascadeSharingContent } from './dashboard-cascade-sharing-content.js'
import { DefaultSharingContent } from './default-sharing-content.js'
import i18n from './locales/index.js'
import { dashboardSharingStyles } from './sharing-dialog.styles.js'

export const DashboardSharingContent = ({
    sharingSettings,
    onAdd,
    onChange,
    onRemove,
}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    return (
        <>
            <TabBar>
                <Tab
                    onClick={() => setActiveTabIndex(0)}
                    selected={activeTabIndex === 0}
                >
                    {i18n.t('Dashboard sharing')}
                </Tab>
                <Tab
                    onClick={() => setActiveTabIndex(1)}
                    selected={activeTabIndex === 1}
                >
                    {i18n.t('Apply sharing to dashboard visualizations')}
                </Tab>
            </TabBar>
            <div className="tab-content">
                {activeTabIndex === 0 && (
                    <DefaultSharingContent
                        sharingSettings={sharingSettings}
                        onAdd={onAdd}
                        onChange={onChange}
                        onRemove={onRemove}
                    />
                )}
                {activeTabIndex === 1 && (
                    <DashboardCascadeSharingContent
                        sharingSettings={sharingSettings}
                    />
                )}
            </div>
            <style jsx>{dashboardSharingStyles}</style>
        </>
    )
}

DashboardSharingContent.propTypes = {
    sharingSettings: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
