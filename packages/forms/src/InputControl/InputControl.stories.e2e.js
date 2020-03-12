import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, InputControl, hasValue } from '../index.js'

storiesOf('Testing:InputControl', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <FieldControl
            component={InputControl}
            name="agree"
            label="Do you agree?"
        />
    ))
    .add('Required', () => (
        <FieldControl
            name="agree"
            component={InputControl}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
