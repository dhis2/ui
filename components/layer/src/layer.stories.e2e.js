import { layers } from '@dhis2/ui-constants'
import React from 'react'
import { Layer } from './layer.js'

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
        <Layer level={layers.alert} onClick={createNamedLayerClick('alert')} />
        <Layer
            level={layers.blocking}
            onClick={createNamedLayerClick('blocking')}
        />
        <Layer
            level={layers.applicationTop}
            onClick={createNamedLayerClick('applicationTop')}
        />
    </>
)

export const NestedLowerLevels = () => (
    <Layer
        level={layers.alert}
        dataTest="alert"
        onClick={createNamedLayerClick('alert')}
    >
        <Layer
            level={layers.blocking}
            dataTest="blocking"
            onClick={createNamedLayerClick('blocking')}
        />
    </Layer>
)

export const NestedHigherLevels = () => (
    <Layer
        level={layers.blocking}
        dataTest="blocking"
        onClick={createNamedLayerClick('blocking')}
    >
        <Layer
            level={layers.alert}
            dataTest="alert"
            onClick={createNamedLayerClick('alert')}
        />
    </Layer>
)

export const LevelsAreRespectedWhenNesting = () => (
    <>
        <Layer level={1000}>
            <Layer level={1000}>
                <Layer level={1000} onClick={createNamedLayerClick('1000')} />
            </Layer>
        </Layer>
        <Layer level={1001} onClick={createNamedLayerClick('1001')} />
    </>
)

export const NestedHigherLevelEndsOnTop = () => (
    <>
        <Layer level={layers.applicationTop}>
            <Layer
                level={layers.alert}
                onClick={createNamedLayerClick('alert')}
            />
        </Layer>
        <Layer
            level={layers.blocking}
            onClick={createNamedLayerClick('blocking')}
        />
    </>
)
