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

export default {
    title: 'Utils/Header Bar',
    component: HeaderBar,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    args: { appName: 'Example!' },
}

const mockConfig = {
    baseUrl: 'https://debug.dhis2.org/dev/',
    apiVersion: 33,
}

const customData = {
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

export const Default = args => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={customData}>
            <HeaderBar {...args} />
        </CustomDataProvider>
    </Provider>
)

export const CustomLogoWideDimension = args => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={customLogoData}>
            <HeaderBar {...args} />
        </CustomDataProvider>
    </Provider>
)
CustomLogoWideDimension.storyName = 'Custom Logo (wide dimension)'

export const NonEnglishUserLocale = args => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={customLocaleData}>
            <HeaderBar {...args} />
        </CustomDataProvider>
    </Provider>
)
NonEnglishUserLocale.args = { appName: 'Exemple!' }
NonEnglishUserLocale.storyName = 'Non-english user locale'

export const NoAuthorityForInterpretationsApp = args => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={customAuthoritiesData}>
            <HeaderBar {...args} />
        </CustomDataProvider>
    </Provider>
)
NoAuthorityForInterpretationsApp.storyName =
    'No authority for interpretations app'

export const Loading = args => (
    <Provider config={mockConfig}>
        <CustomDataProvider options={{ loadForever: true }}>
            <HeaderBar {...args} />
        </CustomDataProvider>
    </Provider>
)
Loading.storyName = 'Loading...'

export const Error = args => (
    <Provider config={mockConfig}>
        <CustomDataProvider data={{}}>
            <HeaderBar {...args} />
        </CustomDataProvider>
    </Provider>
)
Error.storyName = 'Error!'

export const WithOnlineStatus = args => {
    const config = { ...mockConfig, pwaEnabled: true }
    return (
        <Provider config={config}>
            <CustomDataProvider data={customData}>
                <HeaderBar {...args} />
            </CustomDataProvider>
        </Provider>
    )
}
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

export const WithLastOnlineInfo = args => {
    const config = {
        ...mockConfig,
        pwaEnabled: true,
        headerbar: { onlineStatusInfo: 'LAST_ONLINE' },
    }
    return (
        <Provider config={config}>
            <CustomDataProvider data={customData}>
                <HeaderBar {...args} />
            </CustomDataProvider>
        </Provider>
    )
}
WithLastOnlineInfo.parameters = {
    docs: {
        description: {
            story: 'When offline, the status indicator will show text describing \
                time since last online.',
        },
    },
}
