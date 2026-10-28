import React from 'react'
import { OuTreeLoader } from './ou-tree-loader'
import { OuTreeToggle } from './ou-tree-toggle'

export interface OuTreeNodeToggleProps {
    leaf: boolean
    open: boolean
    loading: boolean
    onToggle: () => void
    dataTest?: string
}

/**
 * What sits before a node's label: the toggle, or the loader while the
 * node's first children page loads; for a leaf, the toggle's space.
 */
export const OuTreeNodeToggle = ({
    leaf,
    open,
    loading,
    onToggle,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeNodeToggleProps) => {
    if (leaf) {
        return <OuTreeToggle leaf dataTest={`${dataTest}-toggle-space`} />
    }
    if (loading) {
        return <OuTreeLoader dataTest={`${dataTest}-loader`} />
    }
    return (
        <OuTreeToggle
            open={open}
            onToggle={onToggle}
            dataTest={`${dataTest}-toggle`}
        />
    )
}
