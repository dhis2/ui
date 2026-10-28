import React from 'react'
import { OuTreeRetrySkeleton } from './ou-tree-retry-skeleton'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeSkeleton } from './ou-tree-skeleton'
import { OuTreeToggle } from './ou-tree-toggle'

export interface OuTreeRootsRowsProps {
    rootIds: string[]
    failed: boolean
    onRetry: () => void
    dataTest?: string
}

/** One placeholder row per root id while the roots load, or after they failed. */
export const OuTreeRootsRows = ({
    rootIds,
    failed,
    onRetry,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeRootsRowsProps) => (
    <>
        {rootIds.map((id) => (
            <OuTreeRowShell
                key={id}
                depth={0}
                rowKind="roots"
                dataTest={`${dataTest}-row`}
            >
                <OuTreeToggle leaf dataTest={`${dataTest}-toggle-space`} />
                {failed ? (
                    <OuTreeRetrySkeleton
                        onRetry={onRetry}
                        dataTest={`${dataTest}-retry`}
                    />
                ) : (
                    <OuTreeSkeleton dataTest={`${dataTest}-skeleton`} />
                )}
            </OuTreeRowShell>
        ))}
    </>
)
