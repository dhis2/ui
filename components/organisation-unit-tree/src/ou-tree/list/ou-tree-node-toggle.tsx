import React from 'react'
import { OuTreeLoader } from './ou-tree-loader'
import { OuTreeToggle } from './ou-tree-toggle'

export interface OuTreeNodeToggleProps {
    leaf: boolean
    open: boolean
    loading: boolean
    /** The toggle's line, the node's own guide, is lit. */
    lit?: boolean
    onHoverChange?: (hovered: boolean) => void
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
    lit,
    onHoverChange,
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
            lit={lit}
            onHoverChange={onHoverChange}
            dataTest={`${dataTest}-toggle`}
        />
    )
}
