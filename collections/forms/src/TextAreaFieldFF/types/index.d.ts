import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type { TextAreaFieldProps } from '@dhis2-ui/text-area'

type InputValue = TextAreaFieldProps['value']

type TextAreaFieldOverriddenProps = Omit<
    TextAreaFieldProps,
    'onChange' | 'value' | 'name'
>

export type TextAreaFieldFFProps = FieldRenderProps<InputValue> &
    TextAreaFieldOverriddenProps

export const TextAreaFieldFF: React.FC<TextAreaFieldFFProps>
