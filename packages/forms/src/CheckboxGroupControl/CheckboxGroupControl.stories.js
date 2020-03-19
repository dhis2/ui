import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import {
    FieldControl,
    CheckboxGroupControl,
    arrayWithIdObjects,
    hasValue,
} from '../index.js'

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

const multipleValue = ['bar', 'baz']

storiesOf('Form/CheckboxGroupControl', module)
    .addDecorator(formDecorator)
    .add('Default - Checkbox', () => (
        <FieldControl
            name="choice"
            label="Choose something"
            component={CheckboxGroupControl}
            options={options}
            initialValue={multipleValue}
        />
    ))
    .add('Required - Checkbox', () => (
        <FieldControl
            name="choice"
            label="Choose something"
            component={CheckboxGroupControl}
            validate={hasValue}
            required
            options={options}
            inline={false}
        />
    ))

    .add('Different value transformers', () => (
        <>
            <FieldControl
                name="array"
                label="My values are going to the form as an array of strings (default)"
                component={CheckboxGroupControl}
                options={options}
            />
            <FieldControl
                name="arrayWithIdObjects"
                label="My values are going to the form as an array objects with an ID"
                component={CheckboxGroupControl}
                options={options}
                format={arrayWithIdObjects.format}
                parse={arrayWithIdObjects.parse}
            />
        </>
    ))
