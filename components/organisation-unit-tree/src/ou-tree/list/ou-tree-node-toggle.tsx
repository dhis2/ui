import i18n from '@dhis2/d2-i18n'
import React from 'react'
import type { ChildrenStatus } from '../node-store/index'
import { OuTreeErrorIcon } from './ou-tree-error-icon'
import { OuTreeLoader } from './ou-tree-loader'
import { OuTreeToggle } from './ou-tree-toggle'

export interface OuTreeNodeToggleProps {
    leaf: boolean
    open: boolean
    childrenStatus: ChildrenStatus['status']
    onToggle: () => void
    dataTest?: string
}

/**
 * What sits before a node's label: the toggle, or while the node is open
 * and its first children page is loading or failed, the loader or the error
 * icon; for a leaf, the toggle's space.
 */
export const OuTreeNodeToggle = ({
    leaf,
    open,
    childrenStatus,
    onToggle,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeNodeToggleProps) => {
    if (leaf) {
        return <OuTreeToggle leaf dataTest={`${dataTest}-toggle-space`} />
    }
    if (open && childrenStatus === 'loading') {
        return <OuTreeLoader dataTest={`${dataTest}-loader`} />
    }
    if (open && childrenStatus === 'failed') {
        return (
            <OuTreeErrorIcon
                message={i18n.t('Could not load children')}
                dataTest={`${dataTest}-error`}
            />
        )
    }
    return (
        <OuTreeToggle
            open={open}
            onToggle={onToggle}
            dataTest={`${dataTest}-toggle`}
        />
    )
}
