import * as React from 'react'

export interface LabelProps {
    children?: string
    className?: string
    dataTest?: string
    disabled?: boolean
    htmlFor?: string
    id?: string
    required?: boolean
}

export const Label: React.FC<LabelProps>
