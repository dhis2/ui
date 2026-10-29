import React, { memo } from 'react'
import type { ChildrenStatus, StoredNode } from '../node-store/index'
import {
    type Row,
    useOuTreeActions,
    useOuTreeNode,
    useOuTreeSearchTerm,
} from '../tree/index'
import { OuTreeLoader } from './ou-tree-loader'
import { OuTreeMatchedText } from './ou-tree-matched-text'
import { OuTreeNodeLabel } from './ou-tree-node-label'
import { OuTreeNodeToggle } from './ou-tree-node-toggle'
import { OuTreeRetryNode } from './ou-tree-retry-node'
import { OuTreeRevealToggle } from './ou-tree-reveal-toggle'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeToggle } from './ou-tree-toggle'

export type NodeRow = Extract<Row, { kind: 'node' }>

export interface RenderLabelProps {
    node: StoredNode
    isOpen: boolean
    childrenStatus: ChildrenStatus
    depth: number
    toggle: () => void
    /** A direct search result; false in browse mode. */
    isResult: boolean
    /** The effective search term, for marking the match; undefined in browse mode. */
    searchTerm: string | undefined
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
    const { node, isOpen, childrenStatus, isResult, isRevealed } =
        useOuTreeNode(row.id)
    const { toggle, toggleRevealed, store } = useOuTreeActions()
    const searchTerm = useOuTreeSearchTerm()
    if (!node) {
        // Rows are built from stored nodes and nodes are never removed.
        throw new Error(`Node row ${row.id} has no node in the store`)
    }
    const onToggle = () => toggle(row.id)
    const pruned = row.view === 'pruned'
    // A pruned-tree node shows its children only once revealed; a browse
    // node's failed first page means it did not open, and the row's body is
    // then a button that opens it again.
    const showsChildren = !pruned || isRevealed
    const failed = showsChildren && childrenStatus.status === 'failed'
    const loading = showsChildren && childrenStatus.status === 'loading'
    const clickable = !pruned && !node.leaf && !failed
    const label = renderLabel ? (
        renderLabel({
            node,
            isOpen,
            childrenStatus,
            depth: row.depth,
            toggle: onToggle,
            isResult,
            searchTerm,
        })
    ) : (
        <OuTreeNodeLabel
            clickable={clickable}
            onClick={clickable ? onToggle : undefined}
            result={isResult}
            dataTest={`${dataTest}-label`}
        >
            {isResult && searchTerm !== undefined ? (
                <OuTreeMatchedText
                    text={node.displayName}
                    term={searchTerm}
                    dataTest={`${dataTest}-match`}
                />
            ) : (
                node.displayName
            )}
        </OuTreeNodeLabel>
    )
    const body = failed ? (
        <OuTreeRetryNode
            onRetry={
                pruned ? () => store.retryChildrenPage(row.id, 1) : onToggle
            }
            dataTest={`${dataTest}-retry`}
        >
            {label}
        </OuTreeRetryNode>
    ) : (
        <>
            {pruned ? (
                loading ? (
                    <OuTreeLoader dataTest={`${dataTest}-loader`} />
                ) : (
                    <OuTreeToggle leaf dataTest={`${dataTest}-toggle-space`} />
                )
            ) : (
                <OuTreeNodeToggle
                    leaf={node.leaf}
                    open={isOpen}
                    loading={isOpen && loading}
                    onToggle={onToggle}
                    dataTest={dataTest}
                />
            )}
            {label}
        </>
    )

    return (
        <OuTreeRowShell
            depth={row.depth}
            role="treeitem"
            rowKind="node"
            id={row.id}
            ariaExpanded={node.leaf || pruned ? undefined : isOpen}
            dataTest={`${dataTest}-row`}
        >
            {body}
            {pruned && !node.leaf && (
                <OuTreeRevealToggle
                    revealed={isRevealed}
                    onToggle={() => toggleRevealed(row.id)}
                    dataTest={`${dataTest}-reveal`}
                />
            )}
        </OuTreeRowShell>
    )
})
