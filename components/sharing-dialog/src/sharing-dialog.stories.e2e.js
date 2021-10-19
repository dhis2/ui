import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { SharingDialog } from './sharing-dialog.js'

export default {
    title: 'Sharing Dialog',
    component: SharingDialog,
}

const allUsersNoAccessData = {
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
}

export const AllUsersNoAccess = () => (
    <CustomDataProvider data={allUsersNoAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const userViewAccessData = {
    sharing: {
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [
                {
                    id: 'user-1',
                    name: 'A user',
                    access: 'r-------',
                },
            ],
            userGroupAccesses: [],
        },
    },
}

export const userViewAccess = () => (
    <CustomDataProvider data={userViewAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const userViewAndEditAccessData = {
    sharing: {
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [
                {
                    id: 'user-1',
                    name: 'A user',
                    access: 'rw------',
                },
            ],
            userGroupAccesses: [],
        },
    },
}

export const userViewAndEditAccess = () => (
    <CustomDataProvider data={userViewAndEditAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const groupViewAccessData = {
    sharing: {
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [],
            userGroupAccesses: [
                {
                    id: 'group-1',
                    name: 'A group',
                    access: 'r-------',
                },
            ],
        },
    },
}

export const groupViewAccess = () => (
    <CustomDataProvider data={groupViewAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const groupViewAndEditAccessData = {
    sharing: {
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [],
            userGroupAccesses: [
                {
                    id: 'group-1',
                    name: 'A group',
                    access: 'rw------',
                },
            ],
        },
    },
}

export const groupViewAndEditAccess = () => (
    <CustomDataProvider data={groupViewAndEditAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const withoutADisplaynameData = {
    sharing: {
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
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
}

export const withoutADisplayname = () => (
    <CustomDataProvider data={withoutADisplaynameData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const withDisplaynameData = {
    sharing: {
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: 'custom displayname',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [],
            userGroupAccesses: [],
        },
    },
}

export const withADisplayname = () => (
    <CustomDataProvider data={withDisplaynameData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const disabledAccessData = {
    sharing: {
        meta: {
            allowExternalAccess: true,
            allowPublicAccess: false,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: 'custom displayname',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [],
            userGroupAccesses: [],
        },
    },
}

export const disabledAccess = () => (
    <CustomDataProvider data={disabledAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const searchData = {
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
    'sharing/search': {
        userGroups: [
            {
                id: 'wl5cDMuUhmF',
                name: 'A group',
                displayName: 'A group',
            },
        ],
        users: [
            {
                id: 'xE7jOejl9FI',
                name: 'A user',
                displayName: 'A user',
            },
        ],
    },
}

export const search = () => (
    <CustomDataProvider data={searchData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const dashboardData = {
    dashboards: {
        dashboardItems: [
            {
                type: 'VISUALIZATION',
            },
            {
                type: 'MAP',
            },
            {
                type: 'EVENT_CHART',
            },
            {
                type: 'EVENT_REPORT',
            },
            {
                type: 'IGNORED 1',
            },
            {
                type: 'IGNORED 2',
            },
            {
                type: 'IGNORED 3',
            },
            {
                type: 'IGNORED 4',
            },
        ],
    },
    sharing: {
        meta: {
            allowExternalAccess: true,
            allowPublicAccess: true,
        },
        object: {
            displayName: "Sharing dialog's test",
            externalAccess: false,
            id: 'sharing-test',
            name: 'Sharing test',
            publicAccess: '--------',
            userAccesses: [
                {
                    access: 'rw------',
                    id: 'A user',
                    name: 'A user',
                },
            ],
            userGroupAccesses: [
                {
                    access: 'r-------',
                    id: 'A group',
                    name: 'A group',
                },
            ],
        },
    },
}

export const dashboard = () => (
    <CustomDataProvider data={dashboardData}>
        <SharingDialog type="dashboard" id="sharing-test" />
    </CustomDataProvider>
)
