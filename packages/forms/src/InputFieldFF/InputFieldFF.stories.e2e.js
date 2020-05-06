import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, InputFieldFF, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Testing:InputFieldFF', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={InputFieldFF} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={InputFieldFF}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
