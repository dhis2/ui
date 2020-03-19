import React from 'react'
import { SplitButton } from './SplitButton.js'

export default {
    title: 'Component/Core/SplitButton',
    component: SplitButton,
}

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

const Simple = <span>Simplest thing</span>

export const Default = () => (
    <SplitButton name="default" value="nothing">
        Label me!
    </SplitButton>
)

export const WithClick = () => (
    <SplitButton name="default" value="nothing" onClick={onClick}>
        Label me!
    </SplitButton>
)

export const Primary = () => (
    <SplitButton name="default" value="nothing" primary>
        Label me!
    </SplitButton>
)

export const Secondary = () => (
    <SplitButton name="default" value="nothing" secondary>
        Label me!
    </SplitButton>
)

export const Destructive = () => (
    <SplitButton name="default" value="nothing" destructive>
        Label me!
    </SplitButton>
)

export const Disabled = () => (
    <SplitButton name="default" value="nothing" disabled>
        Label me!
    </SplitButton>
)

export const Small = () => (
    <SplitButton name="default" value="nothing" small>
        Label me!
    </SplitButton>
)

export const Large = () => (
    <SplitButton name="default" value="nothing" large>
        Label me!
    </SplitButton>
)

export const WithMenu = () => (
    <SplitButton name="default" value="nothing" component={Simple}>
        Label me!
    </SplitButton>
)

export const InitialFocus = () => (
    <SplitButton name="default" value="nothing" initialFocus>
        Label me!
    </SplitButton>
)
