import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { MultiSelectFieldFF } from './MultiSelectFieldFF.js'

const defaultOptions = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
]

export default {
    title: 'MultiSelectFieldFF',
    component: MultiSelectFieldFF,
    decorators: [formDecorator],
}

export const Required = (_, { cypressProps }) => (
    <Field
        required
        name="multiSelect"
        label="Multi select"
        component={MultiSelectFieldFF}
        validate={hasValue}
        options={cypressProps.options || defaultOptions}
    />
)
