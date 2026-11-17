import i18n from '@dhis2/d2-i18n'
import React, { memo } from 'react'
import {
    type Row,
    rowKey,
    useOuTreeRowElementId,
    useOuTreeRowFocused,
} from '../tree'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeSkeleton } from './ou-tree-skeleton'
import { OuTreeToggle } from './ou-tree-toggle'

export type SkeletonRow = Extract<
    Row,
    { kind: 'children-skeleton' | 'result-skeleton' }
>

export interface OuTreeSkeletonRowProps {
    row: SkeletonRow
    dataTest?: string
}

export const OuTreeSkeletonRow = memo(function OuTreeSkeletonRow({
    row,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeSkeletonRowProps) {
    const key = rowKey(row)
    const elementId = useOuTreeRowElementId(key)
    const focused = useOuTreeRowFocused(key)
    return (
        <OuTreeRowShell
            depth={row.depth}
            elementId={elementId}
            focused={focused}
            ariaLabel={i18n.t('Loading')}
            ariaBusy
            rowKind={row.kind}
            dataTest={`${dataTest}-row`}
        >
            <OuTreeToggle leaf dataTest={`${dataTest}-toggle-space`} />
            <OuTreeSkeleton dataTest={`${dataTest}-skeleton`} />
        </OuTreeRowShell>
    )
})
