import { storiesOf } from '@storybook/react'
import React from 'react'

import { CheckboxField } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('CheckboxField', module)
    // Regular
    .add('Default', () => (
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused unchecked', () => (
        <CheckboxField
            initialFocus
            name="Ex"
            label="CheckboxField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked', () => (
        <CheckboxField
            initialFocus
            checked
            name="Ex"
            label="CheckboxField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked', () => (
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Required', () => (
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            required
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled', () => (
        <>
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                disabled
                value="disabled"
                onChange={logger}
            />
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Help text', () => (
        <>
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                value="disabled"
                onChange={logger}
                helpText="Help text"
            />
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                error
                validationText="Validation text (error state)"
                helpText="Help text"
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid', () => (
        <>
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                valid
                validationText="I am a validation text"
                value="valid"
                onChange={logger}
            />
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                valid
                validationText="I am a validation text"
                checked
                value="valid"
                onChange={logger}
            />
        </>
    ))

    .add('Warning', () => (
        <>
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                warning
                validationText="I am a validation text"
                value="warning"
                onChange={logger}
            />
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                warning
                validationText="I am a validation text"
                checked
                value="warning"
                onChange={logger}
            />
        </>
    ))

    .add('Error', () => (
        <>
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                error
                validationText="I am a validation text"
                value="error"
                onChange={logger}
            />
            <CheckboxField
                name="Ex"
                label="CheckboxField"
                error
                validationText="I am a validation text"
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label', () => (
        <CheckboxField
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))

    // Dense
    .add('Default - Dense', () => (
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused unchecked - Dense', () => (
        <CheckboxField
            dense
            initialFocus
            name="Ex"
            label="CheckboxField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked - Dense', () => (
        <CheckboxField
            dense
            initialFocus
            checked
            name="Ex"
            label="CheckboxField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked - Dense', () => (
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Required - Dense', () => (
        <CheckboxField
            dense
            name="Ex"
            label="CheckboxField"
            required
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled - Dense', () => (
        <>
            <CheckboxField
                dense
                name="Ex"
                label="CheckboxField"
                disabled
                value="disabled"
                onChange={logger}
            />
            <CheckboxField
                dense
                name="Ex"
                label="CheckboxField"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid - Dense', () => (
        <>
            <CheckboxField
                dense
                name="Ex"
                label="CheckboxField"
                valid
                validationText="I am a validation text"
                value="valid"
                onChange={logger}
            />
            <CheckboxField
                dense
                name="Ex"
                label="CheckboxField"
                valid
                validationText="I am a validation text"
                checked
                value="valid"
                onChange={logger}
            />
        </>
    ))

    .add('Warning - Dense', () => (
        <>
            <CheckboxField
                dense
                name="Ex"
                label="CheckboxField"
                warning
                validationText="I am a validation text"
                value="warning"
                onChange={logger}
            />
            <CheckboxField
                dense
                name="Ex"
                label="CheckboxField"
                warning
                validationText="I am a validation text"
                checked
                value="warning"
                onChange={logger}
            />
        </>
    ))

    .add('Error - Dense', () => (
        <>
            <CheckboxField
                dense
                name="Ex"
                label="CheckboxField"
                error
                validationText="I am a validation text"
                value="error"
                onChange={logger}
            />
            <CheckboxField
                dense
                name="Ex"
                label="CheckboxField"
                error
                validationText="I am a validation text"
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label - Dense', () => (
        <CheckboxField
            dense
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))
