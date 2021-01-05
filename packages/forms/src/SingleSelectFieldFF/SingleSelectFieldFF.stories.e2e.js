import { storiesOf } from '@storybook/react'
import React from 'react'
import { Field } from 'react-final-form'
import { formDecorator } from '../formDecorator.js'
import { hasValue } from '../validators/index.js'
import { SingleSelectFieldFF } from './SingleSelectFieldFF.js'

const defaultOptions = [{ value: 'initial', label: 'Initial' }]

storiesOf('Testing:SingleSelectFieldFF', module)
    .addDecorator(formDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Required', (_, { cypressProps }) => (
        <Field
            required
            name="singleSelect"
            label="Single select"
            component={SingleSelectFieldFF}
            validate={hasValue}
            options={cypressProps.options || defaultOptions}
        />
    ))
