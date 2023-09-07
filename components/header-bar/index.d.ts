import * as React from 'react'

export interface HeaderBarProps {
    appName?: string
    className?: string
    updateAvailable?: boolean
    onApplyAvailableUpdate?: () => void
}

export const HeaderBar: React.FC<HeaderBarProps>
