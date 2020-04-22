import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, SwitchControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Form/SwitchControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={SwitchControl} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={SwitchControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field
            name="agree"
            component={SwitchControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={SwitchControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={SwitchControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={SwitchControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={SwitchControl}
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
                component={SwitchControl}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <Field
                name="string"
                component={SwitchControl}
                label="I produce string form values"
                checkedValue="value_when_checked"
                helpText="Click submit and check the console"
            />
        </>
    ))
