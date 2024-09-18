import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { SingleSelectFieldFF } from './SingleSelectFieldFF.js'

const defaultOptions = [{ value: 'initial', label: 'Initial' }]

export default {
    title: 'Testing:SingleSelectFieldFF',
    decorators: [formDecorator],
    parameters: { options: { showPanel: false } },
}
export const Required = (_, { cypressProps }) => (
    <Field
        required
        name="singleSelect"
        label="Single select"
        component={SingleSelectFieldFF}
        validate={hasValue}
        options={cypressProps.options || defaultOptions}
    />
)
