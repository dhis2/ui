import React from 'react'
import type { FileInputFieldProps } from '../../file-input.d.ts'
import type { FieldRenderProps } from 'react-final-form'

export type FilesValue = File[] | undefined | null | ''

type FileInputRestProps = Omit<
    FileInputFieldProps,
    'onChange' | 'multiple' | 'name'
>

export type FileInputFieldFFProps = FieldRenderProps<FilesValue> &
    FileInputRestProps & {
        showValidStatus?: boolean
        multifile: FileInputFieldProps['multiple']
    }

export const FileInputFieldFF: React.FC<FileInputFieldFFProps>
