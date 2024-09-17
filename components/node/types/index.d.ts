import * as React from 'react'

type NodeEventHandler = (
    payload: { open: boolean },
    event: React.MouseEvent<HTMLDivElement>
) => void

export interface NodeProps {
    /**
     * Content below this level of the hierarchy; children are revealed when this leaf is 'open'
     */
    children?: React.ReactNode
    className?: string
    /**
     * Content/label for this leaf, for example a checkbox
     */
    component?: React.ReactElement<any>
    dataTest?: string
    /**
     * A custom icon to use instead of a toggle arrow
     */
    icon?: React.ReactNode
    open?: boolean
    onClose?: NodeEventHandler
    onOpen?: NodeEventHandler
}

export const Node: React.FC<NodeProps>
