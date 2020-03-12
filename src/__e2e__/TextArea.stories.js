import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, TextArea, hasValue } from '../index.js'

storiesOf('TextArea', module)
    .add('Default', () => (
        <Field
            component={TextArea}
            name="comment"
            label="Do you have any comments?"
        />
    ))
    .add('Required', () => (
        <Field
            required
            name="comment"
            component={TextArea}
            validate={hasValue}
            label="Do you have any comments?"
        />
    ))
