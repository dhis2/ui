import React from 'react'
import { storiesOf } from '@storybook/react'
import { FieldSet, Field, Radio, Help, Legend } from '../index.js'

const onChange = () => {
    console.log('Radio was clicked, nothing else will happen')
}

storiesOf('FieldSet', module)
    .add('Default', () => (
        <FieldSet>
            It renders something in a fieldset element without the browser
            styles
        </FieldSet>
    ))
    .add('Usage example - a radio button group with error status', () => (
        <FieldSet>
            <Legend required>Choose an option</Legend>
            <Field>
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="first"
                    label="First"
                    error
                />
            </Field>
            <Field>
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="second"
                    label="Second"
                    error
                />
            </Field>
            <Field>
                <Radio
                    onChange={onChange}
                    name="radio"
                    value="third"
                    label="Third"
                    error
                />
            </Field>
            <Help error>You really have to choose something!</Help>
        </FieldSet>
    ))
