import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Checkbox, hasValue } from '../index.js'

storiesOf('Checkbox', module)
    .add('Default', () => (
        <Field component={Checkbox} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={Checkbox}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field
            name="agree"
            component={Checkbox}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={Checkbox}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={Checkbox}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={Checkbox}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={Checkbox}
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
                component={Checkbox}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <Field
                name="string"
                component={Checkbox}
                label="I produce string form values"
                checkedValue="value_when_checked"
                helpText="Click submit and check the console"
            />
        </>
    ))
