import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, TextAreaControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('TextArea', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={TextAreaControl}
            name="comment"
            label="Do you have any comments?"
        />
    ))
    .add('Required', () => (
        <Field
            required
            name="comment"
            component={TextAreaControl}
            validate={hasValue}
            label="Do you have any comments?"
        />
    ))
