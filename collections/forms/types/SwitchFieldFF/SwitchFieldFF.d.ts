import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type { SwitchFieldProps } from '@dhis2-ui/switch'

type InputValue = SwitchFieldProps['value']

type SwitchFieldRestProps = Omit<
    SwitchFieldProps,
    'onChange' | 'checked' | 'value' | 'name'
>

export type SwitchFieldFFProps = FieldRenderProps<InputValue> &
    SwitchFieldRestProps

export const SwitchFieldFF: React.FC<SwitchFieldFFProps>
