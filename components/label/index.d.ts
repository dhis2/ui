import * as React from 'react'

export interface LabelProps {
    children?: string
    className?: string
    dataTest?: string
    disabled?: boolean
    htmlFor?: string
    required?: boolean
}

export const Label: React.FC<LabelProps>
