import React from 'react'
import { Field, Radio, Help, Legend } from '../index.js'
import { FieldSet } from './FieldSet.js'

const onChange = () => {
    console.log('Radio was clicked, nothing else will happen')
}

export default {
    title: 'Forms/Field Set/Field Set',
    component: FieldSet,
}

export const Default = () => (
    <FieldSet>
        It renders something in a fieldset element without the browser styles
    </FieldSet>
)

export const UsageExampleARadioButtonGroupWithErrorStatus = () => (
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
)
UsageExampleARadioButtonGroupWithErrorStatus.storyName =
    'Usage example - a radio button group with error status'
