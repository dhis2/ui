import { storiesOf } from '@storybook/react'
import React from 'react'
import { formDecorator } from '../formDecorator.js'
import { ReactFinalForm, TextAreaFieldFF, hasValue } from '../index.js'

const { Field } = ReactFinalForm

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
