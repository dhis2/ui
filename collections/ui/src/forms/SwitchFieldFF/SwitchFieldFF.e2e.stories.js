import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { SwitchFieldFF } from './SwitchFieldFF.js'

// https://github.com/final-form/react-final-form-arrays/issues/111
const initialValue = ['yes']

export default { title: 'Testing:SwitchFieldFF', decorators: [formDecorator] }
export const Unchecked = () => (
    <Field
        component={SwitchFieldFF}
        className="switch"
        name="switch"
        label="Label text"
        validate={hasValue}
        required
        type="checkbox"
    />
)
export const Checked = () => (
    <Field
        component={SwitchFieldFF}
        className="switch"
        name="switch"
        label="Label text"
        initialValue={true}
        type="checkbox"
    />
)
export const UncheckedWithValue = () => (
    <Field
        component={SwitchFieldFF}
        className="switch"
        name="switch"
        label="Label text"
        value="yes"
        type="checkbox"
    />
)
export const CheckedWithValue = () => (
    <Field
        component={SwitchFieldFF}
        className="switch"
        name="switch"
        label="Label text"
        value="yes"
        initialValue={initialValue}
        type="checkbox"
    />
)
