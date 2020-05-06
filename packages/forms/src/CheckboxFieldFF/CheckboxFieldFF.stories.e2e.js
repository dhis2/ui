import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, CheckboxFieldFF, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Testing:Checkbox', module)
    .addDecorator(formDecorator)
    .add('Unchecked', () => (
        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            className="checkbox"
            name="checkbox"
            label="Label text"
            validate={hasValue}
            required
        />
    ))
    .add('Checked ', () => (
        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            className="checkbox"
            name="checkbox"
            label="Label text"
            initialValue={true}
        />
    ))
    .add('Unchecked with value', () => (
        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            className="checkbox"
            name="checkbox"
            label="Label text"
            value="yes"
        />
    ))
    .add('Checked with value', () => (
        <Field
            type="checkbox"
            component={CheckboxFieldFF}
            className="checkbox"
            name="checkbox"
            label="Label text"
            value="yes"
            initialValue={['yes']}
        />
    ))
