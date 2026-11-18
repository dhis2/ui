import * as React from 'react'

export interface StatusIconProps {
    /**
     * Accessible label for standalone use
     */
    'aria-label'?: string
    error?: boolean
    loading?: boolean
    valid?: boolean
    warning?: boolean
}

export const StatusIcon: React.FC<StatusIconProps>
