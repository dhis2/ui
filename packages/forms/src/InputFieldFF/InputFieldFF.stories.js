import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { InputFieldFF } from './InputFieldFF.js'

export default {
    title: 'Forms/Input/Input Field (Final Form)',
    component: InputFieldFF,
    decorators: [formDecorator],
}

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

export const Disabled = () => (
    <Field
        name="agree"
        component={InputFieldFF}
        disabled
        label="Do you agree?"
    />
)

export const HelpText = () => (
    <Field
        name="agree"
        component={InputFieldFF}
        label="Do you agree?"
        helpText="Click to agree"
    />
)

HelpText.story = {
    name: 'Help text',
}

export const Statuses = () => (
    <>
        <Field
            name="valid"
            component={InputFieldFF}
            label="Valid"
            valid
            validationText="Validation text"
        />
        <Field
            name="warning"
            component={InputFieldFF}
            label="Warning"
            warning
            validationText="Validation text"
        />
        <Field
            name="error"
            component={InputFieldFF}
            label="Error"
            error
            validationText="Validation text"
        />
    </>
)
