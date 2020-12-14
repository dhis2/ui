import React from 'react'
import { Field } from 'react-final-form'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { SwitchFieldFF } from './SwitchFieldFF.js'

storiesOf('Testing:SwitchFieldFF', module)
    .addDecorator(formDecorator)
    .add('Unchecked', () => (
        <Field
            component={SwitchFieldFF}
            className="switch"
            name="switch"
            label="Label text"
            validate={hasValue}
            required
            type="checkbox"
        />
    ))
    .add('Checked ', () => (
        <Field
            component={SwitchFieldFF}
            className="switch"
            name="switch"
            label="Label text"
            initialValue={true}
            type="checkbox"
        />
    ))
    .add('Unchecked with value', () => (
        <Field
            component={SwitchFieldFF}
            className="switch"
            name="switch"
            label="Label text"
            value="yes"
            type="checkbox"
        />
    ))
    .add('Checked with value', () => (
        <Field
            component={SwitchFieldFF}
            className="switch"
            name="switch"
            label="Label text"
            value="yes"
            initialValue={['yes']}
            type="checkbox"
        />
    ))
