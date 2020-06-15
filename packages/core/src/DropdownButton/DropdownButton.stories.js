import React from 'react'
import { DropdownButton } from './DropdownButton.js'

export default {
    title: 'DropdownButton',
    component: DropdownButton,
}

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

const Simple = <span>Simplest thing</span>

export const Default = () => (
    <DropdownButton name="default" value="nothing" component={Simple}>
        Label me!
    </DropdownButton>
)

export const WithClick = () => (
    <DropdownButton
        name="default"
        value="nothing"
        onClick={onClick}
        component={Simple}
    >
        Label me!
    </DropdownButton>
)

export const Primary = () => (
    <DropdownButton name="default" value="nothing" primary component={Simple}>
        Label me!
    </DropdownButton>
)

export const Secondary = () => (
    <DropdownButton name="default" value="nothing" secondary component={Simple}>
        Label me!
    </DropdownButton>
)

export const Destructive = () => (
    <DropdownButton
        name="default"
        value="nothing"
        destructive
        component={Simple}
    >
        Label me!
    </DropdownButton>
)

export const Disabled = () => (
    <DropdownButton name="default" value="nothing" disabled component={Simple}>
        Label me!
    </DropdownButton>
)

export const Small = () => (
    <DropdownButton name="default" value="nothing" small component={Simple}>
        Label me!
    </DropdownButton>
)

export const Large = () => (
    <DropdownButton name="default" value="nothing" large component={Simple}>
        Label me!
    </DropdownButton>
)

export const WithMenu = () => (
    <DropdownButton name="default" value="nothing" component={Simple}>
        Label me!
    </DropdownButton>
)

export const InitialFocus = () => (
    <DropdownButton
        name="default"
        value="nothing"
        initialFocus
        component={Simple}
    >
        Label me!
    </DropdownButton>
)
