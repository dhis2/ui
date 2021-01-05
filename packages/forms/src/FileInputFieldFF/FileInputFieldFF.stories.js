import { storiesOf } from '@storybook/react'
import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { FileInputFieldFF } from './FileInputFieldFF.js'

const files = [new File([], 'file1.txt'), new File([], 'file2.txt')]

storiesOf('FileInputFieldFF', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={FileInputFieldFF}
            name="upload"
            label="This is a file upload"
        />
    ))
    .add('Required', () => (
        <Field
            component={FileInputFieldFF}
            name="upload"
            label="This is a file upload"
            required
            validate={hasValue}
        />
    ))
    .add('Multifile', () => (
        <Field
            component={FileInputFieldFF}
            name="upload"
            label="This is a file upload"
            multifile
        />
    ))
    .add('With values', () => (
        <Field
            component={FileInputFieldFF}
            name="upload"
            label="This is a file upload"
            required
            multifile
            initialValue={files}
            validate={hasValue}
        />
    ))
    .add('Prevent placeholder', () => (
        <Field
            component={FileInputFieldFF}
            name="upload"
            label="This is a file upload"
            placeholder=""
        />
    ))
