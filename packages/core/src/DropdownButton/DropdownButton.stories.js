import React from 'react'
import { DropdownButton } from './DropdownButton.js'

export default {
    title: 'Component/Core/DropdownButton',
    component: DropdownButton,
}

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

const Simple = <span>Simplest thing</span>

export const Default = () => (
    <DropdownButton name="default" value="nothing">
        Label me!
    </DropdownButton>
)

export const WithClick = () => (
    <DropdownButton name="default" value="nothing" onClick={onClick}>
        Label me!
    </DropdownButton>
)

export const Primary = () => (
    <DropdownButton name="default" value="nothing" primary>
        Label me!
    </DropdownButton>
)

export const Secondary = () => (
    <DropdownButton name="default" value="nothing" secondary>
        Label me!
    </DropdownButton>
)

export const Destructive = () => (
    <DropdownButton name="default" value="nothing" destructive>
        Label me!
    </DropdownButton>
)

export const Disabled = () => (
    <DropdownButton name="default" value="nothing" disabled>
        Label me!
    </DropdownButton>
)

export const Small = () => (
    <DropdownButton name="default" value="nothing" small>
        Label me!
    </DropdownButton>
)

export const Large = () => (
    <DropdownButton name="default" value="nothing" large>
        Label me!
    </DropdownButton>
)

export const WithMenu = () => (
    <DropdownButton name="default" value="nothing" component={Simple}>
        Label me!
    </DropdownButton>
)

export const InitialFocus = () => (
    <DropdownButton name="default" value="nothing" initialFocus>
        Label me!
    </DropdownButton>
)
