import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type {
    MultiSelectOptionProps,
    MultiSelectFieldProps,
} from '@dhis2-ui/select'

type InputValue = MultiSelectFieldProps['selected'] | ''

type MultiSelectFieldOverriddenProps = Omit<
    MultiSelectFieldProps,
    'onChange' | 'value'
>

type MultiSelectOptions = Array<Pick<MultiSelectOptionProps, 'value' | 'label'>>

export type MultiSelectFieldFFProps = FieldRenderProps<InputValue> &
    MultiSelectFieldOverriddenProps & {
        showLoadingStatus?: boolean
        showValidStatus?: boolean
        options: MultiSelectOptions
    }

export const MultiSelectFieldFF: React.FC<MultiSelectFieldFFProps>
