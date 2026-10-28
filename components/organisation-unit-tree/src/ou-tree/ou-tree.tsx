import React from 'react'
import { OuTreeList, type OuTreeListProps } from './list/index'
import { OuTreeProvider, type OuTreeProviderProps } from './tree/index'

export interface OuTreeProps
    extends Omit<OuTreeProviderProps, 'children'>, OuTreeListProps {}

/** The default tree: a provider around the virtualised list. */
export const OuTree = ({
    rootIds,
    shortName,
    initiallyOpen,
    ...listProps
}: OuTreeProps) => (
    <OuTreeProvider
        rootIds={rootIds}
        shortName={shortName}
        initiallyOpen={initiallyOpen}
    >
        <OuTreeList {...listProps} />
    </OuTreeProvider>
)
