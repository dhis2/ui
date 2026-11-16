import React, { memo } from 'react'
import type { ChildrenStatus, StoredNode } from '../node-store'
import {
    type Row,
    useOuTreeActions,
    useOuTreeNode,
    useOuTreeSearchTerm,
} from '../tree'
import { OuTreeMatchedText } from './ou-tree-matched-text'
import { OuTreeNodeLabel } from './ou-tree-node-label'
import { OuTreeNodeToggle } from './ou-tree-node-toggle'
import { OuTreeRetryNode } from './ou-tree-retry-node'
import { OuTreeRevealToggle } from './ou-tree-reveal-toggle'
import { OuTreeRowShell } from './ou-tree-row-shell'

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

interface DefaultLabelProps {
    node: StoredNode
    clickable: boolean
    onToggle: () => void
    isResult: boolean
    searchTerm: string | undefined
    dataTest: string
}

/** The label slot when no renderLabel is given: the name, its match marked. */
const DefaultLabel = ({
    node,
    clickable,
    onToggle,
    isResult,
    searchTerm,
    dataTest,
}: DefaultLabelProps) => (
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

interface NodeBodyProps {
    node: StoredNode
    isOpen: boolean
    loading: boolean
    failed: boolean
    onToggle: () => void
    onRetry: () => void
    dataTest: string
    /** The label slot. */
    children: React.ReactNode
}

/**
 * The toggle and the label slot, or, while the node's first page failed,
 * the retry button around the label slot.
 */
const NodeBody = ({
    node,
    isOpen,
    loading,
    failed,
    onToggle,
    onRetry,
    dataTest,
    children,
}: NodeBodyProps) => {
    if (failed) {
        return (
            <OuTreeRetryNode onRetry={onRetry} dataTest={`${dataTest}-retry`}>
                {children}
            </OuTreeRetryNode>
        )
    }
    return (
        <>
            <OuTreeNodeToggle
                leaf={node.leaf}
                open={isOpen}
                loading={isOpen && loading}
                onToggle={onToggle}
                dataTest={dataTest}
            />
            {children}
        </>
    )
}

export const OuTreeNodeRow = memo(function OuTreeNodeRow({
    row,
    renderLabel,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeNodeRowProps) {
    const {
        node,
        isOpen,
        childrenStatus,
        isResult,
        isRevealed,
        hasMatchingChildren,
    } = useOuTreeNode(row.id)
    const { open, toggle, toggleRevealed } = useOuTreeActions()
    const searchTerm = useOuTreeSearchTerm()
    if (!node) {
        // Rows are built from stored nodes and nodes are never removed.
        throw new Error(`Node row ${row.id} has no node in the store`)
    }
    const onToggle = () => toggle(row.id)
    const pruned = row.view === 'pruned'
    // A pruned-tree node lists all its children only once revealed; its
    // matching children need no page. A failed first page means the node
    // did not open, or keeps its matching children, and the row's body is
    // then a button that requests the page again.
    const showsAllChildren = !pruned || isRevealed
    const failed = showsAllChildren && childrenStatus.status === 'failed'
    const loading = showsAllChildren && childrenStatus.status === 'loading'
    const clickable = !node.leaf && !failed
    // The eye swaps a visible list of matching children for all of them.
    const showsEye = pruned && hasMatchingChildren && isOpen

    return (
        <OuTreeRowShell
            depth={row.depth}
            role="treeitem"
            rowKind="node"
            id={row.id}
            ariaExpanded={node.leaf ? undefined : isOpen}
            dataTest={`${dataTest}-row`}
        >
            <NodeBody
                node={node}
                isOpen={isOpen}
                loading={loading}
                failed={failed}
                onToggle={onToggle}
                onRetry={() => open(row.id)}
                dataTest={dataTest}
            >
                {renderLabel ? (
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
                    <DefaultLabel
                        node={node}
                        clickable={clickable}
                        onToggle={onToggle}
                        isResult={isResult}
                        searchTerm={searchTerm}
                        dataTest={dataTest}
                    />
                )}
            </NodeBody>
            {showsEye && (
                <OuTreeRevealToggle
                    revealed={isRevealed}
                    onToggle={() => toggleRevealed(row.id)}
                    dataTest={`${dataTest}-reveal`}
                />
            )}
        </OuTreeRowShell>
    )
})
