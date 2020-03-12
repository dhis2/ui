import { Field } from 'react-final-form'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { SingleSelect, hasValue } from '../index.js'
import { formDecorator } from '../formDecorator.js'

const defaultOptions = [{ value: 'initial', label: 'Initial' }]

storiesOf('Testing:SingleSelect', module)
    .addDecorator(formDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Required', ({ cypressProps }) => (
        <Field
            required
            name="singleSelect"
            label="Single select"
            component={SingleSelect}
            validate={hasValue}
            options={cypressProps.options || defaultOptions}
        />
    ))
