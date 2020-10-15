import { storiesOf } from '@storybook/react'
import React from 'react'
import { formDecorator } from '../formDecorator.js'
import {
    ReactFinalForm,
    RadioFieldFF,
    FieldGroupFF,
    hasValue,
} from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Testing:RadioFieldFF', module)
    .addDecorator(formDecorator)
    .add('Required and no selected value', () => (
        <FieldGroupFF name="choice">
            <Field
                type="radio"
                component={RadioFieldFF}
                name="choice"
                label="One"
                value="one"
                validate={hasValue}
                required
            />
            <Field
                type="radio"
                component={RadioFieldFF}
                name="choice"
                label="Two"
                value="two"
                validate={hasValue}
                required
            />
            <Field
                type="radio"
                component={RadioFieldFF}
                name="choice"
                label="Three"
                value="three"
                validate={hasValue}
                required
            />
        </FieldGroupFF>
    ))
