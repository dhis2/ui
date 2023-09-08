import * as React from 'react'

export interface LegendProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Indicates the associated field set is required
     */
    required?: boolean
}

export const Legend: React.FC<LegendProps>
