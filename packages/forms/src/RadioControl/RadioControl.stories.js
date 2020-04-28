import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldSetField } from '@dhis2/ui-core'

import { ReactFinalForm, RadioControl } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Form/RadioControl', module)
    .addDecorator(formDecorator)

    .add('Default', () => (
        <FieldSetField>
            <Field
                type="radio"
                component={RadioControl}
                name="choice"
                label="One"
                value="one"
            />
            <Field
                type="radio"
                component={RadioControl}
                name="choice"
                label="Two"
                value="two"
            />
            <Field
                type="radio"
                component={RadioControl}
                name="choice"
                label="Three"
                value="three"
            />
        </FieldSetField>
    ))
    .add('Statuses', () => (
        <>
            <FieldSetField label="Valid">
                <Field
                    type="radio"
                    name="valid"
                    component={RadioControl}
                    label="Valid"
                    value="valid"
                    valid
                />
            </FieldSetField>
            <FieldSetField label="Warning">
                <Field
                    type="radio"
                    name="warning"
                    component={RadioControl}
                    label="Warning"
                    value="warning"
                    warning
                />
            </FieldSetField>
            <FieldSetField label="Error">
                <Field
                    type="radio"
                    name="error"
                    component={RadioControl}
                    label="Error"
                    value="error"
                    error
                />
            </FieldSetField>
        </>
    ))
