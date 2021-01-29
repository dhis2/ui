import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { MultiSelectFieldFF } from './MultiSelectFieldFF.js'

const options = [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
    { value: '5', label: 'five' },
    { value: '6', label: 'six' },
    { value: '7', label: 'seven' },
    { value: '8', label: 'eight' },
    { value: '9', label: 'nine' },
    { value: '10', label: 'ten' },
]

const initialValue = ['3', '4', '9', '10']

export default {
    title: 'Forms/Multi Select/Multi Select Field (Final Form)',
    component: MultiSelectFieldFF,
    decorators: [formDecorator],
}

export const Default = () => (
    <Field
        component={MultiSelectFieldFF}
        name="agree"
        label="Do you agree?"
        options={options}
    />
)

export const InitialValue = () => (
    <Field
        component={MultiSelectFieldFF}
        name="agree"
        label="Do you agree?"
        options={options}
        initialValue={initialValue}
    />
)

InitialValue.story = {
    name: 'InitialValue',
}
