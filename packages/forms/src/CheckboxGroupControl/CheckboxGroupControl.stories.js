import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import {
    ReactFinalForm,
    CheckboxGroupControl,
    arrayWithIdObjects,
    hasValue,
} from '../index.js'

const { Field } = ReactFinalForm

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

const multipleValue = ['bar', 'baz']

storiesOf('Form/CheckboxGroupControl', module)
    .addDecorator(formDecorator)
    .add('Default - Checkbox', () => (
        <Field
            name="choice"
            label="Choose something"
            component={CheckboxGroupControl}
            options={options}
            initialValue={multipleValue}
        />
    ))
    .add('Required - Checkbox', () => (
        <Field
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
            <Field
                name="array"
                label="My values are going to the form as an array of strings (default)"
                component={CheckboxGroupControl}
                options={options}
            />
            <Field
                name="arrayWithIdObjects"
                label="My values are going to the form as an array objects with an ID"
                component={CheckboxGroupControl}
                options={options}
                format={arrayWithIdObjects.format}
                parse={arrayWithIdObjects.parse}
            />
        </>
    ))
