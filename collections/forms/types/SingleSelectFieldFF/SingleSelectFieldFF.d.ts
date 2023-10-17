import React from 'react'
import type { FieldRenderProps } from 'react-final-form'
import type {
    SingleSelectOptionProps,
    SingleSelectFieldProps,
} from '@dhis2-ui/select'

type InputValue = SingleSelectFieldProps['selected']

type SingleSelectOptions = Array<
    Pick<SingleSelectOptionProps, 'value' | 'label'>
>

type SingleSelectOverriddenProps = Omit<
    SingleSelectFieldProps,
    'onChange' | 'value' | 'name'
>

export type SingleSelectFieldFFProps = FieldRenderProps<InputValue> &
    SingleSelectOverriddenProps & {
        showLoadingStatus?: boolean
        showValidStatus?: boolean
        options: SingleSelectOptions
    }

export const SingleSelectFieldFF: React.FC<SingleSelectFieldFFProps>
