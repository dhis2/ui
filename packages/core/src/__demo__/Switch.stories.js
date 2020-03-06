import { storiesOf } from '@storybook/react'
import React from 'react'

import { Switch } from '../index.js'

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

storiesOf('Switch', module)
    // Regular
    .add('Default', () => (
        <Switch
            name="Ex"
            label="Switch"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused unchecked', () => (
        <>
            <Switch
                initialFocus
                name="Ex"
                label="Switch"
                value="default"
                className="initially-focused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                name="Ex2"
                label="Switch"
                value="default"
                className="initially-unfocused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Focused checked', () => (
        <>
            <Switch
                initialFocus
                checked
                name="Ex"
                label="Switch"
                value="default"
                className="initially-focused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                name="Ex2"
                label="Switch"
                value="default"
                className="initially-unfocused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Checked', () => (
        <Switch
            name="Ex"
            label="Switch"
            checked
            value="checked"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Disabled', () => (
        <>
            <Switch
                name="Ex"
                label="Switch"
                disabled
                value="disabled"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                name="Ex"
                label="Switch"
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
            <Switch
                name="Ex"
                label="Switch"
                valid
                value="valid"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                name="Ex"
                label="Switch"
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
            <Switch
                name="Ex"
                label="Switch"
                warning
                value="warning"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                name="Ex"
                label="Switch"
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
            <Switch
                name="Ex"
                label="Switch"
                error
                value="error"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                name="Ex"
                label="Switch"
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
        <Switch
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
        <Switch
            dense
            name="Ex"
            label="Switch"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused unchecked - Dense', () => (
        <Switch
            dense
            initialFocus
            name="Ex"
            label="Switch"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused checked - Dense', () => (
        <Switch
            dense
            initialFocus
            checked
            name="Ex"
            label="Switch"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Checked - Dense', () => (
        <Switch
            dense
            name="Ex"
            label="Switch"
            checked
            value="checked"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Disabled - Dense', () => (
        <>
            <Switch
                dense
                name="Ex"
                label="Switch"
                disabled
                value="disabled"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                dense
                name="Ex"
                label="Switch"
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
            <Switch
                dense
                name="Ex"
                label="Switch"
                valid
                value="valid"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                dense
                name="Ex"
                label="Switch"
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
            <Switch
                dense
                name="Ex"
                label="Switch"
                warning
                value="warning"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                dense
                name="Ex"
                label="Switch"
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
            <Switch
                dense
                name="Ex"
                label="Switch"
                error
                value="error"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Switch
                dense
                name="Ex"
                label="Switch"
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
        <Switch
            dense
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
