import React from 'react'
import type { FileInputFieldProps } from '@dhis2-ui/file-input'
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
