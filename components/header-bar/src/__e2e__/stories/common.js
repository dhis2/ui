/* eslint-disable react/display-name */
import { CustomDataProvider, Provider } from '@dhis2/app-runtime'
import React from 'react'

export const defaultModules = [
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
]

export const modulesWithSpecialCharacters = [
    {
        name: '/',
        namespace: '//',
        defaultAction: '..//.action',
        displayName: 'A / character',
        icon: '../icons/dhis-web-dashboard.png',
        description: '',
    },
    {
        name: '-',
        namespace: '/-',
        defaultAction: '../-.action',
        displayName: 'A - character',
        icon: '../icons/dhis-web-dashboard.png',
        description: '',
    },
    {
        name: '(',
        namespace: '/(',
        defaultAction: '../(.action',
        displayName: 'A ( character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: ')',
        namespace: '/)',
        defaultAction: '../).action',
        displayName: 'A ) character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '[',
        namespace: '/[',
        defaultAction: '../[.action',
        displayName: 'A [ character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: ']',
        namespace: '/]',
        defaultAction: '../].action',
        displayName: 'A ] character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '{',
        namespace: '/{',
        defaultAction: '../{.action',
        displayName: 'A { character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '}',
        namespace: '/}',
        defaultAction: '../}.action',
        displayName: 'A } character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '*',
        namespace: '/*',
        defaultAction: '../*.action',
        displayName: 'A * character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '+',
        namespace: '/+',
        defaultAction: '../+.action',
        displayName: 'A + character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '?',
        namespace: '/?',
        defaultAction: '../?.action',
        displayName: 'A ? character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '.',
        namespace: '/.',
        defaultAction: '../..action',
        displayName: 'A . character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: ',',
        namespace: '/,',
        defaultAction: '../,.action',
        displayName: 'A , character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '^',
        namespace: '/^',
        defaultAction: '../^.action',
        displayName: 'A ^ character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '$',
        namespace: '/$',
        defaultAction: '../$.action',
        displayName: 'A $ character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '|',
        namespace: '/|',
        defaultAction: '../|.action',
        displayName: 'A | character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '#',
        namespace: '/#',
        defaultAction: '../#.action',
        displayName: 'A # character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '\\s',
        namespace: '/\\s',
        defaultAction: '../\\s.action',
        displayName: 'A \\s character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },
    {
        name: '\\',
        namespace: '/\\',
        defaultAction: '../\\.action',
        displayName: 'A \\ character',
        icon: '../icons/dhis-web-data-visualizer.png',
        description: '',
    },

    {
        name: 'dhis-web-dashboard',
        namespace: '/dhis-web-dashboard',
        defaultAction: '../dhis-web-dashboard/index.action',
        displayName: 'Dashboard',
        icon: '../icons/dhis-web-dashboard.png',
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
        icon: '../icons/dhis-web-importexport.png',
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
        displayName: '',
        icon: 'https://debug.dhis2.org/dev/api/apps/Dashboard-Classic/icon.png',
        description: 'DHIS2 Legacy Dashboard App',
    },
]

export const applicationTitle = 'Foobar'

export const dataProviderData = {
    'system/info': {
        contextPath: 'https://debug.dhis2.org/dev',
        userAgent:
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
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
            spatialSupport: true,
        },
        encryption: false,
        emailConfigured: false,
        redisEnabled: false,
        systemId: 'eed3d451-4ff5-4193-b951-ffcc68954299',
        systemName: 'DHIS 2 Demo - Sierra Leone',
        instanceBaseUrl: 'https://debug.dhis2.org/dev',
        clusterHostname: '',
        isMetadataVersionEnabled: true,
        metadataSyncEnabled: false,
    },
    'systemSettings/applicationTitle': {
        applicationTitle,
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
        modules: defaultModules,
    },
    'me/dashboard': {
        unreadInterpretations: 10,
        unreadMessageConversations: 5,
    },
}

// Trailing "HeaderBar" because storybook is confusing this with the
// helper from the org unit tree's common.js helper with the same name
export const createDecoratorCustomDataProviderHeaderBar = (
    data = dataProviderData
) => {
    return (fn) => {
        window.dataProviderData = data

        return <CustomDataProvider data={data}>{fn()}</CustomDataProvider>
    }
}

export const providerConfig = {
    baseUrl: 'https://domain.tld/',
    apiVersion: '',
}

export const createDecoratorProvider = (config) => {
    return (fn) => <Provider config={config || providerConfig}>{fn()}</Provider>
}
