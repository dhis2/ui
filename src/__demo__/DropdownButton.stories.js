import React from 'react'
import { storiesOf } from '@storybook/react'
import { DropdownButton, Menu, MenuItem, Divider, Switch } from '../index.js'

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

const componentMenu = (
    <Menu>
        <MenuItem
            label={
                <Switch
                    label="Yahoo"
                    name="radio"
                    value="something"
                    onChange={() => {}}
                />
            }
        />
        <Divider />
        <MenuItem
            label="Three"
            value="three"
            onClick={val => {
                alert(`this is ${val}`)
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
                                    onClick={val => {
                                        alert(`this is ${val}`)
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
            onClick={val => {
                alert(`this is ${val}`)
            }}
        />
        <MenuItem
            label="Three"
            value="three"
            onClick={val => {
                alert(`this is ${val}`)
            }}
        />
    </Menu>
)

const Simple = <span>Simplest thing</span>

createStory('DropdownButton: Basic', {
    name: 'Button',
    value: 'default',
    component: Simple,
    onClick,
})

createStory('DropdownButton: Primary', {
    name: 'Button',
    value: 'default',
    primary: true,
    component: Simple,
    onClick,
})

createStory('DropdownButton: Secondary', {
    name: 'Button',
    value: 'default',
    secondary: true,
    component: Simple,
    onClick,
})

createStory('DropdownButton: Destructive', {
    name: 'Button',
    value: 'default',
    destructive: true,
    component: Simple,
    onClick,
})

function createStory(name, props) {
    storiesOf(name, module)
        .add('Default', () => (
            <DropdownButton {...props}>Label me!</DropdownButton>
        ))

        .add('Disabled', () => (
            <DropdownButton {...props} disabled>
                Label me!
            </DropdownButton>
        ))

        .add('Small', () => (
            <DropdownButton {...props} small>
                Label me!
            </DropdownButton>
        ))

        .add('Large', () => (
            <DropdownButton {...props} large>
                Label me!
            </DropdownButton>
        ))

        .add('With Menu', () => (
            <DropdownButton component={menu}>Drop it with menu!</DropdownButton>
        ))

        .add('With Radio component in menu', () => (
            <DropdownButton component={componentMenu}>
                Drop it with menu!
            </DropdownButton>
        ))
}
