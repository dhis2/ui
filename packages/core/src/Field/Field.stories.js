import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '../index.js'
import { Field } from './Field.js'

storiesOf('Field', module).add('Default', () => (
    <>
        <Field helpText="Help me">
            <Input
                onChange={() => {
                    console.log('Nothing happens')
                }}
                name="input"
                label="An input"
            />
        </Field>
        <Field helpText="Help!">
            <Input
                onChange={() => {
                    console.log('Nothing happens')
                }}
                name="input2"
                label="An second input"
            />
        </Field>
    </>
))
