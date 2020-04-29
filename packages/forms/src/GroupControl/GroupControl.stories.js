import React from 'react'

import { formDecorator } from '../formDecorator.js'
import { ReactFinalForm, CheckboxControl, hasValue } from '../index.js'

import { GroupControl } from './GroupControl.js'

const { Field } = ReactFinalForm

export default {
    title: 'Form/GroupControl',
    component: GroupControl,
    decorators: [formDecorator],
}

export const Default = () => (
    <GroupControl
        label="Group label"
        required
        name="set"
    >
        <Field
            type="checkbox"
            component={CheckboxControl}
            name="set"
            label="One"
            value="one"
            validate={hasValue}
            validationText={null}
        />

        <Field
            type="checkbox"
            component={CheckboxControl}
            name="set"
            label="Two"
            validate={hasValue}
            value="two"
            validationText={null}
        />
    </GroupControl>
)
