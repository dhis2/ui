import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, CheckboxGroupControl, hasValue } from '../index.js'

const defaultOptions = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('Testing:CheckboxGroup', module)
    .addDecorator(formDecorator)
    .add('Default', ({ cypressProps }) => (
        <FieldControl
            name="choice"
            label="Choose something"
            component={CheckboxGroupControl}
            options={cypressProps.options || defaultOptions}
        />
    ))
    .add('Required', ({ cypressProps }) => (
        <FieldControl
            name="choice"
            label="Choose something"
            component={CheckboxGroupControl}
            validate={hasValue}
            required
            options={cypressProps.options || defaultOptions}
            inline={false}
        />
    ))
