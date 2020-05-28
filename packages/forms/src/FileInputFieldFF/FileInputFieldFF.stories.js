import React from 'react'
import { storiesOf } from '@storybook/react'

import { ReactFinalForm, FileInputFieldFF, hasValue } from '../index.js'
import { formDecorator } from '../formDecorator.js'

const { Field } = ReactFinalForm

const files = [new File([], 'file1.txt'), new File([], 'file2.txt')]

storiesOf('Form/FileInputFieldFF', module)
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
