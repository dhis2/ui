import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, RadioGroupControl, hasValue } from '../index.js'

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('Form/RadioGroupControl', module)
    .addDecorator(formDecorator)
    .add('Default - Radio', () => (
        <FieldControl
            name="choice"
            label="Choose something"
            component={RadioGroupControl}
            options={options}
            initialValue="bar"
        />
    ))
    .add('Required - Radio', () => (
        <FieldControl
            name="choice"
            label="Choose something"
            component={RadioGroupControl}
            validate={hasValue}
            required
            options={options}
        />
    ))
