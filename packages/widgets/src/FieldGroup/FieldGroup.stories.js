import { Checkbox, Radio, Switch } from '@dhis2/ui-core'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { FieldGroup } from './FieldGroup.js'

storiesOf('FieldGroup', module)
    .add('With Checkbox', () => (
        <FieldGroup>
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </FieldGroup>
    ))

    .add('With Radio', () => (
        <FieldGroup>
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" checked />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </FieldGroup>
    ))

    .add('With Switch', () => (
        <FieldGroup>
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </FieldGroup>
    ))

    .add('With label', () => (
        <>
            <FieldGroup label="I am a legend">
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldGroup>
            <FieldGroup label="I am a required field" required>
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldGroup>
        </>
    ))

    .add('Help and validation texts', () => (
        <>
            <FieldGroup label="I am a field" helpText="Please help me!">
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldGroup>
            <FieldGroup label="I am a legend" helpText="I am disabled" disabled>
                <Checkbox value="first" label="First" disabled />
                <Checkbox value="second" label="Second" disabled />
                <Checkbox value="third" label="Third" disabled />
            </FieldGroup>
            <FieldGroup label="I am a legend" valid validationText="I am valid">
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" checked />
                <Checkbox value="third" label="Third" checked />
            </FieldGroup>
            <FieldGroup
                label="I am a legend"
                name="warning"
                warning
                validationText="I have a warning"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldGroup>
            <FieldGroup
                label="I am a legend"
                error
                validationText="I have an error"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldGroup>
        </>
    ))
