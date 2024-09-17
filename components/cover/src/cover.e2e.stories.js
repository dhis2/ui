import React from 'react'
import { Cover } from './cover.js'

window.onButtonClick = window.Cypress && window.Cypress.cy.stub()
window.onCover = window.Cypress && window.Cypress.cy.stub()

export default {
    title: 'Cover',
    component: Cover,
    decorators: [
        (story) => (
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
    <Cover>
        <p>I am a child</p>
    </Cover>
)

export const Blocking = () => (
    <>
        <button data-test="button" onClick={window.onButtonClick}>
            Test
        </button>
        <Cover />
    </>
)

export const WithClickHandler = () => (
    <Cover onClick={window.onCover}>
        <button data-test="button" onClick={window.onButtonClick}>
            Test
        </button>
    </Cover>
)
