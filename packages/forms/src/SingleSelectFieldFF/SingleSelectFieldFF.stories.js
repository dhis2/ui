import React from 'react'
import { Field } from 'react-final-form'
import { storiesOf } from '@storybook/react'
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

storiesOf('SingleSelectFieldFF', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={SingleSelectFieldFF}
            name="agree"
            label="Do you agree?"
            options={options}
        />
    ))
    .add('InitialValue', () => (
        <Field
            component={SingleSelectFieldFF}
            name="agree"
            label="Do you agree?"
            options={options}
            initialValue="4"
        />
    ))
