import { storiesOf } from '@storybook/react'
import React from 'react'
import { Menu, MenuItem } from '../index.js'

window.onClick = window.Cypress && window.Cypress.cy.stub()

const MenuItemPositions = () => (
    <Menu>
        <MenuItem label="One" value="one">
            <Menu>
                <MenuItem
                    label="Sub One"
                    value="subone"
                    dataTest="submenu"
                ></MenuItem>
            </Menu>
        </MenuItem>
    </Menu>
)

storiesOf('MenuItem', module)
    .add('With onClick and value', () => (
        <MenuItem label="Menu item" value="Value" onClick={window.onClick} />
    ))
    .add('With href', () => <MenuItem label="Menu item" href="url.test" />)
    .add('With target', () => (
        <MenuItem label="Menu item" href="url.test" target="_blank" />
    ))
    .add('With icon', () => (
        <MenuItem label="Menu item" icon={<div>Icon</div>} />
    ))
    .add('With label', () => <MenuItem label="Label" />)
    .add('Default position', () => <MenuItemPositions />)
    .add('Flipped position', () => (
        <div>
            <MenuItemPositions />
            <style jsx>{`
                div {
                    text-align: right;
                }
            `}</style>
        </div>
    ))
    .add('Shift into view', () => (
        <div>
            <MenuItemPositions />
            <style jsx>{`
                :global(html),
                :global(body),
                :global(#root) {
                    position: relative;
                    width: 180px;
                    max-width: 180px;
                    overflow: hidden;
                }
                :global(#root) {
                    border: 3px dashed grey;
                }
            `}</style>
        </div>
    ))
