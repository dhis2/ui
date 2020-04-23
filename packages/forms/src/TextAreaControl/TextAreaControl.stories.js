import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, TextAreaControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Form/TextAreaControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={TextAreaControl} name="agree" label="Do you agree?" />
    ))
    .add('Autogrow', () => (
        <Field
            component={TextAreaControl}
            name="agree"
            label="Do you agree?"
            autoGrow
        />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={TextAreaControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field
            name="agree"
            component={TextAreaControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={TextAreaControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={TextAreaControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={TextAreaControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={TextAreaControl}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
