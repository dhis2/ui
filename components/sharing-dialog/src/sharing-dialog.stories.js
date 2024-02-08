import { CustomDataProvider } from '@dhis2/app-runtime'
import React, { useEffect } from 'react'
import { SharingDialog } from './sharing-dialog.js'

const subtitle = 'The common dialog for managing object sharing in DHIS2 apps'

const description = `
The sharing dialog can be used in different apps that use the standard object API, like visualizations, dashboards...

It allows to view and edit the sharing settings for the given object.

\`\`\`js
import { SharingDialog } from '@dhis2/ui'
\`\`\`
`
export default {
    title: 'Sharing Dialog',
    component: SharingDialog,
    parameters: {
        componentSubtitle: subtitle,
        docs: {
            // Use iframes to contain modals in docs page (otherwise chaos ensues)
            inlineStories: false,
            iframeHeight: '620px',
            /**
             * Due to iframes being very slow, disable stories on the docs page by default and
             * make one representative story as the primary ('Simple')
             */
            disable: true,
            description: { component: description },
        },
    },
    // Default args for stories
    args: {
        type: 'visualization',
        id: 'sharing-test',
        onClose: Function.prototype,
    },
}

const customSearchData = {
    'sharing/search': {
        userGroups: [
            {
                id: 'wl5cDMuUhmF',
                name: 'Administrators',
                displayName: 'Administrators',
            },
            {
                id: 'lFHP5lLkzVr',
                name: 'System administrators',
                displayName: 'System administrators',
            },
            {
                id: 'zz6XckBrLlj',
                name: '_DATASET_System administrator (ALL)',
                displayName: '_DATASET_System administrator (ALL)',
            },
            {
                id: 'vRoAruMnNpB',
                name: '_PROGRAM_MNCH / PNC (Adult Woman) program',
                displayName: '_PROGRAM_MNCH / PNC (Adult Woman) program',
            },
            {
                id: 'pBnkuih0c1K',
                name: '_PROGRAM_System administrator (ALL)',
                displayName: '_PROGRAM_System administrator (ALL)',
            },
        ],
        users: [
            {
                id: 'xE7jOejl9FI',
                name: 'John Traore',
                displayName: 'John Traore',
            },
        ],
    },
}

const customDefaultData = {
    sharing: {
        meta: {
            allowExternalAccess: true,
            allowPublicAccess: true,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [],
            userGroupAccesses: [],
        },
    },
    ...customSearchData,
}

const customData = {
    ...customDefaultData,
    sharing: {
        ...customDefaultData.sharing,
        object: {
            ...customDefaultData.sharing.object,
            name: 'Sharing test',
            displayName: "Sharing dialog's test",
        },
    },
}

const customDataDisabledAccess = {
    ...customData,
    sharing: {
        ...customData.sharing,
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
    },
}

const customDataWithUserGroupAccesses = {
    ...customData,
    sharing: {
        ...customData.sharing,
        object: {
            ...customData.sharing.object,
            userAccesses: [
                {
                    id: 'user-1',
                    name: 'Kvist',
                    access: 'rw------',
                },
            ],
            userGroupAccesses: [
                {
                    id: 'group-1',
                    name: 'Trolls',
                    access: 'r-------',
                },
            ],
        },
    },
}

const dashboardData = {
    ...customDataWithUserGroupAccesses,
    dashboards: {
        dashboardItems: [
            { type: 'TEXT' },
            { type: 'VISUALIZATION' },
            { type: 'MAP' },
            { type: 'EVENT_CHART' },
            { type: 'EVENT_REPORT' },
            { type: 'APP' },
            { type: 'MESSAGES' },
        ],
    },
}

const dashboardDataWithPublicAccess = {
    ...dashboardData,
    sharing: {
        ...customData.sharing,
        object: {
            ...customData.sharing.object,
            publicAccess: 'r-------',
        },
    },
}

export const Simple = (args) => (
    <CustomDataProvider data={customDefaultData}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
// Have this be the primary story on the docs page
Simple.parameters = {
    docs: { disable: false, source: { type: 'dynamic' } },
}

export const WithName = (args) => (
    <CustomDataProvider data={customData}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
WithName.storyName = 'With name'

export const WithDisabledAccess = (args) => (
    <CustomDataProvider data={customDataDisabledAccess}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
WithDisabledAccess.storyName = 'With disabled access'

export const WithUserAndGroupAccesses = (args) => (
    <CustomDataProvider data={customDataWithUserGroupAccesses}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
WithUserAndGroupAccesses.storyName = 'With user and group accesses'

export const ForDashboard = (args) => (
    <CustomDataProvider data={dashboardData}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
ForDashboard.storyName = 'For dashboard'
ForDashboard.args = { type: 'dashboard' }

export const ForDashboardWithPublicAccess = (args) => (
    <CustomDataProvider data={dashboardDataWithPublicAccess}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
ForDashboardWithPublicAccess.storyName = 'For dashboard with public access'
ForDashboardWithPublicAccess.args = { type: 'dashboard' }

const cascadingSharingSuccess = {
    'dashboards/cascadeSharing/sharing-test': {
        countUpdatedDashboardItems: 4,
        errorReports: [],
    },
}

export const ForDashboardWithCascadeSharingSuccess = (args) => (
    <CustomDataProvider data={{ ...dashboardData, ...cascadingSharingSuccess }}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
ForDashboardWithCascadeSharingSuccess.storyName =
    'For dashboard with cascading sharing success'
ForDashboardWithCascadeSharingSuccess.args = { type: 'dashboard' }

const cascadingSharingPartialSuccess = {
    'dashboards/cascadeSharing/sharing-test': {
        countUpdatedDashboardItems: 3,
        errorReports: [],
    },
}

export const ForDashboardWithCascadeSharingPartialSuccess = (args) => (
    <CustomDataProvider
        data={{ ...dashboardData, ...cascadingSharingPartialSuccess }}
    >
        <SharingDialog {...args} />
    </CustomDataProvider>
)
ForDashboardWithCascadeSharingPartialSuccess.storyName =
    'For dashboard with cascading sharing partial success'
ForDashboardWithCascadeSharingPartialSuccess.args = { type: 'dashboard' }

export const RTL = (args) => {
    useEffect(() => {
        document.body.dir = 'rtl'
        return () => {
            document.body.dir = 'ltr'
        }
    }, [])
    return (
        <div dir="rtl">
            <CustomDataProvider data={customDefaultData}>
                <SharingDialog {...args} />
            </CustomDataProvider>
        </div>
    )
}
// Have this be the primary story on the docs page
RTL.parameters = {
    docs: { disable: false, source: { type: 'dynamic' } },
}
