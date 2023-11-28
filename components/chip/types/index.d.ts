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
     * `margin-left` value, applied in `px`
     */
    marginLeft?: number
    /**
     * `margin-right` value, applied in `px`
     */
    marginRight?: number
    /**
     * `margin-top` value, applied in `px`
     */
    marginTop?: number
    overflow?: boolean
    selected?: boolean
    tabIndex?: string
    onClick?: (arg0: {}, arg1: React.MouseEvent<HTMLSpanElement>) => void
    onRemove?: (arg0: {}, arg1: React.MouseEvent<HTMLSpanElement>) => void
}

export const Chip: React.FC<ChipProps>
