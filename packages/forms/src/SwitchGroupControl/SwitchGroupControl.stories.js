import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import {
    ReactFinalForm,
    SwitchGroupControl,
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

storiesOf('Form/SwitchGroupControl', module)
    .addDecorator(formDecorator)
    .add('Default - Switch', () => (
        <Field
            name="choice"
            label="Choose something"
            component={SwitchGroupControl}
            options={options}
            initialValue={multipleValue}
        />
    ))
    .add('Required - Switch', () => (
        <Field
            name="choice"
            label="Choose something"
            component={SwitchGroupControl}
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
                component={SwitchGroupControl}
                options={options}
            />
            <Field
                name="arrayWithIdObjects"
                label="My values are going to the form as an array objects with an ID"
                component={SwitchGroupControl}
                options={options}
                format={arrayWithIdObjects.format}
                parse={arrayWithIdObjects.parse}
            />
        </>
    ))
