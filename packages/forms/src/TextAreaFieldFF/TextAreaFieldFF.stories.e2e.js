import React from 'react'
import { Field } from 'react-final-form'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { TextAreaFieldFF } from './TextAreaFieldFF.js'

storiesOf('TextArea', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={TextAreaFieldFF}
            name="comment"
            label="Do you have any comments?"
        />
    ))
    .add('Required', () => (
        <Field
            required
            name="comment"
            component={TextAreaFieldFF}
            validate={hasValue}
            label="Do you have any comments?"
        />
    ))
