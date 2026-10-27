import React, { memo } from 'react'
import type { ChildrenStatus, StoredNode } from '../node-store/index'
import { type Row, useOuTreeActions, useOuTreeNode } from '../tree/index'
import { OuTreeNodeLabel } from './ou-tree-node-label'
import { OuTreeNodeToggle } from './ou-tree-node-toggle'
import { OuTreeRetryButton } from './ou-tree-retry-button'
import { OuTreeRowShell } from './ou-tree-row-shell'

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
        // Rows are built from stored nodes and nodes are never removed.
        throw new Error(`Node row ${row.id} has no node in the store`)
    }
    const onToggle = () => toggle(row.id)
    const failed = isOpen && children.status === 'failed'

    return (
        <OuTreeRowShell
            depth={row.depth}
            role="treeitem"
            rowKind="node"
            id={row.id}
            ariaExpanded={node.leaf ? undefined : isOpen}
            dataTest={`${dataTest}-row`}
        >
            <OuTreeNodeToggle
                leaf={node.leaf}
                open={isOpen}
                childrenStatus={children.status}
                onToggle={onToggle}
                dataTest={dataTest}
            />
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
        </OuTreeRowShell>
    )
})
