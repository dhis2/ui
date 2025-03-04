import type { FieldRenderProps } from 'react-final-form'
import type { CheckboxFieldProps } from '@dhis2-ui/checkbox'
import React from 'react'

type CheckBoxValue = CheckboxFieldProps['value']
type CheckboxRestProps = Omit<
    CheckboxFieldProps,
    'onChange' | 'value' | 'checked' | 'name'
>

export type CheckboxFieldFFProps = FieldRenderProps<CheckBoxValue> &
    CheckboxRestProps & {
        showValidStatus?: boolean
    }

export const CheckboxFieldFF: React.FC<CheckboxFieldFFProps>
