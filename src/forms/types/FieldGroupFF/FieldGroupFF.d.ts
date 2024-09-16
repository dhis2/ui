import React from 'react'
import type { FieldGroupProps } from '@dhis2-ui/field'

export type FieldGroupFFProps = Omit<
    FieldGroupProps,
    'children' | 'label' | 'name' | 'required'
>

export const FieldGroupFF: React.FC<FieldGroupFFProps>
