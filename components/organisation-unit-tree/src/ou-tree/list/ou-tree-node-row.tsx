import React, { memo } from 'react'
import type { ChildrenStatus, StoredNode } from '../node-store/index'
import { type Row, useOuTreeActions, useOuTreeNode } from '../tree/index'
import { OuTreeNodeLabel } from './ou-tree-node-label'
import { OuTreeNodeToggle } from './ou-tree-node-toggle'
import { OuTreeRetryNode } from './ou-tree-retry-node'
import { OuTreeRowShell } from './ou-tree-row-shell'

export type NodeRow = Extract<Row, { kind: 'node' }>

export interface RenderLabelProps {
    node: StoredNode
    isOpen: boolean
    childrenStatus: ChildrenStatus
    depth: number
    toggle: () => void
}

/**
 * Renders the label slot of a node row; must be a stable function. While
 * the node's children failed to load, the slot sits inside the row's retry
 * button.
 */
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
    const { node, isOpen, childrenStatus } = useOuTreeNode(row.id)
    const { toggle } = useOuTreeActions()
    if (!node) {
        // Rows are built from stored nodes and nodes are never removed.
        throw new Error(`Node row ${row.id} has no node in the store`)
    }
    const onToggle = () => toggle(row.id)
    // A failed first page means the node did not open; the label slot is
    // then a button that opens it again.
    const failed = childrenStatus.status === 'failed'
    const clickable = !node.leaf && !failed
    const label = renderLabel ? (
        renderLabel({
            node,
            isOpen,
            childrenStatus,
            depth: row.depth,
            toggle: onToggle,
        })
    ) : (
        <OuTreeNodeLabel
            clickable={clickable}
            onClick={clickable ? onToggle : undefined}
            dataTest={`${dataTest}-label`}
        >
            {node.displayName}
        </OuTreeNodeLabel>
    )

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
                loading={isOpen && childrenStatus.status === 'loading'}
                failed={failed}
                onToggle={onToggle}
                dataTest={dataTest}
            />
            {failed ? (
                <OuTreeRetryNode
                    onRetry={onToggle}
                    dataTest={`${dataTest}-retry`}
                >
                    {label}
                </OuTreeRetryNode>
            ) : (
                label
            )}
        </OuTreeRowShell>
    )
})
