import { CustomDataProvider, Provider } from '@dhis2/app-runtime'
import React from 'react'
import { HeaderBar } from './HeaderBar.js'

const mockConfig = {
    baseUrl: 'https://debug.dhis2.org/dev/',
    apiVersion: 33,
}

const customData = {
    'systemSettings/applicationTitle': {
        applicationTitle: 'Foobar',
    },
    'systemSettings/helpLink': {
        helpLink: '//custom-help-link',
    },
    me: {
        name: 'John Doe',
        email: 'john_doe@dhis2.org',
        settings: {
            keyUiLocale: 'en',
        },
        authorities: ['ALL'],
    },
    'action::menu/getModules': {
        modules: [
            {
                name: 'dhis-web-dashboard',
                namespace: '/dhis-web-dashboard',
                defaultAction: '../dhis-web-dashboard/index.action',
                displayName: 'Dashboard',
                icon: '../icons/dhis-web-dashboard.png',
                description: '',
            },
            {
                name: 'dhis-web-data-visualizer',
                namespace: '/dhis-web-data-visualizer',
                defaultAction: '../dhis-web-data-visualizer/index.action',
                displayName: 'Data Visualizer',
                icon: '../icons/dhis-web-data-visualizer.png',
                description: '',
            },
            {
                name: 'dhis-web-capture',
                namespace: '/dhis-web-capture',
                defaultAction: '../dhis-web-capture/index.action',
                displayName: 'Capture',
                icon: '../icons/dhis-web-capture.png',
                description: '',
            },
            {
                name: 'dhis-web-maintenance',
                namespace: '/dhis-web-maintenance',
                defaultAction: '../dhis-web-maintenance/index.action',
                displayName: 'Maintenance',
                icon: '../icons/dhis-web-maintenance.png',
                description: '',
            },
            {
                name: 'dhis-web-maps',
                namespace: '/dhis-web-maps',
                defaultAction: '../dhis-web-maps/index.action',
                displayName: 'Maps',
                icon: '../icons/dhis-web-maps.png',
                description: '',
            },
            {
                name: 'dhis-web-event-reports',
                namespace: '/dhis-web-event-reports',
                defaultAction: '../dhis-web-event-reports/index.action',
                displayName: 'Event Reports',
                icon: '../icons/dhis-web-event-reports.png',
                description: '',
            },
            {
                name: 'dhis-web-interpretation',
                namespace: '/dhis-web-interpretation',
                defaultAction: '../dhis-web-interpretation/index.action',
                displayName: 'Interpretations',
                icon: '../icons/dhis-web-interpretation.png',
                description: '',
            },
            {
                name: 'dhis-web-import-export',
                namespace: '/dhis-web-import-export',
                defaultAction: '../dhis-web-import-export/index.action',
                displayName: 'Import/Export',
                icon: '../icons/dhis-web-import-export.png',
                description: '',
            },
            {
                name: 'WHO Metadata browser',
                namespace: 'WHO Metadata browser',
                defaultAction:
                    'https://debug.dhis2.org/dev/api/apps/WHO-Metadata-browser/index.html',
                displayName: '',
                icon:
                    'https://debug.dhis2.org/dev/api/apps/WHO-Metadata-browser/icons/medicine-48.png',
                description: '',
            },
            {
                name: 'Dashboard Classic',
                namespace: 'Dashboard Classic',
                defaultAction:
                    'https://debug.dhis2.org/dev/api/apps/Dashboard-Classic/index.html',
                displayName: 'Dashboard Classic',
                icon:
                    'https://debug.dhis2.org/dev/api/apps/Dashboard-Classic/icon.png',
                description: 'DHIS2 Legacy Dashboard App',
            },
        ],
    },
    'me/dashboard': {
        unreadInterpretations: 10,
        unreadMessageConversations: 5,
    },
}

const customLogoData = {
    ...customData,
    'staticContent/logo_banner': {
        images: {
            png: 'https://via.placeholder.com/150x50',
        },
    },
}

const customLocaleData = {
    ...customData,
    'systemSettings/applicationTitle': {
        applicationTitle: 'Le Gros Foobar',
    },
    me: {
        ...customData.me,
        settings: {
            keyUiLocale: 'fr',
        },
    },
    'action::menu/getModules': {
        modules: customData['action::menu/getModules'].modules.map(mod => ({
            ...mod,
            displayName: `Le ${mod.displayName}`,
        })),
    },
}

const customAuthoritiesData = {
    ...customData,
    me: {
        ...customData.me,
        authorities: ['M_dhis-web-messaging'],
    },
}

export default {
    title: 'HeaderBar',
    component: HeaderBar,
}

export const Default = () => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={customData}>
            <HeaderBar appName="Example!" />
        </CustomDataProvider>
    </Provider>
)

export const CustomLogoWideDimension = () => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={customLogoData}>
            <HeaderBar appName="Example!" />
        </CustomDataProvider>
    </Provider>
)

CustomLogoWideDimension.story = {
    name: 'Custom Logo (wide dimension)',
}

export const NonEnglishUserLocale = () => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={customLocaleData}>
            <HeaderBar appName="Exemple!" />
        </CustomDataProvider>
    </Provider>
)

NonEnglishUserLocale.story = {
    name: 'Non-english user locale',
}

export const NoAuthorityForInterpretationsApp = () => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={customAuthoritiesData}>
            <HeaderBar appName="Exemple!" />
        </CustomDataProvider>
    </Provider>
)

NoAuthorityForInterpretationsApp.story = {
    name: 'No authority for interpretations app',
}

export const Loading = () => (
    <Provider config={mockConfig}>
        <CustomDataProvider options={{ loadForever: true }}>
            <HeaderBar appName="Example!" />
        </CustomDataProvider>
    </Provider>
)

Loading.story = {
    name: 'Loading...',
}

export const Error = () => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={{}}>
            <HeaderBar appName="Example!" />
        </CustomDataProvider>
    </Provider>
)

Error.story = {
    name: 'Error!',
}
