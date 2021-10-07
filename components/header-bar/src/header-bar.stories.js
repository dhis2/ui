import { CustomDataProvider, Provider } from '@dhis2/app-runtime'
import React from 'react'
import { HeaderBar } from './header-bar.js'

const subtitle = 'The common navigation bar used in all DHIS2 apps'

const description = `
The header bar is mandatory for all apps. This creates a stable, understandable point of reference for the user across all kinds of different apps. It must always be displayed fixed to the top of the screen. Do not interfere or obstruct interaction with the header bar.

The header bar is included automatically with the App Shell and should not need any configuration.

#### Theme

The header bar can be themeed to suit the brand/color of your DHIS2 instance. The color of the text/icons will be automatically adjusted based on the selected color.

\`\`\`js
import { HeaderBar } from '@dhis2/ui'
\`\`\`
`

const mockConfig = {
    baseUrl: 'https://debug.dhis2.org/dev/',
    apiVersion: 33,
}

const customData = {
    'system/info': {
        contextPath: 'https://debug.dhis2.org/dev',
        userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
        calendar: 'iso8601',
        dateFormat: 'yyyy-mm-dd',
        serverDate: '2021-10-06T08:06:15.256',
        serverTimeZoneId: 'Etc/UTC',
        serverTimeZoneDisplayName: 'Coordinated Universal Time',
        lastAnalyticsTableSuccess: '2021-09-18T10:24:03.536',
        intervalSinceLastAnalyticsTableSuccess: '429 h, 42 m, 11 s',
        lastAnalyticsTableRuntime: '520835',
        lastSystemMonitoringSuccess: '2019-03-26T17:07:15.418',
        version: '2.38-SNAPSHOT',
        revision: '6607c3c',
        buildTime: '2021-10-05T17:13:00.000',
        jasperReportsVersion: '6.3.1',
        environmentVariable: 'DHIS2_HOME',
        databaseInfo: {
          spatialSupport: true
        },
        encryption: false,
        emailConfigured: false,
        redisEnabled: false,
        systemId: 'eed3d451-4ff5-4193-b951-ffcc68954299',
        systemName: 'DHIS 2 Demo - Sierra Leone',
        instanceBaseUrl: 'https://debug.dhis2.org/dev',
        clusterHostname: '',
        isMetadataVersionEnabled: true,
        metadataSyncEnabled: false
    },
    'systemSettings/applicationTitle': {
        applicationTitle: 'Foobar',
    },
    'systemSettings/helpPageLink': {
        helpPageLink: '//custom-help-page-link',
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
                icon: 'https://debug.dhis2.org/dev/api/apps/WHO-Metadata-browser/icons/medicine-48.png',
                description: '',
            },
            {
                name: 'Dashboard Classic',
                namespace: 'Dashboard Classic',
                defaultAction:
                    'https://debug.dhis2.org/dev/api/apps/Dashboard-Classic/index.html',
                displayName: 'Dashboard Classic',
                icon: 'https://debug.dhis2.org/dev/api/apps/Dashboard-Classic/icon.png',
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
    title: 'Utils/Header Bar',
    component: HeaderBar,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    decorators: [fn => <Provider config={mockConfig}>{fn()}</Provider>],
}

export const Default = () => (
    <CustomDataProvider data={customData}>
        <HeaderBar appName="Example!" />
    </CustomDataProvider>
)

export const CustomLogoWideDimension = () => (
    <CustomDataProvider data={customLogoData}>
        <HeaderBar appName="Example!" />
    </CustomDataProvider>
)
CustomLogoWideDimension.storyName = 'Custom Logo (wide dimension)'

export const NonEnglishUserLocale = () => (
    <CustomDataProvider data={customLocaleData}>
        <HeaderBar appName="Exemple!" />
    </CustomDataProvider>
)
NonEnglishUserLocale.storyName = 'Non-english user locale'

export const NoAuthorityForInterpretationsApp = () => (
    <CustomDataProvider data={customAuthoritiesData}>
        <HeaderBar appName="Example!" />
    </CustomDataProvider>
)
NoAuthorityForInterpretationsApp.storyName =
    'No authority for interpretations app'

export const WithAppInfoInProfileMenu = () => (
    <CustomDataProvider data={customData}>
        <HeaderBar appName="Data Visualizer" appVersion="100.3.2" />
    </CustomDataProvider>
)

export const Loading = () => (
    <CustomDataProvider options={{ loadForever: true }}>
        <HeaderBar appName="Example!" />
    </CustomDataProvider>
)
Loading.storyName = 'Loading...'

export const Error = () => (
    <CustomDataProvider data={{}}>
        <HeaderBar appName="Exemple!" />
    </CustomDataProvider>
)
Error.storyName = 'Error!'

export const WithOnlineStatus = () => (
    <CustomDataProvider data={customData}>
        <HeaderBar appName="Exemple!" />
    </CustomDataProvider>
)

WithOnlineStatus.decorators = [fn => {
    const config = { ...mockConfig, pwaEnabled: true }
    return <Provider config={config}>{fn()}</Provider>
}]

WithOnlineStatus.parameters = {
    docs: {
        description: {
            story: 'An online status badge will be shown in apps that set \
                `pwa: { enabled: true }` in `d2.config.js`. The status \
                indicator uses a different layout on viewports smaller \
                than 480px.',
        },
    },
}

export const WithLastOnlineInfo = () => (
    <CustomDataProvider data={customData}>
        <HeaderBar appName="Exemple!" />
    </CustomDataProvider>
)

WithLastOnlineInfo.decorators = [fn => {
    const config = {
        ...mockConfig,
        pwaEnabled: true,
        headerbar: { onlineStatusInfo: 'LAST_ONLINE' },
    }
    return <Provider config={config}>{fn()}</Provider>
}]

WithLastOnlineInfo.parameters = {
    docs: {
        description: {
            story: 'When offline, the status indicator will show text describing \
                time since last online.',
        },
    },
}
