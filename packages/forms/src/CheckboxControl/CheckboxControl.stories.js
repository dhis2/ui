import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, CheckboxControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Form/CheckboxControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={CheckboxControl} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={CheckboxControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field
            name="agree"
            component={CheckboxControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={CheckboxControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={CheckboxControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={CheckboxControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={CheckboxControl}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
    .add('Value when checked', () => (
        <>
            <Field
                name="bool"
                component={CheckboxControl}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <Field
                name="string"
                component={CheckboxControl}
                label="I produce string form values"
                checkedValue="value_when_checked"
                helpText="Click submit and check the console"
            />
        </>
    ))
