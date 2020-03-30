import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, MultiSelectControl } from '../index.js'

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

storiesOf('Form/MultiSelectControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <FieldControl
            component={MultiSelectControl}
            name="agree"
            label="Do you agree?"
            options={options}
        />
    ))
    .add('InitialValue', () => (
        <FieldControl
            component={MultiSelectControl}
            name="agree"
            label="Do you agree?"
            options={options}
            initialValue={initialValue}
        />
    ))
