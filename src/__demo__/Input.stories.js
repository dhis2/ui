import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Input, hasValue } from '../index.js'

storiesOf('Input', module)
    .add('Default', () => (
        <Field component={Input} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={Input}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field name="agree" component={Input} disabled label="Do you agree?" />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={Input}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={Input}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={Input}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={Input}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
