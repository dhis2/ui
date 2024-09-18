import React from 'react'
import type { InputFieldProps } from '../../input.d.ts'
import type { FieldRenderProps } from 'react-final-form'

export type InputValue = InputFieldProps['value']

type InputFieldRestProps = Omit<InputFieldProps, 'onChange' | 'value' | 'name'>

export type InputFieldFFProps = FieldRenderProps<InputValue> &
    InputFieldRestProps & {
        showLoadingStatus?: boolean
        showValidStatus?: boolean
    }

export const InputFieldFF: React.FC<InputFieldFFProps>
