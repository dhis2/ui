import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, RadioGroup, hasValue } from '../index.js'

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('RadioGroup', module)
    .add('Default - Radio', () => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroup}
            options={options}
            initialValue="bar"
        />
    ))
    .add('Required - Radio', () => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroup}
            validate={hasValue}
            required
            options={options}
        />
    ))
