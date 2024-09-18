import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type { TextAreaFieldProps } from '../../text-area.d.ts'

type InputValue = TextAreaFieldProps['value']

type TextAreaFieldRestProps = Omit<
    TextAreaFieldProps,
    'onChange' | 'value' | 'name'
>

export type TextAreaFieldFFProps = FieldRenderProps<InputValue> &
    TextAreaFieldRestProps

export const TextAreaFieldFF: React.FC<TextAreaFieldFFProps>
