import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputField, Help } from '../index.js'
import { Field } from './Field.js'

storiesOf('Component/Core/Field', module).add('Default', () => (
    <>
        <Field>
            <InputField
                onChange={() => {
                    console.log('Nothing happens')
                }}
                name="input"
                label="An input"
            />
            <Help>A helpful text</Help>
        </Field>
        <Field>
            <InputField
                onChange={() => {
                    console.log('Nothing happens')
                }}
                name="input2"
                label="An second input"
            />
            <Help>A helpful text</Help>
        </Field>
    </>
))
