import React, { memo } from 'react'
import type { Row } from '../tree/index'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeSkeleton } from './ou-tree-skeleton'
import { OuTreeToggle } from './ou-tree-toggle'

export type SkeletonRow = Extract<Row, { kind: 'skeleton' }>

export interface OuTreeSkeletonRowProps {
    row: SkeletonRow
    dataTest?: string
}

export const OuTreeSkeletonRow = memo(function OuTreeSkeletonRow({
    row,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeSkeletonRowProps) {
    return (
        <OuTreeRowShell
            depth={row.depth}
            rowKind="skeleton"
            dataTest={`${dataTest}-row`}
        >
            <OuTreeToggle leaf dataTest={`${dataTest}-toggle-space`} />
            <OuTreeSkeleton dataTest={`${dataTest}-skeleton`} />
        </OuTreeRowShell>
    )
})
