import React from 'react'
import { storiesOf } from '@storybook/react'

import { formDecorator } from '../formDecorator.js'
import { ReactFinalForm, InputControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Form/InputControl', module)
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
    .add('Disabled', () => (
        <Field
            name="agree"
            component={InputControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={InputControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={InputControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={InputControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={InputControl}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
