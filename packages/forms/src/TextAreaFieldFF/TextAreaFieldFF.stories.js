import { storiesOf } from '@storybook/react'
import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { TextAreaFieldFF } from './TextAreaFieldFF.js'

storiesOf('TextAreaFieldFF', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={TextAreaFieldFF} name="agree" label="Do you agree?" />
    ))
    .add('Autogrow', () => (
        <Field
            component={TextAreaFieldFF}
            name="agree"
            label="Do you agree?"
            autoGrow
        />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={TextAreaFieldFF}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field
            name="agree"
            component={TextAreaFieldFF}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={TextAreaFieldFF}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
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
    ))
