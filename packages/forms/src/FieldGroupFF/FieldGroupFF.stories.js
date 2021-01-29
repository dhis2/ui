import React from 'react'
import { Field } from 'react-final-form'
import { CheckboxFieldFF } from '../CheckboxFieldFF/CheckboxFieldFF.js'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { FieldGroupFF } from './FieldGroupFF.js'

export default {
    title: 'Forms/Field Group/Field Group (Final Form)',
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
