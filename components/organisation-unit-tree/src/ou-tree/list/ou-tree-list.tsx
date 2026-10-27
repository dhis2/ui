import cx from 'classnames'
import React, { useRef } from 'react'
import { useOuTree, useOuTreeActions } from '../tree/index'
import type { RenderLabel } from './ou-tree-node-row'
import { OuTreeRetryButton } from './ou-tree-retry-button'
import { OuTreeRow } from './ou-tree-row'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeSkeleton } from './ou-tree-skeleton'
import { useOuTreeVirtualRows } from './use-ou-tree-virtual-rows'

export interface OuTreeListProps {
    renderLabel?: RenderLabel
    className?: string
    dataTest?: string
}

/**
 * The scrolling, virtualised list of the tree's rows. Fills its box, so the
 * box needs a height. Must be inside an OuTreeProvider.
 */
export const OuTreeList = ({
    renderLabel,
    className,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const { rootsStatus, requestedRoots, getRow } = useOuTree()
    const { retryRoots } = useOuTreeActions()
    const { virtualItems, totalSize, measureElement } = useOuTreeVirtualRows({
        scrollRef,
    })
    const rootsFailed = rootsStatus.status === 'failed'

    return (
        <div
            ref={scrollRef}
            role="tree"
            data-test={dataTest}
            className={cx('container', className)}
        >
            {rootsStatus.status === 'loaded' ? (
                <div className="sizer" style={{ height: totalSize }}>
                    {virtualItems.map((item) => (
                        <div
                            key={item.key}
                            className="positioned"
                            data-index={item.index}
                            ref={measureElement}
                            style={{
                                transform: `translateY(${item.start}px)`,
                            }}
                        >
                            <OuTreeRow
                                row={getRow(item.index)}
                                renderLabel={renderLabel}
                                dataTest={dataTest}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                requestedRoots.map((id) => (
                    <OuTreeRowShell
                        key={id}
                        depth={0}
                        rowKind="roots"
                        dataTest={`${dataTest}-row`}
                    >
                        <OuTreeSkeleton
                            error={rootsFailed}
                            dataTest={`${dataTest}-skeleton`}
                        />
                        {rootsFailed && (
                            <OuTreeRetryButton
                                onRetry={retryRoots}
                                dataTest={`${dataTest}-retry`}
                            />
                        )}
                    </OuTreeRowShell>
                ))
            )}
            <style jsx>{`
                .container {
                    height: 100%;
                    width: 100%;
                    overflow: auto;
                    position: relative;
                }
                .sizer {
                    position: relative;
                    width: 100%;
                }
                .positioned {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}
