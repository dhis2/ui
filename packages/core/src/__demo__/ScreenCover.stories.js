import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    CircularLoader,
    ScreenCover,
    Menu,
    MenuItem,
    Divider,
} from '../index.js'

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

storiesOf('Utility/ScreenCover', module)
    .add('Default', () => <ScreenCover onClick={onClick} />)

    .add('CircularLoader', () => (
        <ScreenCover onClick={onClick}>
            <CircularLoader />
        </ScreenCover>
    ))

    .add('Align top: Menu', () => (
        <ScreenCover onClick={onClick}>
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
        </ScreenCover>
    ))

    .add('Align middle: Menu', () => (
        <ScreenCover onClick={onClick} alignMiddle>
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
        </ScreenCover>
    ))

    .add('Align bottom: Menu', () => (
        <ScreenCover onClick={onClick} alignBottom>
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
        </ScreenCover>
    ))
