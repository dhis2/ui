import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, TextAreaControl, hasValue } from '../index.js'

storiesOf('Form/TextAreaControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <FieldControl
            component={TextAreaControl}
            name="agree"
            label="Do you agree?"
        />
    ))
    .add('Autogrow', () => (
        <FieldControl
            component={TextAreaControl}
            name="agree"
            label="Do you agree?"
            autoGrow
        />
    ))
    .add('Required', () => (
        <FieldControl
            name="agree"
            component={TextAreaControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <FieldControl
            name="agree"
            component={TextAreaControl}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <FieldControl
            name="agree"
            component={TextAreaControl}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <FieldControl
                name="valid"
                component={TextAreaControl}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <FieldControl
                name="warning"
                component={TextAreaControl}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <FieldControl
                name="error"
                component={TextAreaControl}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
