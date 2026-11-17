import React, { useRef } from 'react'
import { useOuTree, useOuTreeActions } from '../tree'
import { OuTreeContainer } from './ou-tree-container'
import { OuTreeNoResults } from './ou-tree-no-results'
import type { RenderLabel } from './ou-tree-node-row'
import { OuTreeRootsRows } from './ou-tree-roots-rows'
import { OuTreeRow } from './ou-tree-row'
import { OuTreeVirtualRow } from './ou-tree-virtual-row'
import { OuTreeVirtualSizer } from './ou-tree-virtual-sizer'
import { useOuTreeKeyboard } from './use-ou-tree-keyboard'
import {
    type OuTreeVirtualRows,
    useOuTreeVirtualRows,
} from './use-ou-tree-virtual-rows'

export interface OuTreeListProps {
    renderLabel?: RenderLabel
    className?: string
    dataTest?: string
}

interface ListContentProps {
    virtualRows: OuTreeVirtualRows
    renderLabel?: RenderLabel
    dataTest: string
}

/**
 * The rows, or what stands in for them: the no-results line, or the roots
 * rows while the roots load or fail in browse mode.
 */
const ListContent = ({
    virtualRows,
    renderLabel,
    dataTest,
}: ListContentProps) => {
    const { rootsStatus, rootIds, getRow, mode, searchStatus } = useOuTree()
    const { retryRoots } = useOuTreeActions()
    const { virtualItems, totalSize, measureElement } = virtualRows

    const searching = mode === 'search'
    const noResults =
        searching &&
        searchStatus.status === 'loaded' &&
        searchStatus.total === 0
    if (noResults) {
        return <OuTreeNoResults dataTest={`${dataTest}-no-results`} />
    }
    if (!searching && rootsStatus.status !== 'loaded') {
        return (
            <OuTreeRootsRows
                rootIds={rootIds}
                failed={rootsStatus.status === 'failed'}
                onRetry={retryRoots}
                dataTest={dataTest}
            />
        )
    }
    return (
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
    )
}

/**
 * The scrolling, virtualised list of the tree's rows, one tab stop with the
 * treeview keys. Fills its box, so the box needs a height. Must be inside
 * an OuTreeProvider. In search mode it shows the rows whatever the roots'
 * status, or the no-results line. The virtualiser lives here, always
 * mounted, so it keeps its measurements across those states.
 */
export const OuTreeList = ({
    renderLabel,
    className,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const virtualRows = useOuTreeVirtualRows({ scrollRef })
    const keyboard = useOuTreeKeyboard({
        scrollRef,
        scrollToIndex: virtualRows.scrollToIndex,
        firstVisibleIndex: virtualRows.firstVisibleIndex,
    })
    return (
        <OuTreeContainer
            ref={scrollRef}
            {...keyboard}
            className={className}
            dataTest={dataTest}
        >
            <ListContent
                virtualRows={virtualRows}
                renderLabel={renderLabel}
                dataTest={dataTest}
            />
        </OuTreeContainer>
    )
}
