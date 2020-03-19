import { Field } from 'react-final-form'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelectControl, hasValue } from '../index.js'
import { formDecorator } from '../formDecorator.js'

const defaultOptions = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
]

storiesOf('Testing:MultiSelectControl', module)
    .addDecorator(formDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Required', ({ cypressProps }) => (
        <Field
            required
            name="multiSelect"
            label="Multi select"
            component={MultiSelectControl}
            validate={hasValue}
            options={cypressProps.options || defaultOptions}
        />
    ))
