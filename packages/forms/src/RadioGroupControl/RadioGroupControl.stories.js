import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, RadioGroupControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('Form/RadioGroupControl', module)
    .addDecorator(formDecorator)
    .add('Default - Radio', () => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroupControl}
            options={options}
            initialValue="bar"
        />
    ))
    .add('Required - Radio', () => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroupControl}
            validate={hasValue}
            required
            options={options}
        />
    ))
