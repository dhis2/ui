import * as React from 'react'
import { ButtonProps } from '@dhis2-ui/button'

export interface SelectorBarProps {
    children: React.ReactNode
    additionalContent?: React.ReactNode
    className?: string
    dataTest?: string
    disableClearSelections?: boolean
    onClearSelectionClick?: ButtonProps['onClick']
}

export const SelectorBar: React.FC<SelectorBarProps>

export interface SelectorBarItemProps {
    label: string
    children: React.ReactNode
    className?: string
    dataTest?: string
    disabled: boolean
    displayOnly?: boolean
    noValueMessage?: string
    open?: boolean
    setOpen?: (open: boolean) => void
    value?: string
    onClearSelectionClick: () => void
}
