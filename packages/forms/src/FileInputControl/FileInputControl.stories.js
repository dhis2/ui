import React from 'react'
import { storiesOf } from '@storybook/react'

import { FieldControl, FileInputControl, hasValue } from '../index.js'
import { formDecorator } from '../formDecorator.js'

const files = [new File([], 'file1.txt'), new File([], 'file2.txt')]

storiesOf('Form/FileInputControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <FieldControl
            component={FileInputControl}
            name="upload"
            label="This is a file upload"
        />
    ))
    .add('Required', () => (
        <FieldControl
            component={FileInputControl}
            name="upload"
            label="This is a file upload"
            required
            validate={hasValue}
        />
    ))
    .add('Multifile', () => (
        <FieldControl
            component={FileInputControl}
            name="upload"
            label="This is a file upload"
            multifile
        />
    ))
    .add('With values', () => (
        <FieldControl
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
        <FieldControl
            component={FileInputControl}
            name="upload"
            label="This is a file upload"
            placeholder=""
        />
    ))
