import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { TextAreaFieldFF } from './TextAreaFieldFF.js'

export default { title: 'TextArea', decorators: [formDecorator] }
export const Default = () => (
    <Field
        component={TextAreaFieldFF}
        name="comment"
        label="Do you have any comments?"
    />
)
export const Required = () => (
    <Field
        required
        name="comment"
        component={TextAreaFieldFF}
        validate={hasValue}
        label="Do you have any comments?"
    />
)
