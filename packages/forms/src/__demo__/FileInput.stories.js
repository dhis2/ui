import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, FileInput, hasValue } from '../index.js'
import { formDecorator } from '../formDecorator.js'

const files = [new File([], 'file1.txt'), new File([], 'file2.txt')]

storiesOf('Form/FileInput', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={FileInput}
            name="upload"
            label="This is a file upload"
        />
    ))
    .add('Required', () => (
        <Field
            component={FileInput}
            name="upload"
            label="This is a file upload"
            required
            validate={hasValue}
        />
    ))
    .add('Multifile', () => (
        <Field
            component={FileInput}
            name="upload"
            label="This is a file upload"
            multifile
        />
    ))
    .add('With values', () => (
        <Field
            component={FileInput}
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
            component={FileInput}
            name="upload"
            label="This is a file upload"
            placeholder=""
        />
    ))
