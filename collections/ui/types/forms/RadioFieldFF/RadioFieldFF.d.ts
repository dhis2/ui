import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type { RadioProps } from '../../radio.d.ts'

type InputValue = RadioProps['value']

type RadioRestProps = Omit<
    RadioProps,
    'onChange' | 'value' | 'checked' | 'name'
>

export type RadioFieldFFProps = FieldRenderProps<InputValue> &
    RadioRestProps & {
        showValidStatus?: boolean
    }

export const RadioFieldFF: React.FC<RadioFieldFFProps>
