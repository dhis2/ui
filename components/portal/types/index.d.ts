import * as React from 'react'

export interface PortalProps {
    children?: React.ReactNode
    disable?: boolean
    node?: React.ReactNode
}

export const Portal: React.FC<PortalProps>
