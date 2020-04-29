import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, CheckboxControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Form/CheckboxControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            type="checkbox"
            component={CheckboxControl}
            name="agree"
            label="Do you agree?"
        />
    ))
    .add('Required', () => (
        <Field
            type="checkbox"
            name="agree"
            component={CheckboxControl}
            required
            validate={hasValue}
            label="Do you agree?"
            value="yes"
        />
    ))
    .add('Disabled', () => (
        <Field
            type="checkbox"
            name="agree"
            component={CheckboxControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            type="checkbox"
            name="agree"
            component={CheckboxControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                type="checkbox"
                name="valid"
                component={CheckboxControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                type="checkbox"
                name="warning"
                component={CheckboxControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                type="checkbox"
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
                type="checkbox"
                name="bool"
                component={CheckboxControl}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <Field
                type="checkbox"
                name="string"
                component={CheckboxControl}
                label="I produce string form values"
                value="checked-value"
                helpText="Click submit and check the console"
            />
            <Field
                type="checkbox"
                name="string"
                component={CheckboxControl}
                label="I also produce string form values"
                value="another-checked-value"
                helpText="Click submit and check the console"
            />
        </>
    ))
