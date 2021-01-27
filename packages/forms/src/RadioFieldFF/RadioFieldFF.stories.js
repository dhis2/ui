import { FieldGroup } from '@dhis2/ui-widgets'
import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { RadioFieldFF } from './RadioFieldFF.js'

export default {
    title: 'RadioFieldFF',
    component: RadioFieldFF,
    decorators: [formDecorator],
}

export const Default = () => (
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
)

export const Statuses = () => (
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
)
