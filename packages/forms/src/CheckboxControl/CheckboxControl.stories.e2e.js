import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, CheckboxControl, hasValue } from '../index.js'

storiesOf('Testing:Checkbox', module)
    .addDecorator(formDecorator)
    .add('Unchecked', () => (
        <FieldControl
            component={CheckboxControl}
            className="checkbox"
            name="checkbox"
            label="Label text"
            validate={hasValue}
            required
        />
    ))
    .add('Checked ', () => (
        <FieldControl
            component={CheckboxControl}
            className="checkbox"
            name="checkbox"
            label="Label text"
            initialValue={true}
        />
    ))
    .add('Unchecked with value', () => (
        <FieldControl
            component={CheckboxControl}
            className="checkbox"
            name="checkbox"
            label="Label text"
            checkedValue="yes"
        />
    ))
    .add('Checked with value', () => (
        <FieldControl
            component={CheckboxControl}
            className="checkbox"
            name="checkbox"
            label="Label text"
            checkedValue="yes"
            initialValue="yes"
        />
    ))
