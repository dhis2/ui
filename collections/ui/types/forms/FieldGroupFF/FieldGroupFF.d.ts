import React from 'react'
import type { FieldGroupProps } from '../../field.d.ts'

export type FieldGroupFFProps = Omit<
    FieldGroupProps,
    'children' | 'label' | 'name' | 'required'
>

export const FieldGroupFF: React.FC<FieldGroupFFProps>
