import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { InputFieldFF } from './InputFieldFF.js'

export default { title: 'TestingInputFieldFF', decorators: [formDecorator] }
export const Default = () => (
    <Field component={InputFieldFF} name="agree" label="Do you agree?" />
)
export const Required = () => (
    <Field
        name="agree"
        component={InputFieldFF}
        required
        validate={hasValue}
        label="Do you agree?"
    />
)
