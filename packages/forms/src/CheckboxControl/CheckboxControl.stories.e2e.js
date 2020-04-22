import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { ReactFinalForm, CheckboxControl, hasValue } from '../index.js'

const { Field } = ReactFinalForm

storiesOf('Testing:Checkbox', module)
    .addDecorator(formDecorator)
    .add('Unchecked', () => (
        <Field
            component={CheckboxControl}
            className="checkbox"
            name="checkbox"
            label="Label text"
            validate={hasValue}
            required
        />
    ))
    .add('Checked ', () => (
        <Field
            component={CheckboxControl}
            className="checkbox"
            name="checkbox"
            label="Label text"
            initialValue={true}
        />
    ))
    .add('Unchecked with value', () => (
        <Field
            component={CheckboxControl}
            className="checkbox"
            name="checkbox"
            label="Label text"
            checkedValue="yes"
        />
    ))
    .add('Checked with value', () => (
        <Field
            component={CheckboxControl}
            className="checkbox"
            name="checkbox"
            label="Label text"
            checkedValue="yes"
            initialValue="yes"
        />
    ))
