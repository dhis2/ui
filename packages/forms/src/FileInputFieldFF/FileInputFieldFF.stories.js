import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { FileInputFieldFF } from './FileInputFieldFF.js'

const files = [new File([], 'file1.txt'), new File([], 'file2.txt')]

export default {
    title: 'FOrms/File Input/File Input Field (Final Form)',
    component: FileInputFieldFF,
    decorators: [formDecorator],
}

export const Default = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
    />
)

export const Required = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
        required
        validate={hasValue}
    />
)

export const Multifile = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
        multifile
    />
)

export const WithValues = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
        required
        multifile
        initialValue={files}
        validate={hasValue}
    />
)

WithValues.story = {
    name: 'With values',
}

export const PreventPlaceholder = () => (
    <Field
        component={FileInputFieldFF}
        name="upload"
        label="This is a file upload"
        placeholder=""
    />
)

PreventPlaceholder.story = {
    name: 'Prevent placeholder',
}
