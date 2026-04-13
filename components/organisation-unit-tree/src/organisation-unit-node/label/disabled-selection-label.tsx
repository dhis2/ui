import React from 'react'
import { SingleSelectionLabel } from './single-selection-label.tsx'

export interface DisabledSelectionLabelProps {
    children: React.ReactNode
    onToggleOpen: (
        payload: { checked: boolean },
        event: React.MouseEvent
    ) => void
    loading?: boolean
}

export const DisabledSelectionLabel = ({
    children,
    loading,
    onToggleOpen,
}: DisabledSelectionLabelProps) => (
    <SingleSelectionLabel
        checked={false}
        loading={loading}
        onChange={onToggleOpen}
    >
        {children}
    </SingleSelectionLabel>
)
