import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Switch, hasValue } from '../index.js'

storiesOf('Switch', module)
    .add('Default', () => (
        <Field component={Switch} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={Switch}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field name="agree" component={Switch} disabled label="Do you agree?" />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={Switch}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={Switch}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={Switch}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={Switch}
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
                component={Switch}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <Field
                name="string"
                component={Switch}
                label="I produce string form values"
                checkedValue="value_when_checked"
                helpText="Click submit and check the console"
            />
        </>
    ))
