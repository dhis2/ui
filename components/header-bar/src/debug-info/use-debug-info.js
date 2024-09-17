import { useConfig } from '@dhis2/app-runtime'

export const useDebugInfo = () => {
    const { appName, appVersion, systemInfo } = useConfig()

    return {
        app_name: appName || null,
        app_version: appVersion?.full || null,
        dhis2_version: systemInfo?.version || null,
        dhis2_revision: systemInfo?.revision || null,
    }
}

export const useFormattedDebugInfo = () =>
    JSON.stringify(useDebugInfo(), undefined, 2)
