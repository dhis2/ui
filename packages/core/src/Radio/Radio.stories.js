import { storiesOf } from '@storybook/react'
import React from 'react'

import { Radio } from './Radio.js'

window.onChange = (payload, event) => {
    console.log('onChange payload', payload)
    console.log('onChange event', event)
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

storiesOf('Component/Core/Radio', module)
    // Regular
    .add('Default', () => (
        <Radio
            name="Ex"
            label="Radio"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused unchecked', () => (
        <>
            <Radio
                initialFocus
                name="Ex"
                label="Radio"
                value="default"
                className="initially-focused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                name="Ex"
                label="Radio"
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
            <Radio
                initialFocus
                checked
                name="Ex"
                label="Radio"
                value="default"
                className="initially-focused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                name="Ex"
                label="Radio"
                value="default"
                className="initially-unfocused"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </>
    ))

    .add('Checked', () => (
        <Radio
            name="Ex"
            label="Radio"
            checked
            value="checked"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Disabled', () => (
        <>
            <Radio
                name="Ex"
                label="Radio"
                disabled
                value="disabled"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                name="Ex"
                label="Radio"
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
            <Radio
                name="Ex"
                label="Radio"
                valid
                value="valid"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                name="Ex"
                label="Radio"
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
            <Radio
                name="Ex"
                label="Radio"
                warning
                value="warning"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                name="Ex"
                label="Radio"
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
            <Radio
                name="Ex"
                label="Radio"
                error
                value="error"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                name="Ex"
                label="Radio"
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
        <Radio
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
        <Radio
            dense
            name="Ex"
            label="Radio"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused unchecked - Dense', () => (
        <Radio
            dense
            initialFocus
            name="Ex"
            label="Radio"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Focused checked - Dense', () => (
        <Radio
            dense
            initialFocus
            checked
            name="Ex"
            label="Radio"
            value="default"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Checked - Dense', () => (
        <Radio
            dense
            name="Ex"
            label="Radio"
            checked
            value="checked"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))

    .add('Disabled - Dense', () => (
        <>
            <Radio
                dense
                name="Ex"
                label="Radio"
                disabled
                value="disabled"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                dense
                name="Ex"
                label="Radio"
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
            <Radio
                dense
                name="Ex"
                label="Radio"
                valid
                value="valid"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                dense
                name="Ex"
                label="Radio"
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
            <Radio
                dense
                name="Ex"
                label="Radio"
                warning
                value="warning"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                dense
                name="Ex"
                label="Radio"
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
            <Radio
                dense
                name="Ex"
                label="Radio"
                error
                value="error"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Radio
                dense
                name="Ex"
                label="Radio"
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
        <Radio
            dense
            name="Ex"
            label={<img src="https://picsum.photos/id/82/200/100" />}
            value="with-help"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    ))
