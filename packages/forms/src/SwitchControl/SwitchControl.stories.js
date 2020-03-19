import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, SwitchControl, hasValue } from '../index.js'

storiesOf('Form/SwitchControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <FieldControl
            component={SwitchControl}
            name="agree"
            label="Do you agree?"
        />
    ))
    .add('Required', () => (
        <FieldControl
            name="agree"
            component={SwitchControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <FieldControl
            name="agree"
            component={SwitchControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <FieldControl
            name="agree"
            component={SwitchControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <FieldControl
                name="valid"
                component={SwitchControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <FieldControl
                name="warning"
                component={SwitchControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <FieldControl
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
            <FieldControl
                name="bool"
                component={SwitchControl}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <FieldControl
                name="string"
                component={SwitchControl}
                label="I produce string form values"
                checkedValue="value_when_checked"
                helpText="Click submit and check the console"
            />
        </>
    ))
