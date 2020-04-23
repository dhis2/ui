import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, RadioGroupControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

const defaultOptions = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('Testing:RadioGroupControl', module)
    .addDecorator(formDecorator)
    .add('Default', ({ cypressProps }) => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroupControl}
            options={cypressProps.options || defaultOptions}
        />
    ))
    .add('Required', ({ cypressProps }) => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroupControl}
            validate={hasValue}
            required
            options={cypressProps.options || defaultOptions}
        />
    ))
