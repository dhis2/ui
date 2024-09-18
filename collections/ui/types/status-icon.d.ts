import * as React from 'react'

export interface StatusIconProps {
    error?: boolean
    loading?: boolean
    valid?: boolean
    warning?: boolean
}

export const StatusIcon: React.FC<StatusIconProps>
