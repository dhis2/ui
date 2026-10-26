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
     * Replaces the default status icon; `error`, `warning`, and `valid` still set box colors. Treated as decorative and hidden from screen readers
     */
    icon?: React.ReactNode
    /**
     * Applies 'error' message styles. Mutually exclusive with the `valid` and `warning` props
     */
    error?: boolean
    /**
     * Use `alert` for errors after a user action, e.g. a failed save, not on page load. Use `status` only if the content changes while the box is shown
     */
    role?: 'note' | 'status' | 'alert'
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
