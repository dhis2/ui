import { TabBar, Tab } from '@dhis2-ui/tab'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AccessAdd } from '../access-add/index.js'
import { AccessList } from '../access-list/index.js'
import { CascadeSharing } from '../cascade-sharing/index.js'
import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    DIALOG_TYPES_LIST,
    DIALOG_TYPES,
} from '../constants.js'
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
    dataSharing,
    cascadeDashboardSharing,
}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    if (type === DIALOG_TYPES.DASHBOARD && cascadeDashboardSharing) {
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
                <div>
                    {activeTabIndex === 0 && (
                        <>
                            <AccessAdd
                                onAdd={onAdd}
                                dataSharing={dataSharing}
                            />
                            <AccessList
                                users={users}
                                groups={groups}
                                publicAccess={publicAccess}
                                allowPublicAccess={allowPublicAccess}
                                onChange={onChange}
                                onRemove={onRemove}
                                dataSharing={dataSharing}
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
            </>
        )
    }

    return (
        <>
            <AccessAdd onAdd={onAdd} dataSharing={dataSharing} />
            <AccessList
                users={users}
                groups={groups}
                publicAccess={publicAccess}
                allowPublicAccess={allowPublicAccess}
                onChange={onChange}
                onRemove={onRemove}
                dataSharing={dataSharing}
            />
        </>
    )
}

TabbedContent.propTypes = {
    allowPublicAccess: PropTypes.bool.isRequired,
    cascadeDashboardSharing: PropTypes.bool.isRequired,
    dataSharing: PropTypes.bool.isRequired,
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            access: PropTypes.shape({
                data: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
                metadata: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
            }).isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    id: PropTypes.string.isRequired,
    publicAccess: PropTypes.shape({
        data: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
        metadata: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
    }).isRequired,
    type: PropTypes.oneOf(DIALOG_TYPES_LIST).isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            access: PropTypes.shape({
                data: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
                metadata: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
            }).isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
