import i18n from '@dhis2/d2-i18n'
import React, { memo } from 'react'
import type { ChildrenStatus, StoredNode } from '../node-store/index'
import { type Row, useOuTreeActions, useOuTreeNode } from '../tree/index'
import { OuTreeErrorIcon } from './ou-tree-error-icon'
import { OuTreeLoader } from './ou-tree-loader'
import { OuTreeNodeLabel } from './ou-tree-node-label'
import { OuTreeRetryButton } from './ou-tree-retry-button'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeToggle } from './ou-tree-toggle'

export type NodeRow = Extract<Row, { kind: 'node' }>

export interface RenderLabelProps {
    node: StoredNode
    isOpen: boolean
    children: ChildrenStatus
    depth: number
    toggle: () => void
}

/** Renders the label slot of a node row; must be a stable function. */
export type RenderLabel = (props: RenderLabelProps) => React.ReactNode

export interface OuTreeNodeRowProps {
    row: NodeRow
    renderLabel?: RenderLabel
    dataTest?: string
}

export const OuTreeNodeRow = memo(function OuTreeNodeRow({
    row,
    renderLabel,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeNodeRowProps) {
    const { node, isOpen, children } = useOuTreeNode(row.id)
    const { toggle, store } = useOuTreeActions()
    if (!node) {
        return null
    }
    const onToggle = () => toggle(row.id)
    const failed = isOpen && children.status === 'failed'

    const toggleColumn = () => {
        if (node.leaf) {
            return <span className="toggle-column" aria-hidden />
        }
        if (isOpen && children.status === 'loading') {
            return <OuTreeLoader dataTest={`${dataTest}-loader`} />
        }
        if (failed) {
            return (
                <OuTreeErrorIcon
                    message={i18n.t('Could not load children')}
                    dataTest={`${dataTest}-error`}
                />
            )
        }
        return (
            <OuTreeToggle
                open={isOpen}
                onToggle={onToggle}
                dataTest={`${dataTest}-toggle`}
            />
        )
    }

    return (
        <OuTreeRowShell
            depth={row.depth}
            role="treeitem"
            rowKind="node"
            id={row.id}
            ariaExpanded={node.leaf ? undefined : isOpen}
            dataTest={`${dataTest}-row`}
        >
            {toggleColumn()}
            {renderLabel ? (
                renderLabel({
                    node,
                    isOpen,
                    children,
                    depth: row.depth,
                    toggle: onToggle,
                })
            ) : (
                <OuTreeNodeLabel
                    clickable={!node.leaf}
                    onClick={node.leaf ? undefined : onToggle}
                    dataTest={`${dataTest}-label`}
                >
                    {node.displayName}
                </OuTreeNodeLabel>
            )}
            {failed && (
                <OuTreeRetryButton
                    onRetry={() => store.retryChildrenPage(row.id, 1)}
                    dataTest={`${dataTest}-retry`}
                />
            )}
            <style jsx>{`
                .toggle-column {
                    width: 24px;
                    flex-shrink: 0;
                }
            `}</style>
        </OuTreeRowShell>
    )
})
