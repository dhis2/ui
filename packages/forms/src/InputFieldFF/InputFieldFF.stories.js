import React from 'react'
import { storiesOf } from '@storybook/react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { InputFieldFF } from './InputFieldFF.js'

storiesOf('InputFieldFF', module)
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
    .add('Disabled', () => (
        <Field
            name="agree"
            component={InputFieldFF}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={InputFieldFF}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
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
    ))
