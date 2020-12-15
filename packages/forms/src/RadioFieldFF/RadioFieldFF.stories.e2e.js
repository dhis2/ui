import React from 'react'
import { storiesOf } from '@storybook/react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { FieldGroupFF } from '../FieldGroupFF/FieldGroupFF.js'
import { RadioFieldFF } from './RadioFieldFF.js'

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
