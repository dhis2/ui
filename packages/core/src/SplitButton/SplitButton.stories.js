import React from 'react'
import { SplitButton } from './SplitButton.js'

export default {
    title: 'Actions/Buttons/Split Button',
    component: SplitButton,
}

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

const Simple = <span>Simplest thing</span>

export const Default = () => (
    <SplitButton name="default" value="nothing" component={Simple}>
        Label me!
    </SplitButton>
)

export const WithClick = () => (
    <SplitButton
        name="default"
        value="nothing"
        onClick={onClick}
        component={Simple}
    >
        Label me!
    </SplitButton>
)

export const Primary = () => (
    <SplitButton name="default" value="nothing" primary component={Simple}>
        Label me!
    </SplitButton>
)

export const Secondary = () => (
    <SplitButton name="default" value="nothing" secondary component={Simple}>
        Label me!
    </SplitButton>
)

export const Destructive = () => (
    <SplitButton name="default" value="nothing" destructive component={Simple}>
        Label me!
    </SplitButton>
)

export const Disabled = () => (
    <SplitButton name="default" value="nothing" disabled component={Simple}>
        Label me!
    </SplitButton>
)

export const Small = () => (
    <SplitButton name="default" value="nothing" small component={Simple}>
        Label me!
    </SplitButton>
)

export const Large = () => (
    <SplitButton name="default" value="nothing" large component={Simple}>
        Label me!
    </SplitButton>
)

export const WithMenu = () => (
    <SplitButton name="default" value="nothing" component={Simple}>
        Label me!
    </SplitButton>
)

export const InitialFocus = () => (
    <SplitButton name="default" value="nothing" initialFocus component={Simple}>
        Label me!
    </SplitButton>
)

export const WithIcon = () => (
    <SplitButton
        name="Button"
        value="default"
        component={<div>Component</div>}
        icon={<div>Icon</div>}
    >
        Children
    </SplitButton>
)
