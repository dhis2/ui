import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, CheckboxControl, hasValue } from '../index.js'

storiesOf('Form/CheckboxControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <FieldControl
            component={CheckboxControl}
            name="agree"
            label="Do you agree?"
        />
    ))
    .add('Required', () => (
        <FieldControl
            name="agree"
            component={CheckboxControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <FieldControl
            name="agree"
            component={CheckboxControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <FieldControl
            name="agree"
            component={CheckboxControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <FieldControl
                name="valid"
                component={CheckboxControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <FieldControl
                name="warning"
                component={CheckboxControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <FieldControl
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
            <FieldControl
                name="bool"
                component={CheckboxControl}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <FieldControl
                name="string"
                component={CheckboxControl}
                label="I produce string form values"
                checkedValue="value_when_checked"
                helpText="Click submit and check the console"
            />
        </>
    ))
