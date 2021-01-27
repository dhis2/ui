import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { SingleSelectFieldFF } from './SingleSelectFieldFF.js'

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

export default {
    title: 'SingleSelectFieldFF',
    component: SingleSelectFieldFF,
    decorators: [formDecorator],
}

export const Default = () => (
    <Field
        component={SingleSelectFieldFF}
        name="agree"
        label="Do you agree?"
        options={options}
    />
)

export const InitialValue = () => (
    <Field
        component={SingleSelectFieldFF}
        name="agree"
        label="Do you agree?"
        options={options}
        initialValue="4"
    />
)

InitialValue.story = {
    name: 'InitialValue',
}
