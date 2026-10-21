import { colors, spacers } from '@dhis2/ui-constants'
import React, { useEffect } from 'react'
import { useOuTree, useOuTreeNode } from '../tree/index'

const NodeRow = ({ id, depth }: { id: string; depth: number }) => {
    const { node, isOpen } = useOuTreeNode(id)
    const { toggle, cache } = useOuTree()
    if (!node) {
        return null
    }
    const children = cache.getChildren(id)
    return (
        <li style={{ paddingLeft: depth * 20 }}>
            <button
                type="button"
                onClick={() => toggle(id)}
                disabled={node.leaf}
            >
                {node.leaf ? '·' : isOpen ? '▾' : '▸'}
            </button>{' '}
            {node.displayName}
            {children.status === 'loading' && <em> loading…</em>}
            {children.status === 'failed' && (
                <em>
                    {' '}
                    {String(children.error)}{' '}
                    <button
                        type="button"
                        onClick={() => cache.retryChildrenPage(id, 1)}
                    >
                        retry
                    </button>
                </em>
            )}
        </li>
    )
}

/**
 * Temporary: every row of the tree as a plain list, loading every hole
 * eagerly. Exercises browse mode in a browser while there is no renderer.
 */
export const Browse = () => {
    const tree = useOuTree()
    const { rowCount, rootsStatus, ensureChildrenLoaded } = tree
    useEffect(() => {
        ensureChildrenLoaded(0, rowCount - 1)
    })
    if (rootsStatus.status === 'loading') {
        return <p>Loading roots…</p>
    }
    if (rootsStatus.status === 'failed') {
        return (
            <p>
                {String(rootsStatus.error)}{' '}
                <button type="button" onClick={tree.retryRoots}>
                    retry
                </button>
            </p>
        )
    }
    return (
        <ul className="browse">
            {Array.from({ length: rowCount }, (_, index) => {
                const row = tree.getRow(index)
                if (row.kind === 'node') {
                    return (
                        <NodeRow key={row.id} id={row.id} depth={row.depth} />
                    )
                }
                if (row.kind === 'skeleton') {
                    return (
                        <li
                            key={`s-${row.parentId}-${row.index}`}
                            style={{ paddingLeft: row.depth * 20 }}
                        >
                            <em>loading…</em>
                        </li>
                    )
                }
                return (
                    <li
                        key={`e-${row.parentId}-${row.page}-${index}`}
                        style={{ paddingLeft: row.depth * 20 }}
                    >
                        <em>{String(row.error)}</em>{' '}
                        <button
                            type="button"
                            onClick={() =>
                                tree.cache.retryChildrenPage(
                                    row.parentId,
                                    row.page
                                )
                            }
                        >
                            retry page {row.page}
                        </button>
                    </li>
                )
            })}
            <style jsx>{`
                .browse {
                    list-style: none;
                    margin: 0;
                    padding: ${spacers.dp8};
                    font-family: monospace;
                    font-size: 13px;
                    color: ${colors.grey900};
                }
                em {
                    color: ${colors.grey600};
                }
            `}</style>
        </ul>
    )
}
