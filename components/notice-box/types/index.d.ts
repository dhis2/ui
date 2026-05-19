import * as React from 'react'

export interface NoticeBoxProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Uses 16px icons and tighter padding and internal spacing
     */
    dense?: boolean
    /**
     * Replaces the default status icon; `error`, `warning`, and `valid` still set box colors
     */
    icon?: React.ReactNode
    /**
     * Applies 'error' message styles. Mutually exclusive with the `valid` and `warning` props
     */
    error?: boolean
    title?: string
    /**
     * Applies 'valid' message styles. Mutually exclusive with the `error` and `warning` props
     */
    valid?: boolean
    /**
     * Applies 'warning' message styles. Mutually exclusive with the `error` and `valid` props
     */
    warning?: boolean
}

export const NoticeBox: React.FC<NoticeBoxProps>
