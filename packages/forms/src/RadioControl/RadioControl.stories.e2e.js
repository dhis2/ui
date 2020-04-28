import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import {
    ReactFinalForm,
    RadioControl,
    GroupControl,
    hasValue,
} from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Testing:RadioControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <GroupControl name="choice">
            <Field
                type="radio"
                component={RadioControl}
                name="choice"
                label="One"
                value="one"
                validate={hasValue}
                required
            />
            <Field
                type="radio"
                component={RadioControl}
                name="choice"
                label="Two"
                value="two"
                validate={hasValue}
                required
            />
            <Field
                type="radio"
                component={RadioControl}
                name="choice"
                label="Three"
                value="three"
                validate={hasValue}
                required
            />
        </GroupControl>
    ))
