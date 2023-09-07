import * as React from 'react'

export type LayerLevel = number | string

export type LayerPosition = 'absolute' | 'fixed'

export type LayerBackdropClickEvent = React.MouseEvent<HTMLDivElement>

export interface LayerProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Disable the Portal, useful for nesting layers
     */
    disablePortal?: boolean
    /**
     * Z-index level
     */
    level?: LayerLevel
    position?: LayerPosition
    /**
     * Adds a semi-transparent background
     */
    translucent?: boolean
    /**
     * Backdrop click handler
     */
    onBackdropClick?: (arg0: {}, arg1: LayerBackdropClickEvent) => void
    /**
     * Click handler - DEPRECATED
     */
    onClick?: any
}

export const Layer: React.FC<LayerProps>
