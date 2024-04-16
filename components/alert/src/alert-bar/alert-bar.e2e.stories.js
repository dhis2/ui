import React, { useState } from 'react'
import { AlertBar } from './index.js'

window.onHidden = window.Cypress && window.Cypress.cy.stub()

export default { title: 'AlertBar' }

export const Default = () => <AlertBar>Default</AlertBar>
export const CustomDuration = () => (
    <AlertBar duration={2000}>Custom duration</AlertBar>
)
export const PermanentWithActions = () => (
    <AlertBar
        permanent
        actions={[
            { label: 'Save', onClick: () => {} },
                { label: 'Cancel', onClick: () => {} },
        ]}
    >
        With Actions
    </AlertBar>
)
export const DisabledIcon = () => <AlertBar icon={false}>Message</AlertBar>
export const CustomIcon = () => (
    <AlertBar icon={<span>Custom icon</span>}>Message</AlertBar>
)
export const WithMessage = () => <AlertBar>With a message</AlertBar>
export const WithOnHidden = () => (
    <AlertBar onHidden={window.onHidden}>Message</AlertBar>
)
export const Permanent = () => <AlertBar permanent>Message</AlertBar>
export const HiddenProp = () => {
    const [hidden, setHidden] = useState(true)
    const toggleVisibility = () => setHidden((prevHidden) => !prevHidden)
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
}
