import React, { memo } from 'react'
import type { Row } from '../tree/index'
import { OuTreeErrorRow } from './ou-tree-error-row'
import { OuTreeNodeRow, type RenderLabel } from './ou-tree-node-row'
import { OuTreeSkeletonRow } from './ou-tree-skeleton-row'

export interface OuTreeRowProps {
    row: Row
    renderLabel?: RenderLabel
    dataTest?: string
}

/** The default row component for each row kind. */
export const OuTreeRow = memo(function OuTreeRow({
    row,
    renderLabel,
    dataTest,
}: OuTreeRowProps) {
    switch (row.kind) {
        case 'node':
            return (
                <OuTreeNodeRow
                    row={row}
                    renderLabel={renderLabel}
                    dataTest={dataTest}
                />
            )
        case 'skeleton':
            return <OuTreeSkeletonRow row={row} dataTest={dataTest} />
        case 'error':
            return <OuTreeErrorRow row={row} dataTest={dataTest} />
    }
})
