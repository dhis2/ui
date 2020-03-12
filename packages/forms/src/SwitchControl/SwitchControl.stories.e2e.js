import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, SwitchControl, hasValue } from '../index.js'

storiesOf('Testing:SwitchControl', module)
    .addDecorator(formDecorator)
    .add('Unchecked', () => (
        <FieldControl
            component={SwitchControl}
            className="switch"
            name="switch"
            label="Label text"
            validate={hasValue}
            required
        />
    ))
    .add('Checked ', () => (
        <FieldControl
            component={SwitchControl}
            className="switch"
            name="switch"
            label="Label text"
            initialValue={true}
        />
    ))
    .add('Unchecked with value', () => (
        <FieldControl
            component={SwitchControl}
            className="switch"
            name="switch"
            label="Label text"
            checkedValue="yes"
        />
    ))
    .add('Checked with value', () => (
        <FieldControl
            component={SwitchControl}
            className="switch"
            name="switch"
            label="Label text"
            checkedValue="yes"
            initialValue="yes"
        />
    ))
