import { storiesOf } from '@storybook/react'
import React from 'react'

import { SwitchField } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('SwitchField', module)
    // Regular
    .add('Default', () => (
        <SwitchField
            name="Ex"
            label="SwitchField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused unchecked', () => (
        <SwitchField
            initialFocus
            name="Ex"
            label="SwitchField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked', () => (
        <SwitchField
            initialFocus
            checked
            name="Ex"
            label="SwitchField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked', () => (
        <SwitchField
            name="Ex"
            label="SwitchField"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Required', () => (
        <SwitchField
            name="Ex"
            label="SwitchField"
            required
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled', () => (
        <>
            <SwitchField
                name="Ex"
                label="SwitchField"
                disabled
                value="disabled"
                onChange={logger}
            />
            <SwitchField
                name="Ex"
                label="SwitchField"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Help text', () => (
        <>
            <SwitchField
                name="Ex"
                label="SwitchField"
                value="disabled"
                onChange={logger}
                helpText="Help text"
            />
            <SwitchField
                name="Ex"
                label="SwitchField"
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
            <SwitchField
                name="Ex"
                label="SwitchField"
                valid
                validationText="I am a validation text"
                value="valid"
                onChange={logger}
            />
            <SwitchField
                name="Ex"
                label="SwitchField"
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
            <SwitchField
                name="Ex"
                label="SwitchField"
                warning
                validationText="I am a validation text"
                value="warning"
                onChange={logger}
            />
            <SwitchField
                name="Ex"
                label="SwitchField"
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
            <SwitchField
                name="Ex"
                label="SwitchField"
                error
                validationText="I am a validation text"
                value="error"
                onChange={logger}
            />
            <SwitchField
                name="Ex"
                label="SwitchField"
                error
                validationText="I am a validation text"
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label', () => (
        <SwitchField
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))

    // Dense
    .add('Default - Dense', () => (
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused unchecked - Dense', () => (
        <SwitchField
            dense
            initialFocus
            name="Ex"
            label="SwitchField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Focused checked - Dense', () => (
        <SwitchField
            dense
            initialFocus
            checked
            name="Ex"
            label="SwitchField"
            value="default"
            onChange={logger}
        />
    ))

    .add('Checked - Dense', () => (
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            checked
            value="checked"
            onChange={logger}
        />
    ))

    .add('Required - Dense', () => (
        <SwitchField
            dense
            name="Ex"
            label="SwitchField"
            required
            value="checked"
            onChange={logger}
        />
    ))

    .add('Disabled - Dense', () => (
        <>
            <SwitchField
                dense
                name="Ex"
                label="SwitchField"
                disabled
                value="disabled"
                onChange={logger}
            />
            <SwitchField
                dense
                name="Ex"
                label="SwitchField"
                disabled
                checked
                value="disabled"
                onChange={logger}
            />
        </>
    ))

    .add('Valid - Dense', () => (
        <>
            <SwitchField
                dense
                name="Ex"
                label="SwitchField"
                valid
                validationText="I am a validation text"
                value="valid"
                onChange={logger}
            />
            <SwitchField
                dense
                name="Ex"
                label="SwitchField"
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
            <SwitchField
                dense
                name="Ex"
                label="SwitchField"
                warning
                validationText="I am a validation text"
                value="warning"
                onChange={logger}
            />
            <SwitchField
                dense
                name="Ex"
                label="SwitchField"
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
            <SwitchField
                dense
                name="Ex"
                label="SwitchField"
                error
                validationText="I am a validation text"
                value="error"
                onChange={logger}
            />
            <SwitchField
                dense
                name="Ex"
                label="SwitchField"
                error
                validationText="I am a validation text"
                checked
                value="error"
                onChange={logger}
            />
        </>
    ))

    .add('Image label - Dense', () => (
        <SwitchField
            dense
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={logger}
        />
    ))
