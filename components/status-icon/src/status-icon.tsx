import { theme } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconWarningFilled24,
    IconCheckmark24,
} from '@dhis2/ui-icons'
import { CircularLoader } from '@dhis2-ui/loader'
import React from 'react'

export interface StatusIconProps {
    error?: boolean
    warning?: boolean
    valid?: boolean
    loading?: boolean
}

export const StatusIcon: React.FC<StatusIconProps> = ({
    error,
    warning,
    valid,
    loading,
}) => {
    if (error) {
        return <IconErrorFilled24 color={theme.error} />
    }
    if (warning) {
        return <IconWarningFilled24 color={theme.warning} />
    }
    if (valid) {
        return <IconCheckmark24 color={theme.valid} />
    }
    if (loading) {
        return <CircularLoader small />
    }

    return null
}
