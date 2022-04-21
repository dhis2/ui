import { Layer } from '@dhis2-ui/layer'
import { MenuDivider, MenuItem, MenuSectionHeader } from '@dhis2-ui/menu'
import { Popper } from '@dhis2-ui/popper'
import { IconChevronDown16 } from '@dhis2/ui-icons'
import React, { useState, useRef } from 'react'
import { FlyoutMenu } from './flyout-menu.js'

const description = `
Use menus to provide access to options and actions where space is limited and displaying all the options would be impractical. For example, providing access to a range of actions for every dashboard item displayed. Containing all those actions in menus keeps the page manageable.

The menu component is flexible in where it can be used and its contents can be flexible too. However, the most common use case is a menu containing menu items.

Make sure the menu item labels are short and easy to understand. One word is often enough to describe an action or option. Do not use sentences as labels. Some examples of good menu item labels:

- "Save"
- "Open as map"
- "Export PDF"
- "Duplicate"

See more about how to use menus at the [design system](https://github.com/dhis2/design-system/blob/master/molecules/menu.md).

\`\`\`js
import { FlyoutMenu } from 'dhis2/ui'
\`\`\`
`

export default {
    title: 'Flyout Menu',
    component: FlyoutMenu,
    parameters: { docs: { description: { component: description } } },
}

export const Default = (args) => (
    <FlyoutMenu {...args}>
        <MenuItem label="Item 1" />
        <MenuItem label="Item 2" />
    </FlyoutMenu>
)

export const Dense = Default.bind({})
Dense.args = { dense: true }

export const MaxHeight = (args) => (
    <FlyoutMenu {...args}>
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
MaxHeight.args = { maxHeight: '250px' }

export const MaxWidth = (args) => (
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
        <FlyoutMenu {...args}>
            <MenuItem
                label={`Item 1 - with a lot of text and using a custom maxWidth value of
                ${args.maxWidth}`}
            />
            <MenuItem
                label={`Item 2 - with a lot of text and using a custom maxWidth value of
                ${args.maxWidth}`}
            />
        </FlyoutMenu>
    </>
)
MaxWidth.args = { maxWidth: '300px' }

export const WithSubMenus = (args) => (
    <FlyoutMenu {...args}>
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
WithSubMenus.parameters = {
    docs: {
        description: {
            story: 'See this demo in the Canvas tab for proper alignment of sub menus.',
        },
    },
}

export const WithVariousChildren = (args) => (
    <FlyoutMenu {...args}>
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
WithVariousChildren.parameters = {
    docs: {
        description: {
            story: 'See this demo in the Canvas tab for proper alignment of sub menus.',
        },
    },
}

export const DropDownMenu = (args) => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    return (
        <>
            <button ref={ref} onClick={toggle}>
                Open menu &nbsp;&nbsp; <IconChevronDown16 />
            </button>
            {open && (
                <Layer onClick={toggle}>
                    <Popper reference={ref} placement="bottom-start">
                        <FlyoutMenu {...args}>
                            <MenuItem label="Item 1" />
                            <MenuItem label="Item 2" />
                        </FlyoutMenu>
                    </Popper>
                </Layer>
            )}
        </>
    )
}
DropDownMenu.parameters = {
    docs: {
        description: {
            story: 'View this demo in the canvas to see the dropdown menu.',
        },
        source: { type: 'code' },
    },
}

export const WithCustomMenuItem = (args) => {
    // You should not create custom components in the render cycle
    // this is just for demo purposes
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
        <FlyoutMenu {...args}>
            <MenuItem label="A normal menu item" />
            <PopupWindowMenuItem to="http://dhis2.org">
                A custom menu item (popup window)
            </PopupWindowMenuItem>
        </FlyoutMenu>
    )
}
