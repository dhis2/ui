import React from 'react'
import { storiesOf } from '@storybook/react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { InputFieldFF } from './InputFieldFF.js'

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
