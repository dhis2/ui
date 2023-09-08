import * as React from 'react'

export interface CoverProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Adds a semi-transparent background to the cover
     */
    translucent?: boolean
    onClick?: (arg0: {}, arg1: React.MouseEvent<HTMLDivElement>) => void
}

export const Cover: React.FC<CoverProps>
