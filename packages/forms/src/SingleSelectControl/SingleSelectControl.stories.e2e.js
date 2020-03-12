import { Field } from 'react-final-form'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import { SingleSelectControl, hasValue } from '../index.js'

const defaultOptions = [{ value: 'initial', label: 'Initial' }]

storiesOf('Testing:SingleSelectControl', module)
    .addDecorator(formDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Required', ({ cypressProps }) => (
        <Field
            required
            name="singleSelect"
            label="Single select"
            component={SingleSelectControl}
            validate={hasValue}
            options={cypressProps.options || defaultOptions}
        />
    ))
