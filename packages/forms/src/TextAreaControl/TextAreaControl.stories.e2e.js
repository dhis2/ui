import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { FieldControl, TextAreaControl, hasValue } from '../index.js'

storiesOf('TextArea', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <FieldControl
            component={TextAreaControl}
            name="comment"
            label="Do you have any comments?"
        />
    ))
    .add('Required', () => (
        <FieldControl
            required
            name="comment"
            component={TextAreaControl}
            validate={hasValue}
            label="Do you have any comments?"
        />
    ))
