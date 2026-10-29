import React, { useRef } from 'react'
import { useOuTree, useOuTreeActions } from '../tree/index'
import { OuTreeContainer } from './ou-tree-container'
import { OuTreeNoResults } from './ou-tree-no-results'
import type { RenderLabel } from './ou-tree-node-row'
import { OuTreeRootsRows } from './ou-tree-roots-rows'
import { OuTreeRow } from './ou-tree-row'
import { OuTreeVirtualRow } from './ou-tree-virtual-row'
import { OuTreeVirtualSizer } from './ou-tree-virtual-sizer'
import { useOuTreeVirtualRows } from './use-ou-tree-virtual-rows'

export interface OuTreeListProps {
    renderLabel?: RenderLabel
    className?: string
    dataTest?: string
}

/**
 * The scrolling, virtualised list of the tree's rows. Fills its box, so the
 * box needs a height. Must be inside an OuTreeProvider. In filtered mode it
 * shows the rows whatever the roots' status, or the no-results line.
 */
export const OuTreeList = ({
    renderLabel,
    className,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const { rootsStatus, rootIds, getRow, mode, searchStatus } = useOuTree()
    const { retryRoots } = useOuTreeActions()
    const { virtualItems, totalSize, measureElement } = useOuTreeVirtualRows({
        scrollRef,
    })

    const filtered = mode === 'filtered'
    const noResults =
        filtered && searchStatus.status === 'loaded' && searchStatus.total === 0

    return (
        <OuTreeContainer
            ref={scrollRef}
            className={className}
            dataTest={dataTest}
        >
            {noResults ? (
                <OuTreeNoResults dataTest={`${dataTest}-no-results`} />
            ) : filtered || rootsStatus.status === 'loaded' ? (
                <OuTreeVirtualSizer height={totalSize}>
                    {virtualItems.map((item) => (
                        <OuTreeVirtualRow
                            key={item.key}
                            item={item}
                            measureElement={measureElement}
                        >
                            <OuTreeRow
                                row={getRow(item.index)}
                                renderLabel={renderLabel}
                                dataTest={dataTest}
                            />
                        </OuTreeVirtualRow>
                    ))}
                </OuTreeVirtualSizer>
            ) : (
                <OuTreeRootsRows
                    rootIds={rootIds}
                    failed={rootsStatus.status === 'failed'}
                    onRetry={retryRoots}
                    dataTest={dataTest}
                />
            )}
        </OuTreeContainer>
    )
}
