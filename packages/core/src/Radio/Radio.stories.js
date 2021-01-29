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

export default {
    title: 'Forms/Radio/Radio',
    component: Radio,
}

export const Default = () => (
    <Radio
        name="Ex"
        label="Radio"
        value="default"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

export const FocusedUnchecked = () => (
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
)

FocusedUnchecked.story = {
    name: 'Focused unchecked',
}

export const FocusedChecked = () => (
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
)

FocusedChecked.story = {
    name: 'Focused checked',
}

export const Checked = () => (
    <Radio
        name="Ex"
        label="Radio"
        checked
        value="checked"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

export const Disabled = () => (
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
)

export const Valid = () => (
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
)

export const Warning = () => (
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
)

export const Error = () => (
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
)

export const ImageLabel = () => (
    <Radio
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
    <Radio
        dense
        name="Ex"
        label="Radio"
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
)

FocusedUncheckedDense.story = {
    name: 'Focused unchecked - Dense',
}

export const FocusedCheckedDense = () => (
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
)

FocusedCheckedDense.story = {
    name: 'Focused checked - Dense',
}

export const CheckedDense = () => (
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
)

CheckedDense.story = {
    name: 'Checked - Dense',
}

export const DisabledDense = () => (
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
)

DisabledDense.story = {
    name: 'Disabled - Dense',
}

export const ValidDense = () => (
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
)

ValidDense.story = {
    name: 'Valid - Dense',
}

export const WarningDense = () => (
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
)

WarningDense.story = {
    name: 'Warning - Dense',
}

export const ErrorDense = () => (
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
)

ErrorDense.story = {
    name: 'Error - Dense',
}

export const ImageLabelDense = () => (
    <Radio
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

export const NoLabel = () => (
    <Radio
        name="Ex"
        value="with-help"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="some-name"
    />
)
