import React, { useState } from 'react'
import { resolve } from 'styled-jsx/css'
import { Apps } from '../Icons/index.js'
import { Menu } from '../Menu/Menu.js'
import { MenuItem } from './MenuItem.js'

export default {
    title: 'MenuItem',
    component: MenuItem,
    decorators: [storyFn => <Menu>{storyFn()}</Menu>],
}

export const Default = () => <MenuItem label="Menu item" />

export const Active = () => <MenuItem active label="Menu item" />

export const Chevron = () => <MenuItem chevron label="Menu item" />

export const Dense = () => <MenuItem dense label="Menu item" />

export const Destructive = () => <MenuItem destructive label="Menu item" />

export const Disabled = () => <MenuItem disabled label="Menu item" />

export const Link = () => (
    <MenuItem target="_blank" href="http://dhis2.org" label="Menu item" />
)

export const Icon = () => {
    const { className, styles } = resolve`
        fill: magenta;
    `

    return (
        <>
            <MenuItem icon={<Apps />} label="Menu item" />
            <MenuItem
                icon={<Apps className={className} />}
                label="Menu item - with custom icon fill"
            />

            {styles}
        </>
    )
}

export const OnClick = () => (
    <MenuItem
        onClick={(payload, event) => {
            console.log(payload.value, event.target)
        }}
        value="myValue"
        label="Menu item"
    />
)

export const ToggleMenuItem = () => {
    const [on, setOn] = useState(false)
    const toggleOn = () => setOn(!on)
    const checkMarkStyle = { fontSize: '24px', lineHeight: '24px' }
    const icon = on ? <span style={checkMarkStyle}>✓</span> : <span />

    return (
        <MenuItem onClick={toggleOn} icon={icon} label="A toggle menu item" />
    )
}
