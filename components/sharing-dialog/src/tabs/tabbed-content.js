import { TabBar, Tab } from '@dhis2-ui/tab'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AccessAdd } from '../access-add/index.js'
import { AccessList } from '../access-list/index.js'
import { CascadeSharing } from '../cascade-sharing/index.js'
import i18n from '../locales/index.js'

export const TabbedContent = ({
    type,
    users,
    groups,
    publicAccess,
    allowPublicAccess,
    id,
    onAdd,
    onChange,
    onRemove,
}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    if (type === 'visualization') {
        return (
            <>
                <AccessAdd onAdd={onAdd} />
                <AccessList
                    users={users}
                    groups={groups}
                    publicAccess={publicAccess}
                    allowPublicAccess={allowPublicAccess}
                    onChange={onChange}
                    onRemove={onRemove}
                />
            </>
        )
    }

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
                    <>
                        <AccessAdd onAdd={onAdd} />
                        <AccessList
                            users={users}
                            groups={groups}
                            publicAccess={publicAccess}
                            allowPublicAccess={allowPublicAccess}
                            onChange={onChange}
                            onRemove={onRemove}
                        />
                    </>
                )}
                {activeTabIndex === 1 && (
                    <CascadeSharing
                        id={id}
                        entityAmount={users.length + groups.length}
                    />
                )}
            </div>
            <style jsx>{`
                .tab-content {
                    padding-top: 15px;
                }
            `}</style>
        </>
    )
}

TabbedContent.propTypes = {
    allowPublicAccess: PropTypes.bool.isRequired,
    groups: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    publicAccess: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
