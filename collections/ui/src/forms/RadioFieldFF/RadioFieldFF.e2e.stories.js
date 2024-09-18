import React from 'react'
import { Field } from 'react-final-form'
import { FieldGroupFF } from '../FieldGroupFF/FieldGroupFF.js'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { RadioFieldFF } from './RadioFieldFF.js'

export default { title: 'Testing:RadioFieldFF', decorators: [formDecorator] }
export const RequiredAndNoSelectedValue = () => (
    <FieldGroupFF name="choice">
        <Field
            type="radio"
            component={RadioFieldFF}
            name="choice"
            label="One"
            value="one"
            validate={hasValue}
            required
        />
        <Field
            type="radio"
            component={RadioFieldFF}
            name="choice"
            label="Two"
            value="two"
            validate={hasValue}
            required
        />
        <Field
            type="radio"
            component={RadioFieldFF}
            name="choice"
            label="Three"
            value="three"
            validate={hasValue}
            required
        />
    </FieldGroupFF>
)
