import React from 'react'
import { storiesOf } from '@storybook/react'

import { formDecorator } from '../formDecorator.js'
import { FieldControl, InputControl, hasValue } from '../index.js'

storiesOf('Form/InputControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <FieldControl
            component={InputControl}
            name="agree"
            label="Do you agree?"
        />
    ))
    .add('Required', () => (
        <FieldControl
            name="agree"
            component={InputControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <FieldControl
            name="agree"
            component={InputControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <FieldControl
            name="agree"
            component={InputControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <FieldControl
                name="valid"
                component={InputControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <FieldControl
                name="warning"
                component={InputControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <FieldControl
                name="error"
                component={InputControl}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
