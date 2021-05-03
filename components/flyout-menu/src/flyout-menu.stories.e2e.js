import React from 'react'
import { MenuItem } from '@dhis2/ui-menu'
import { FlyoutMenu } from './flyout-menu.js'

export default {
    title: 'FlyoutMenu',
    component: FlyoutMenu,
}

const MenuItemSubMenuPositions = () => (
    <FlyoutMenu>
        <MenuItem label="Item 1">
            <div style={{ padding: 30 }}>SubMenu 1</div>
        </MenuItem>
    </FlyoutMenu>
)

export const WithChildren = () => <FlyoutMenu>I am a child</FlyoutMenu>

export const TogglesSubMenus = () => (
    <FlyoutMenu>
        <MenuItem label="Item 1">SubMenu 1</MenuItem>
        <MenuItem label="Item 2">SubMenu 2</MenuItem>
    </FlyoutMenu>
)

export const DefaultPosition = () => <MenuItemSubMenuPositions />
export const FlippedPosition = () => (
    <div>
        <MenuItemSubMenuPositions />
        <style jsx>{`
            div {
                text-align: right;
            }
        `}</style>
    </div>
)
export const ShiftIntoView = () => (
    <div>
        <MenuItemSubMenuPositions />
        <style jsx>{`
            :global(html),
            :global(body),
            :global(#root) {
                position: relative;
                width: 200px;
                max-width: 200px;
                overflow: hidden;
            }
            :global(#root) {
                border: 3px dashed grey;
            }
        `}</style>
    </div>
)
