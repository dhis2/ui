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
