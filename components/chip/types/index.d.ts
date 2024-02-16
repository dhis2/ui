import * as React from 'react'

export interface ChipProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    dragging?: boolean
    icon?: React.ReactElement<any>
    /**
     * `margin-bottom` value, applied in `px`
     */
    marginBottom?: number
    /**
     * `margin-inline-start` value, applied in `px` (if marginInlineStart not provided)
     */
    marginLeft?: number
    /**
     * `margin-inline-end` value, applied in `px` (if marginInlineEnd not provided)
     */
    marginRight?: number
    /**
     * `margin-inline-start` value, applied in `px`
     */
    marginInlineStart?: number
    /**
     * `margin-inline-end` value, applied in `px`
     */
    marginInlineEnd?: number
    /**
     * `margin-top` value, applied in `px`
     */
    marginTop?: number
    overflow?: boolean
    selected?: boolean
    onClick?: (arg0: {}, arg1: React.MouseEvent<HTMLSpanElement>) => void
    onRemove?: (arg0: {}, arg1: React.MouseEvent<HTMLSpanElement>) => void
}

export const Chip: React.FC<ChipProps>
