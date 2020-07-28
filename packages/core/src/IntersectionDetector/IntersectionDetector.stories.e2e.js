import React, { useRef } from 'react'
import { IntersectionDetector } from './IntersectionDetector.js'

window.onChange = window.Cypress ? window.Cypress.cy.stub() : () => null

export default { title: 'IntersectionDetector' }

export const OutOfView = () => {
    const rootRef = useRef()

    return (
        <div
            ref={rootRef}
            data-test="scroll-container"
            style={{ width: 200, height: 300, overflow: 'auto' }}
        >
            <div
                // spacer to push indicator out of the intersecting area
                style={{
                    width: 200,
                    height: 310,
                    overflow: 'auto',
                    background: 'blue',
                }}
            />

            <IntersectionDetector rootRef={rootRef} onChange={window.onChange}>
                <div style={{ background: 'red', height: 200 }} />
            </IntersectionDetector>
        </div>
    )
}

export const InView = () => {
    const rootRef = useRef()

    return (
        <div
            ref={rootRef}
            data-test="scroll-container"
            style={{ width: 200, height: 300, overflow: 'auto' }}
        >
            <div style={{ background: 'red', height: 200 }}>
                <IntersectionDetector
                    rootRef={rootRef}
                    onChange={window.onChange}
                />
            </div>

            <div
                // spacer to push indicator out of the intersecting area
                style={{
                    width: 200,
                    height: 310,
                    overflow: 'auto',
                    background: 'blue',
                }}
            />
        </div>
    )
}
