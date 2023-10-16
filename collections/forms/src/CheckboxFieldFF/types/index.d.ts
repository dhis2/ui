import type { FieldRenderProps } from 'react-final-form'
import type {
    CheckboxFocusHandler,
    CheckboxFieldProps,
} from '@dhis2-ui/checkbox'
import React from 'react'

export type CheckBoxValue = CheckboxFieldProps['value']
type CheckboxOverriddenProps = Omit<
    CheckboxFieldProps,
    'onChange' | 'value' | 'checked' | 'name'
>

export type CheckboxFieldFFProps = FieldRenderProps<CheckBoxValue> &
    CheckboxOverriddenProps & {
        showValidStatus?: boolean
    }

export const CheckboxFieldFF: React.FC<CheckboxFieldFFProps>
