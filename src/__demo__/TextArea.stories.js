import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, TextArea, hasValue } from '../index.js'

storiesOf('TextArea', module)
    .add('Default', () => (
        <Field component={TextArea} name="agree" label="Do you agree?" />
    ))
    .add('Autogrow', () => (
        <Field
            component={TextArea}
            name="agree"
            label="Do you agree?"
            autoGrow
        />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={TextArea}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field
            name="agree"
            component={TextArea}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={TextArea}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={TextArea}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={TextArea}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={TextArea}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
