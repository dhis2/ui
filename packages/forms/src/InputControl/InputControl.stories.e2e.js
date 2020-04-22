import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, InputControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Testing:InputControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={InputControl} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={InputControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
