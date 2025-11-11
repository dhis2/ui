import * as React from 'react'

export interface HeaderBarProps {
    appName?: string
    className?: string
    updateAvailable?: boolean
    onApplyAvailableUpdate?: () => void
    skipI18n?: boolean
}

export const HeaderBar: React.FC<HeaderBarProps>
