import React from 'react'
import { storiesOf } from '@storybook/react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { CheckboxFieldFF } from './CheckboxFieldFF.js'

storiesOf('CheckboxFieldFF', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            name="agree"
            label="Do you agree?"
        />
    ))
    .add('Required', () => (
        <Field
            type="checkbox"
            name="agree"
            component={CheckboxFieldFF}
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
            component={CheckboxFieldFF}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            type="checkbox"
            name="agree"
            component={CheckboxFieldFF}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                type="checkbox"
                name="valid"
                component={CheckboxFieldFF}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                type="checkbox"
                name="warning"
                component={CheckboxFieldFF}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                type="checkbox"
                name="error"
                component={CheckboxFieldFF}
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
                component={CheckboxFieldFF}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <Field
                type="checkbox"
                name="string"
                component={CheckboxFieldFF}
                label="I produce string form values"
                value="checked-value"
                helpText="Click submit and check the console"
            />
            <Field
                type="checkbox"
                name="string"
                component={CheckboxFieldFF}
                label="I also produce string form values"
                value="another-checked-value"
                helpText="Click submit and check the console"
            />
        </>
    ))
