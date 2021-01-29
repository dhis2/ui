import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { TextAreaFieldFF } from './TextAreaFieldFF.js'

export default {
    title: 'Forms/Text Area/Text Area Field (Final Form)',
    component: TextAreaFieldFF,
    decorators: [formDecorator],
}

export const Default = () => (
    <Field component={TextAreaFieldFF} name="agree" label="Do you agree?" />
)

export const Autogrow = () => (
    <Field
        component={TextAreaFieldFF}
        name="agree"
        label="Do you agree?"
        autoGrow
    />
)

export const Required = () => (
    <Field
        name="agree"
        component={TextAreaFieldFF}
        required
        validate={hasValue}
        label="Do you agree?"
    />
)

export const Disabled = () => (
    <Field
        name="agree"
        component={TextAreaFieldFF}
        disabled
        label="Do you agree?"
    />
)

export const HelpText = () => (
    <Field
        name="agree"
        component={TextAreaFieldFF}
        label="Do you agree?"
        helpText="Click to agree"
    />
)
HelpText.storyName = 'Help text'

export const Statuses = () => (
    <>
        <Field
            name="valid"
            component={TextAreaFieldFF}
            label="Valid"
            valid
            validationText="Validation text"
        />
        <Field
            name="warning"
            component={TextAreaFieldFF}
            label="Warning"
            warning
            validationText="Validation text"
        />
        <Field
            name="error"
            component={TextAreaFieldFF}
            label="Error"
            error
            validationText="Validation text"
        />
    </>
)
