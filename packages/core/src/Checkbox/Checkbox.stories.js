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

export default {
    title: 'Checkbox',
    component: Checkbox,
}

export const Default = () => (
    <Checkbox
        name="Ex"
        label="Checkbox"
        value="default"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

export const FocusedUnchecked = () => (
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
)

FocusedUnchecked.story = {
    name: 'Focused unchecked',
}

export const FocusedChecked = () => (
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
)

FocusedChecked.story = {
    name: 'Focused checked',
}

export const Checked = () => (
    <Checkbox
        name="Ex"
        label="Checkbox"
        checked
        value="checked"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

export const Indeterminate = () => (
    <Checkbox
        name="Ex"
        label="Checkbox"
        indeterminate
        value="checked"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

export const Disabled = () => (
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
)

export const Valid = () => (
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
)

export const Warning = () => (
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
)

export const Error = () => (
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
)

export const ImageLabel = () => (
    <Checkbox
        name="Ex"
        label={<img src="https://picsum.photos/id/82/200/100" />}
        value="with-help"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

ImageLabel.story = {
    name: 'Image label',
}

export const DefaultDense = () => (
    <Checkbox
        dense
        name="Ex"
        label="Checkbox"
        value="default"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

DefaultDense.story = {
    name: 'Default - Dense',
}

export const FocusedUncheckedDense = () => (
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
)

FocusedUncheckedDense.story = {
    name: 'Focused unchecked - Dense',
}

export const FocusedCheckedDense = () => (
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
)

FocusedCheckedDense.story = {
    name: 'Focused checked - Dense',
}

export const CheckedDense = () => (
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
)

CheckedDense.story = {
    name: 'Checked - Dense',
}

export const IndeterminateDense = () => (
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
)

IndeterminateDense.story = {
    name: 'Indeterminate - Dense',
}

export const DisabledDense = () => (
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
)

DisabledDense.story = {
    name: 'Disabled - Dense',
}

export const ValidDense = () => (
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
)

ValidDense.story = {
    name: 'Valid - Dense',
}

export const WarningDense = () => (
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
)

WarningDense.story = {
    name: 'Warning - Dense',
}

export const ErrorDense = () => (
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
)

ErrorDense.story = {
    name: 'Error - Dense',
}

export const ImageLabelDense = () => (
    <Checkbox
        dense
        name="Ex"
        label={<img src="https://picsum.photos/id/82/200/100" />}
        value="with-help"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

ImageLabelDense.story = {
    name: 'Image label - Dense',
}
