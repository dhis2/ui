import React from 'react'
import { Switch } from './Switch.js'

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
    title: 'Forms/Switch/Switch',
    component: Switch,
}

export const Default = () => (
    <Switch
        name="Ex"
        label="Switch"
        value="default"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

export const FocusedUnchecked = () => (
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
)
FocusedUnchecked.storyName = 'Focused unchecked'

export const FocusedChecked = () => (
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
)
FocusedChecked.storyName = 'Focused checked'

export const Checked = () => (
    <Switch
        name="Ex"
        label="Switch"
        checked
        value="checked"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)

export const Disabled = () => (
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
)

export const Valid = () => (
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
)

export const Warning = () => (
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
)

export const Error = () => (
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
)

export const ImageLabel = () => (
    <Switch
        name="Ex"
        label={<img src="https://picsum.photos/id/82/200/100" />}
        value="with-help"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)
ImageLabel.storyName = 'Image label'

export const DefaultDense = () => (
    <Switch
        dense
        name="Ex"
        label="Switch"
        value="default"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)
DefaultDense.storyName = 'Default - Dense'

export const FocusedUncheckedDense = () => (
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
)
FocusedUncheckedDense.storyName = 'Focused unchecked - Dense'

export const FocusedCheckedDense = () => (
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
)
FocusedCheckedDense.storyName = 'Focused checked - Dense'

export const CheckedDense = () => (
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
)
CheckedDense.storyName = 'Checked - Dense'

export const DisabledDense = () => (
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
)
DisabledDense.storyName = 'Disabled - Dense'

export const ValidDense = () => (
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
)
ValidDense.storyName = 'Valid - Dense'

export const WarningDense = () => (
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
)
WarningDense.storyName = 'Warning - Dense'

export const ErrorDense = () => (
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
)
ErrorDense.storyName = 'Error - Dense'

export const ImageLabelDense = () => (
    <Switch
        dense
        name="Ex"
        label={<img src="https://picsum.photos/id/82/200/100" />}
        value="with-help"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
    />
)
ImageLabelDense.storyName = 'Image label - Dense'
