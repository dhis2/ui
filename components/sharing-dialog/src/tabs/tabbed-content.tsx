import { TabBar, Tab } from '@dhis2-ui/tab'
import React, { useState } from 'react'
import { AccessAdd } from '../access-add/index.ts'
import { AccessList } from '../access-list/index.ts'
import { CascadeSharing } from '../cascade-sharing/index.ts'
import {
    DIALOG_TYPES,
} from '../constants.ts'
import type { AccessType, DialogType } from '../constants.ts'
import i18n from '../locales/index.js'

interface AccessObject {
    data: AccessType
    metadata: AccessType
}

interface GroupOrUser {
    id: string
    name: string
    access: AccessObject
}

export interface TabbedContentProps {
    type: DialogType
    users: GroupOrUser[]
    groups: GroupOrUser[]
    publicAccess: AccessObject
    allowPublicAccess: boolean
    id: string
    onAdd: (payload: {
        type: string
        id: string
        name: string
        access: { data: AccessType; metadata: AccessType }
    }) => void
    onChange: (change: {
        type: string
        id?: string
        access: AccessObject
    }) => void
    onRemove: (change: { type: string; id: string }) => void
    dataSharing: boolean
    cascadeDashboardSharing: boolean
    metadataSharing?: boolean
}

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
    metadataSharing = true,
}: TabbedContentProps) => {
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
                                metadataSharing={metadataSharing}
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
            <AccessAdd
                onAdd={onAdd}
                dataSharing={dataSharing}
                metadataSharing={metadataSharing}
            />
            <AccessList
                users={users}
                groups={groups}
                publicAccess={publicAccess}
                allowPublicAccess={allowPublicAccess}
                onChange={onChange}
                onRemove={onRemove}
                dataSharing={dataSharing}
                metadataSharing={metadataSharing}
            />
        </>
    )
}
