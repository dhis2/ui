import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldGroup } from '@dhis2/ui-widgets'

import { ReactFinalForm, RadioFieldFF } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Form/RadioFieldFF', module)
    .addDecorator(formDecorator)

    .add('Default', () => (
        <FieldGroup>
            <Field
                type="radio"
                component={RadioFieldFF}
                name="choice"
                label="One"
                value="one"
            />
            <Field
                type="radio"
                component={RadioFieldFF}
                name="choice"
                label="Two"
                value="two"
            />
            <Field
                type="radio"
                component={RadioFieldFF}
                name="choice"
                label="Three"
                value="three"
            />
        </FieldGroup>
    ))
    .add('Statuses', () => (
        <>
            <FieldGroup label="Valid">
                <Field
                    type="radio"
                    name="valid"
                    component={RadioFieldFF}
                    label="Valid"
                    value="valid"
                    valid
                />
            </FieldGroup>
            <FieldGroup label="Warning">
                <Field
                    type="radio"
                    name="warning"
                    component={RadioFieldFF}
                    label="Warning"
                    value="warning"
                    warning
                />
            </FieldGroup>
            <FieldGroup label="Error">
                <Field
                    type="radio"
                    name="error"
                    component={RadioFieldFF}
                    label="Error"
                    value="error"
                    error
                />
            </FieldGroup>
        </>
    ))
