import React from 'react'
import { storiesOf } from '@storybook/react'

import { Menu, MenuItem, Divider, SplitButton, Switch } from '../index.js'

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

const componentMenu = (
    <Menu>
        <MenuItem
            label={<Switch label="Yahoo" name="radio" onChange={() => {}} />}
        />
        <Divider />
        <MenuItem
            label="Three"
            value="three"
            onClick={() => {
                alert('this is no.3')
            }}
        />
    </Menu>
)

const menu = (
    <Menu>
        <MenuItem label="One" value="one">
            <Menu>
                <MenuItem label="Sub One" value="subone">
                    <Menu>
                        <MenuItem label="Sub One-One" value="suboneone">
                            <Menu>
                                <MenuItem
                                    label="Sub One-One-One"
                                    value="suboneoneone"
                                    onClick={() => {
                                        alert('you went deep!')
                                    }}
                                />
                            </Menu>
                        </MenuItem>
                    </Menu>
                </MenuItem>
            </Menu>
        </MenuItem>

        <Divider />
        <MenuItem
            label="Two"
            value="two"
            onClick={() => {
                alert('this is no.2')
            }}
        />
        <MenuItem
            label="Three"
            value="three"
            onClick={() => {
                alert('this is no.3')
            }}
        />
    </Menu>
)

const Simple = <span>Simplest thing</span>

createStory('SplitButton: Basic', {
    name: 'Button',
    value: 'default',
    component: Simple,
    onClick,
})

createStory('SplitButton: Primary', {
    name: 'Button',
    value: 'default',
    primary: true,
    component: Simple,
    onClick,
})

createStory('SplitButton: Secondary', {
    name: 'Button',
    value: 'default',
    secondary: true,
    component: Simple,
    onClick,
})

createStory('SplitButton: Destructive', {
    name: 'Button',
    value: 'default',
    destructive: true,
    component: Simple,
    onClick,
})

function createStory(name, props) {
    storiesOf(name, module)
        .add('Default', () => <SplitButton {...props}>Label me!</SplitButton>)

        .add('Disabled', () => (
            <SplitButton {...props} disabled>
                Label me!
            </SplitButton>
        ))

        .add('Small', () => (
            <SplitButton {...props} small>
                Label me!
            </SplitButton>
        ))

        .add('Large', () => (
            <SplitButton {...props} large>
                Label me!
            </SplitButton>
        ))

        .add('With Menu', () => (
            <SplitButton {...props} component={menu}>
                Drop it with menu!
            </SplitButton>
        ))

        .add('With Radio component in menu', () => (
            <SplitButton {...props} component={componentMenu}>
                Drop it with menu!
            </SplitButton>
        ))

        .add('InitialFocus', () => (
            <SplitButton {...props} initialFocus>
                Has initialFocus
            </SplitButton>
        ))
}
