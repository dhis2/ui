import * as React from 'react'

export interface BoxProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    height?: string
    marginTop?: string
    maxHeight?: string
    maxWidth?: string
    minHeight?: string
    minWidth?: string
    overflow?: string
    width?: string
}

export const Box: React.FC<BoxProps>
