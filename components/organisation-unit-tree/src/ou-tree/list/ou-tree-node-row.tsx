import React, { memo } from 'react'
import type { ChildrenStatus, StoredNode } from '../node-store'
import type { MatchSplitter } from '../search'
import {
    type Row,
    useOuTreeActions,
    useOuTreeMatchSplitter,
    useOuTreeNode,
    useOuTreeRowElementId,
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
    /** The effective search term; undefined in browse mode. */
    searchTerm: string | undefined
    /** Cuts a label into plain and matched segments for the term; undefined in browse mode. */
    splitMatches: MatchSplitter | undefined
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
    isResult: boolean
    splitMatches: MatchSplitter | undefined
    dataTest: string
}

/** The label slot when no renderLabel is given: the name, its matches marked. */
const DefaultLabel = ({
    node,
    clickable,
    isResult,
    splitMatches,
    dataTest,
}: DefaultLabelProps) => (
    <OuTreeNodeLabel
        clickable={clickable}
        result={isResult}
        dataTest={`${dataTest}-label`}
    >
        {isResult && splitMatches ? (
            <OuTreeMatchedText
                segments={splitMatches(node.displayName)}
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
        isHovered,
        isFocused,
    } = useOuTreeNode(row.id)
    const { open, toggle, toggleRevealed, setHovered, setFocused } =
        useOuTreeActions()
    const searchTerm = useOuTreeSearchTerm()
    const splitMatches = useOuTreeMatchSplitter()
    const elementId = useOuTreeRowElementId(row.id)
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
    // The eye swaps a visible list of matching children for all of them;
    // it shows while the pointer is over the row or the row is focused.
    const showsEye =
        pruned && hasMatchingChildren && isOpen && (isHovered || isFocused)
    // A click anywhere on the row focuses it and toggles it; a click on a
    // button inside the row was the button's.
    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as Element).closest('button')) {
            return
        }
        setFocused(row.id)
        if (clickable) {
            toggle(row.id)
        }
    }

    return (
        <OuTreeRowShell
            depth={row.depth}
            elementId={elementId}
            focused={isFocused}
            rowKind="node"
            id={row.id}
            ariaExpanded={node.leaf ? undefined : isOpen}
            keyshortcuts={showsEye || failed ? 'Shift+Enter' : undefined}
            onHoverChange={(hovered) =>
                setHovered(hovered ? row.id : undefined)
            }
            onClick={onClick}
            dataTest={`${dataTest}-row`}
        >
            <NodeBody
                node={node}
                isOpen={isOpen}
                loading={loading}
                failed={failed}
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
                        splitMatches,
                    })
                ) : (
                    <DefaultLabel
                        node={node}
                        clickable={clickable}
                        isResult={isResult}
                        splitMatches={splitMatches}
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
