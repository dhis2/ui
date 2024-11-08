import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { CheckboxFieldFF } from './CheckboxFieldFF.js'

// https://github.com/final-form/react-final-form-arrays/issues/111
const initialValue = ['yes']

export default { title: 'Testing:Checkbox', decorators: [formDecorator] }
export const Unchecked = () => (
    <Field
        type="checkbox"
        component={CheckboxFieldFF}
        className="checkbox"
        name="checkbox"
        label="Label text"
        validate={hasValue}
        required
    />
)
export const Checked = () => (
    <Field
        type="checkbox"
        component={CheckboxFieldFF}
        className="checkbox"
        name="checkbox"
        label="Label text"
        initialValue={true}
    />
)
export const UncheckedWithValue = () => (
    <Field
        type="checkbox"
        component={CheckboxFieldFF}
        className="checkbox"
        name="checkbox"
        label="Label text"
        value="yes"
    />
)
export const CheckedWithValue = () => (
    <Field
        type="checkbox"
        component={CheckboxFieldFF}
        className="checkbox"
        name="checkbox"
        label="Label text"
        value="yes"
        initialValue={initialValue}
    />
)
