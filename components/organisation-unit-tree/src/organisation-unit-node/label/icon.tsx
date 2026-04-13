import React from 'react'
import { IconEmpty } from './icon-empty.tsx'
import { IconFolderClosed } from './icon-folder-closed.tsx'
import { IconFolderOpen } from './icon-folder-open.tsx'
import { IconSingle } from './icon-single.tsx'

export interface IconProps {
    dataTest: string
    hasChildren?: boolean
    loading?: boolean
    open?: boolean
}

export const Icon = ({ loading, hasChildren, open, dataTest }: IconProps) => {
    if (loading) {
        return <IconEmpty dataTest={dataTest} />
    }

    if (!hasChildren) {
        return <IconSingle dataTest={dataTest} />
    }

    if (open) {
        return <IconFolderOpen dataTest={dataTest} />
    }

    return <IconFolderClosed dataTest={dataTest} />
}
