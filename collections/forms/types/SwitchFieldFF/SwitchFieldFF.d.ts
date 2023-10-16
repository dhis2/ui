import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type { SwitchFieldProps } from '@dhis2-ui/switch'

type InputValue = SwitchFieldProps['value']

type SwitchFieldOverriddenProps = Omit<
    SwitchFieldProps,
    'onChange' | 'checked' | 'value' | 'name'
>

export type SwitchFieldFFProps = FieldRenderProps<InputValue> &
    SwitchFieldOverriddenProps

export const SwitchFieldFF: React.FC<SwitchFieldFFProps>
