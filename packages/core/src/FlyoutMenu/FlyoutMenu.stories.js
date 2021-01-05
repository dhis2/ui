import React, { useState, useRef } from 'react'
import { ArrowDown } from '../Icons/index.js'
import { Layer } from '../Layer/Layer.js'
import { MenuDivider } from '../MenuDivider/MenuDivider.js'
import { MenuItem } from '../MenuItem/MenuItem.js'
import { MenuSectionHeader } from '../MenuSectionHeader/MenuSectionHeader.js'
import { Popper } from '../Popper/Popper.js'
import { FlyoutMenu } from './FlyoutMenu.js'

export default {
    title: 'FlyoutMenu',
    component: FlyoutMenu,
}

export const Default = () => (
    <FlyoutMenu>
        <MenuItem label="Item 1" />
        <MenuItem label="Item 2" />
    </FlyoutMenu>
)

export const Dense = () => (
    <FlyoutMenu dense>
        <MenuItem label="Item 1" />
        <MenuItem label="Item 2" />
    </FlyoutMenu>
)

export const MaxHeight = () => (
    <FlyoutMenu maxHeight="250px">
        <MenuItem label="Item 1" />
        <MenuItem label="Item 2" />
        <MenuItem label="Item 3" />
        <MenuItem label="Item 4" />
        <MenuItem label="Item 5" />
        <MenuItem label="Item 6" />
        <MenuItem label="Item 7" />
        <MenuItem label="Item 8" />
        <MenuItem label="Item 9" />
        <MenuItem label="Item 10" />
    </FlyoutMenu>
)

export const MaxWidth = () => (
    <>
        <FlyoutMenu>
            <MenuItem label="Short item 1" />
            <MenuItem label="Short item 2" />
        </FlyoutMenu>
        <br />
        <FlyoutMenu>
            <MenuItem
                label="Item 1 - with a lot of text and using a default maxWidth value
                of 380px"
            />
            <MenuItem
                label="Item 2 - with a lot of text and using a default maxWidth value
                of 380px"
            />
        </FlyoutMenu>
        <br />
        <FlyoutMenu maxWidth="300px">
            <MenuItem
                label="Item 1 - with a lot of text and using a custom maxWidth value of
                300px"
            />
            <MenuItem
                label="Item 2 - with a lot of text and using a custom maxWidth value of
                300px"
            />
        </FlyoutMenu>
    </>
)

export const WithSubMenus = () => (
    <FlyoutMenu>
        <MenuItem label="Item 1" />
        <MenuItem label="Item 2">
            <MenuItem label="Item 2 a" />
            <MenuItem label="Item 2 b">
                <MenuItem label="Item 2 b i" />
                <MenuItem label="Item 2 b ii" />
            </MenuItem>
            <MenuItem label="Item 2 c" />
        </MenuItem>
        <MenuItem label="Item 3" />
        <MenuItem label="Item 4">
            <MenuItem label="Item 4 a" />
            <MenuItem label="Item 4 b">
                <MenuItem label="Item 4 b i" />
                <MenuItem label="Item 4 b ii" />
            </MenuItem>
            <MenuItem label="Item 4 c" />
        </MenuItem>
        <MenuItem label="Item 5" />
    </FlyoutMenu>
)

export const WithVariousChildren = () => (
    <FlyoutMenu>
        <MenuSectionHeader label="Section with sub-menus" />
        <MenuItem label="Item 1" />
        <MenuItem label="Item 2">
            <MenuItem label="Item 2 a" />
            <MenuItem label="Item 2 b">
                <MenuItem label="Item 2 b i" />
                <MenuItem label="Item 2 b ii" />
            </MenuItem>
            <MenuItem label="Item 2 c" />
        </MenuItem>
        <MenuItem label="Item 3" />
        <MenuItem label="Item 4">
            <MenuItem label="Item 4 a" />
            <MenuItem label="Item 4 b">
                <MenuItem label="Item 4 b i" />
                <MenuItem label="Item 4 b ii" />
            </MenuItem>
            <MenuItem label="Item 4 c" />
        </MenuItem>
        <MenuItem label="Item 5" />
        <MenuSectionHeader label="Section with dividers between menu items" />
        <MenuItem label="Item 1" />
        <MenuDivider />
        <MenuItem label="Item 2" />
        <MenuDivider />
        <MenuItem label="Item 3" />
    </FlyoutMenu>
)

export const DropDownMenu = () => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    return (
        <>
            <button ref={ref} onClick={toggle}>
                Open menu &nbsp;&nbsp; <ArrowDown />
            </button>
            {open && (
                <Layer onClick={toggle}>
                    <Popper reference={ref} placement="bottom-start">
                        <Default />
                    </Popper>
                </Layer>
            )}
        </>
    )
}

export const WithCustomMenuItem = () => {
    // You should not create custom components in the render cycle
    // this is just for demo purposes
    // eslint-disable-next-line react/prop-types
    const PopupWindowMenuItem = ({ to, children, ...rest }) => {
        const HEIGHT = 1000
        const WIDTH = 1400
        const centerY = (window.screen.height - HEIGHT) / 2
        const centerX = (window.screen.width - WIDTH) / 2

        const onClick = () =>
            window.open(
                to,
                'Popup',
                [
                    'menubar=no',
                    'location=no',
                    'resizable=no',
                    'scrollbars=no',
                    'status=no',
                    `width=${WIDTH}`,
                    `height=${HEIGHT}`,
                    `top=${centerY}`,
                    `left=${centerX}`,
                ].join()
            )

        return <MenuItem onClick={onClick} label={children} {...rest} />
    }

    return (
        <FlyoutMenu>
            <MenuItem label="A normal menu item" />
            <PopupWindowMenuItem to="http://dhis2.org">
                A custom menu item (popup window)
            </PopupWindowMenuItem>
        </FlyoutMenu>
    )
}
