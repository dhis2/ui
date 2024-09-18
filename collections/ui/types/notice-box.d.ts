import * as React from 'react'

export interface NoticeBoxProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
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
