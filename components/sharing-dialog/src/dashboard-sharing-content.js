import { TabBar, Tab } from '@dhis2-ui/tab'
import i18n from '@dhis2/d2-i18n'
import PropTypes from '@dhis2/prop-types'
import React, { useState } from 'react'
import { DashboardAutoShareContent } from './dashboard-auto-share-content.js'
import { DefaultSharingContent } from './default-sharing-content.js'
import { dashboardSharingStyles } from './sharing-dialog.styles'

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
                    {i18n.t('Auto-share dashboard items')}
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
                    <DashboardAutoShareContent
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
