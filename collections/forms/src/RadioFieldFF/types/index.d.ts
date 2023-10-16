import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type { RadioProps } from '@dhis2-ui/radio'

type InputValue = RadioProps['value']

type RadioOverriddenProps = Omit<RadioProps, 'onChange' | 'value' | | 'checked' | 'name'>

export type RadioFieldFFProps = FieldRenderProps<InputValue> &
    RadioOverriddenProps & {
        showValidStatus?: boolean
    }

export const RadioFieldFF: React.FC<MultiSelectFieldFFProps>
