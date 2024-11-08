import { layers } from '@dhis2/ui-constants'
import React from 'react'
import { Layer } from './layer.js'

window.onButtonClick = window.Cypress && window.Cypress.cy.stub()
window.onLayerClick = window.Cypress && window.Cypress.cy.stub()

const createNamedLayerClick = (name) => () => {
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
    <Layer onBackdropClick={window.onLayerClick}>
        <button onClick={window.onButtonClick}>Test</button>
    </Layer>
)

export const EqualSiblings = () => (
    <>
        <Layer onBackdropClick={createNamedLayerClick('first')} />
        <Layer onBackdropClick={createNamedLayerClick('second')} />
    </>
)

export const InequalSiblings = () => (
    <>
        <Layer
            level={layers.alert}
            onBackdropClick={createNamedLayerClick('alert')}
        />
        <Layer
            level={layers.blocking}
            onBackdropClick={createNamedLayerClick('blocking')}
        />
        <Layer
            level={layers.applicationTop}
            onBackdropClick={createNamedLayerClick('applicationTop')}
        />
    </>
)

export const NestedLowerLevels = () => (
    <Layer
        level={layers.alert}
        dataTest="alert"
        onBackdropClick={createNamedLayerClick('alert')}
    >
        <Layer
            level={layers.blocking}
            dataTest="blocking"
            disablePortal={true}
            onBackdropClick={createNamedLayerClick('blocking')}
        />
    </Layer>
)

export const NestedHigherLevels = () => (
    <Layer
        level={layers.blocking}
        dataTest="blocking"
        onBackdropClick={createNamedLayerClick('blocking')}
    >
        <Layer
            level={layers.alert}
            dataTest="alert"
            onBackdropClick={createNamedLayerClick('alert')}
        />
    </Layer>
)

export const LevelsAreRespectedWhenNesting = () => (
    <>
        <Layer level={1000}>
            <Layer level={1000}>
                <Layer
                    level={1000}
                    onBackdropClick={createNamedLayerClick('1000')}
                />
            </Layer>
        </Layer>
        <Layer level={1001} onBackdropClick={createNamedLayerClick('1001')} />
    </>
)

export const NestedHigherLevelEndsOnTop = () => (
    <>
        <Layer level={layers.applicationTop}>
            <Layer
                level={layers.alert}
                onBackdropClick={createNamedLayerClick('alert')}
            />
        </Layer>
        <Layer
            level={layers.blocking}
            onBackdropClick={createNamedLayerClick('blocking')}
        />
    </>
)
