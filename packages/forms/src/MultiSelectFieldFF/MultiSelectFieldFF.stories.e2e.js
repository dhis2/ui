import { Field } from 'react-final-form'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelectFieldFF, hasValue } from '../index.js'
import { formDecorator } from '../formDecorator.js'

const defaultOptions = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
]

storiesOf('Testing:MultiSelectFieldFF', module)
    .addDecorator(formDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Required', (_, { cypressProps }) => (
        <Field
            required
            name="multiSelect"
            label="Multi select"
            component={MultiSelectFieldFF}
            validate={hasValue}
            options={cypressProps.options || defaultOptions}
        />
    ))
