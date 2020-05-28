import React from 'react'

import { formDecorator } from '../formDecorator.js'
import { ReactFinalForm, CheckboxFieldFF, hasValue } from '../index.js'

import { FieldGroupFF } from './FieldGroupFF.js'

const { Field } = ReactFinalForm

export default {
    title: 'Form/FieldGroupFF',
    component: FieldGroupFF,
    decorators: [formDecorator],
}

export const Default = () => (
    <FieldGroupFF label="Group label" required name="set">
        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            name="set"
            label="One"
            value="one"
            validate={hasValue}
            validationText={null}
        />

        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            name="set"
            label="Two"
            validate={hasValue}
            value="two"
            validationText={null}
        />
    </FieldGroupFF>
)
