import { storiesOf } from '@storybook/react'
import React from 'react'

import { Checkbox } from './Checkbox.js'

window.onChange = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

window.onFocus = (payload, event) => {
    console.log('onFocus payload', payload)
    console.log('onFocus event', event)
}

window.onBlur = (payload, event) => {
    console.log('onBlur payload', payload)
    console.log('onBlur event', event)
}

const onChange = (...args) => window.onChange(...args)
const onFocus = (...args) => window.onFocus(...args)
const onBlur = (...args) => window.onBlur(...args)

storiesOf('Component/Core/Checkbox', module)
    // Regular
    .add('Default', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused unchecked', () => (
        <>
            <Checkbox
                initialFocus
                name="Ex"
                label="Checkbox"
                value="default"
                className="initially-focused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                name="Ex2"
                label="Checkbox"
                value="default2"
                className="initially-unfocused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Focused checked', () => (
        <>
            <Checkbox
                initialFocus
                checked
                name="Ex"
                label="Checkbox"
                value="default"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                checked
                name="Ex2"
                label="Checkbox"
                value="default2"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Checked', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            checked
            value="checked"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Indeterminate', () => (
        <Checkbox
            name="Ex"
            label="Checkbox"
            indeterminate
            value="checked"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Disabled', () => (
        <>
            <Checkbox
                name="Ex"
                label="Checkbox"
                disabled
                value="disabled"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                name="Ex"
                label="Checkbox"
                disabled
                checked
                value="disabled"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Valid', () => (
        <>
            <Checkbox
                name="Ex"
                label="Checkbox"
                valid
                value="valid"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                name="Ex"
                label="Checkbox"
                valid
                checked
                value="valid"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Warning', () => (
        <>
            <Checkbox
                name="Ex"
                label="Checkbox"
                warning
                value="warning"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                name="Ex"
                label="Checkbox"
                warning
                checked
                value="warning"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Error', () => (
        <>
            <Checkbox
                name="Ex"
                label="Checkbox"
                error
                value="error"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                name="Ex"
                label="Checkbox"
                error
                checked
                value="error"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Image label', () => (
        <Checkbox
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    // Dense
    .add('Default - Dense', () => (
        <Checkbox
            dense
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused unchecked - Dense', () => (
        <Checkbox
            dense
            initialFocus
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused checked - Dense', () => (
        <Checkbox
            dense
            initialFocus
            checked
            name="Ex"
            label="Checkbox"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Checked - Dense', () => (
        <Checkbox
            dense
            name="Ex"
            label="Checkbox"
            checked
            value="checked"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Indeterminate - Dense', () => (
        <Checkbox
            dense
            name="Ex"
            label="Checkbox"
            indeterminate
            value="checked"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Disabled - Dense', () => (
        <>
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                disabled
                value="disabled"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                disabled
                checked
                value="disabled"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Valid - Dense', () => (
        <>
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                valid
                value="valid"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                valid
                checked
                value="valid"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Warning - Dense', () => (
        <>
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                warning
                value="warning"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                warning
                checked
                value="warning"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Error - Dense', () => (
        <>
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                error
                value="error"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Checkbox
                dense
                name="Ex"
                label="Checkbox"
                error
                checked
                value="error"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Image label - Dense', () => (
        <Checkbox
            dense
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
