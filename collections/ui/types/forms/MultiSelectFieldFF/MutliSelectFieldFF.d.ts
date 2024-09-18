import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type {
    MultiSelectOptionProps,
    MultiSelectFieldProps,
} from '../../select.d.ts'

type InputValue = MultiSelectFieldProps['selected'] | ''

type MultiSelectFieldRestProps = Omit<
    MultiSelectFieldProps,
    'onChange' | 'value'
>

type MultiSelectOptions = Array<Pick<MultiSelectOptionProps, 'value' | 'label'>>

export type MultiSelectFieldFFProps = FieldRenderProps<InputValue> &
    MultiSelectFieldRestProps & {
        showLoadingStatus?: boolean
        showValidStatus?: boolean
        options: MultiSelectOptions
    }

export const MultiSelectFieldFF: React.FC<MultiSelectFieldFFProps>
