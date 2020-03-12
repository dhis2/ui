import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, CheckboxGroup, arrayWithIdObjects, hasValue } from '../index.js'

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

const multipleValue = ['bar', 'baz']

storiesOf('CheckboxGroup', module)
    .add('Default - Checkbox', () => (
        <Field
            name="choice"
            label="Choose something"
            component={CheckboxGroup}
            options={options}
            initialValue={multipleValue}
        />
    ))
    .add('Required - Checkbox', () => (
        <Field
            name="choice"
            label="Choose something"
            component={CheckboxGroup}
            validate={hasValue}
            required
            options={options}
            inline={false}
        />
    ))

    .add('Different value transformers', () => (
        <>
            <Field
                name="array"
                label="My values are going to the form as an array of strings (default)"
                component={CheckboxGroup}
                options={options}
            />
            <Field
                name="arrayWithIdObjects"
                label="My values are going to the form as an array objects with an ID"
                component={CheckboxGroup}
                options={options}
                format={arrayWithIdObjects.format}
                parse={arrayWithIdObjects.parse}
            />
        </>
    ))
