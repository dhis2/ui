import { useConfig } from '@dhis2/app-runtime'

export const useDebugInfo = () => {
    const { appName, appVersion, systemInfo } = useConfig()

    return {
        app_name: appName || 'App',
        app_version: appVersion?.full || 'unknown',
        dhis2_version: systemInfo?.version || 'unknown',
        dhis2_revision: systemInfo?.revision || 'unknown',
    }
}

export const useFormattedDebugInfo = () => JSON.stringify(useDebugInfo(), undefined, 2)