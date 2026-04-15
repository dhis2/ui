import { useConfig } from '@dhis2/app-runtime'

interface DebugInfo {
    app_name: string | null
    app_version: string | null
    dhis2_version: string | null
    dhis2_revision: string | null
}

export const useDebugInfo = (): DebugInfo => {
    const { appName, appVersion, systemInfo } = useConfig()

    return {
        app_name: appName || null,
        app_version: (appVersion as { full?: string })?.full || null,
        dhis2_version: systemInfo?.version || null,
        dhis2_revision: (systemInfo as { revision?: string })?.revision || null,
    }
}

export const useFormattedDebugInfo = (): string =>
    JSON.stringify(useDebugInfo(), undefined, 2)
