import { layers } from '@dhis2/ui-constants'
import React from 'react'
import { Layer } from './Layer.js'

window.onButtonClick = window.Cypress && window.Cypress.cy.stub()
window.onLayerClick = window.Cypress && window.Cypress.cy.stub()

const createNamedLayerClick = name => () => {
    window.onLayerClick(name)
}

export default { title: 'Layer', component: Layer }

export const Default = () => (
    <Layer>
        <p>I am a child</p>
    </Layer>
)

export const Blocking = () => (
    <>
        <button onClick={window.onButtonClick}>Test</button>
        <Layer />
    </>
)

export const WithClickHandler = () => (
    <Layer onClick={window.onLayerClick}>
        <button onClick={window.onButtonClick}>Test</button>
    </Layer>
)

export const EqualSiblings = () => (
    <>
        <Layer onClick={createNamedLayerClick('first')} />
        <Layer onClick={createNamedLayerClick('second')} />
    </>
)

export const InequalSiblings = () => (
    <>
        <Layer zIndex={layers.alert} onClick={createNamedLayerClick('alert')} />
        <Layer
            zIndex={layers.blocking}
            onClick={createNamedLayerClick('blocking')}
        />
        <Layer
            zIndex={layers.applicationTop}
            onClick={createNamedLayerClick('applicationTop')}
        />
    </>
)

export const NestedLowerLevels = () => (
    <Layer
        zIndex={layers.alert}
        dataTest="alert"
        onClick={createNamedLayerClick('alert')}
    >
        <Layer
            zIndex={layers.blocking}
            disablePortal={true}
            dataTest="blocking"
            onClick={createNamedLayerClick('blocking')}
        />
    </Layer>
)

export const NestedHigherLevels = () => (
    <Layer
        zIndex={layers.blocking}
        dataTest="blocking"
        onClick={createNamedLayerClick('blocking')}
    >
        <Layer
            zIndex={layers.alert}
            dataTest="alert"
            onClick={createNamedLayerClick('alert')}
        />
    </Layer>
)

export const LevelsAreRespectedWhenNesting = () => (
    <>
        <Layer zIndex={1000}>
            <Layer zIndex={1000}>
                <Layer zIndex={1000} onClick={createNamedLayerClick('1000')} />
            </Layer>
        </Layer>
        <Layer zIndex={1001} onClick={createNamedLayerClick('1001')} />
    </>
)

export const NestedHigherLevelEndsOnTop = () => (
    <>
        <Layer zIndex={layers.applicationTop}>
            <Layer
                zIndex={layers.alert}
                onClick={createNamedLayerClick('alert')}
            />
        </Layer>
        <Layer
            zIndex={layers.blocking}
            onClick={createNamedLayerClick('blocking')}
        />
    </>
)
