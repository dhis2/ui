import React from 'react'
import { ComponentCover } from './component-cover.js'

window.onButtonClick = window.Cypress && window.Cypress.cy.stub()
window.onComponentCoverClick = window.Cypress && window.Cypress.cy.stub()

export default {
    title: 'ComponentCover',
    component: ComponentCover,
    decorators: [
        story => (
            <div>
                {story()}
                <style jsx>{`
                    div {
                        width: 400px;
                        height: 400px;
                        position: relative;
                        border: 1px dotted grey;
                    }
                `}</style>
            </div>
        ),
    ],
}

export const WithChildren = () => (
    <ComponentCover>
        <p>I am a child</p>
    </ComponentCover>
)

export const Blocking = () => (
    <>
        <button onClick={window.onButtonClick}>Test</button>
        <ComponentCover />
    </>
)

export const WithClickHandler = () => (
    <ComponentCover onClick={window.onComponentCoverClick}>
        <button onClick={window.onButtonClick}>Test</button>
    </ComponentCover>
)
