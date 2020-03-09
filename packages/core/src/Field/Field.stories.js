import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input, Help } from '../index.js'
import { Field } from './Field.js'

storiesOf('Component/Core/Field', module).add('Default', () => (
    <>
        <Field>
            <Input
                onChange={() => {
                    console.log('Nothing happens')
                }}
                name="input"
                label="An input"
            />
            <Help>A helpful text</Help>
        </Field>
        <Field>
            <Input
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
