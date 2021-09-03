import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { AlertBar } from './index.js'

window.onHidden = window.Cypress && window.Cypress.cy.stub()

storiesOf('AlertBar', module)
    .add('Default', () => <AlertBar>Default</AlertBar>)
    .add('Custom duration', () => (
        <AlertBar duration={2000}>Custom duration</AlertBar>
    ))
    .add('Permanent with actions', () => (
        <AlertBar
            permanent
            actions={[
                { label: 'Save', onClick: () => {} },
                { label: 'Cancel', onClick: () => {} },
            ]}
        >
            With Actions
        </AlertBar>
    ))
    .add('Disabled icon', () => <AlertBar icon={false}>Message</AlertBar>)
    .add('Custom icon', () => (
        <AlertBar icon={<span>Custom icon</span>}>Message</AlertBar>
    ))
    .add('With message', () => <AlertBar>With a message</AlertBar>)
    .add('With onHidden', () => (
        <AlertBar onHidden={window.onHidden}>Message</AlertBar>
    ))
    .add('Permanent', () => <AlertBar permanent>Message</AlertBar>)
    .add('Hidden prop', () => {
        const [hidden, setHidden] = useState(true)
        const toggleVisibility = () => setHidden(prevHidden => !prevHidden)
        return (
            <React.Fragment>
                <button
                    style={{
                        display: 'block',
                        position: 'fixed',
                        bottom: 150,
                        left: 10,
                    }}
                    onClick={toggleVisibility}
                >
                    {hidden ? 'Show' : 'Hide'}
                </button>
                <AlertBar permanent hidden={hidden} onHidden={window.onHidden}>
                    Short text
                </AlertBar>
            </React.Fragment>
        )
    })
