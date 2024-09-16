import * as React from 'react'

export type CenterPosition = 'top' | 'middle' | 'bottom'

export interface CenterProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Vertical alignment
     */
    position?: CenterPosition
}

export const Center: React.FC<CenterProps>
