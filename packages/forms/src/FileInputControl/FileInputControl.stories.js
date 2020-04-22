import React from 'react'
import { storiesOf } from '@storybook/react'

import { ReactFinalForm, FileInputControl, hasValue } from '../index.js'
import { formDecorator } from '../formDecorator.js'

const { Field } = ReactFinalForm

const files = [new File([], 'file1.txt'), new File([], 'file2.txt')]

storiesOf('Form/FileInputControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={FileInputControl}
            name="upload"
            label="This is a file upload"
        />
    ))
    .add('Required', () => (
        <Field
            component={FileInputControl}
            name="upload"
            label="This is a file upload"
            required
            validate={hasValue}
        />
    ))
    .add('Multifile', () => (
        <Field
            component={FileInputControl}
            name="upload"
            label="This is a file upload"
            multifile
        />
    ))
    .add('With values', () => (
        <Field
            component={FileInputControl}
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
            component={FileInputControl}
            name="upload"
            label="This is a file upload"
            placeholder=""
        />
    ))
