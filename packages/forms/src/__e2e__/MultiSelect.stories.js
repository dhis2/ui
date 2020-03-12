import { Field } from 'react-final-form'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelect, hasValue } from '../index.js'

const defaultOptions = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
]

storiesOf('Testing:MultiSelect', module)
    .addParameters({ options: { showPanel: false } })
    .add('Required', ({ cypressProps }) => (
        <Field
            required
            name="multiSelect"
            label="Multi select"
            component={MultiSelect}
            validate={hasValue}
            options={cypressProps.options || defaultOptions}
        />
    ))
