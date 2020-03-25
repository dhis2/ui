import React from 'react'
import { storiesOf } from '@storybook/react'
import propTypes from '@dhis2/prop-types'
import { Layer } from '../Layer.js'
import { layers } from '../theme.js'

const logger = event => {
    event.stopPropagation()
    console.log('I happened', event.currentTarget)
}

const DivInLayer = ({ stackLevel, className, children }) => (
    <Layer level={stackLevel}>
        <div className={className} onClick={logger}>
            {children}
        </div>
        <style jsx>{`
            div {
                position: absolute;
                width: 210px;
                height: 140px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .layer-a-child {
                top: 0;
                left: 0;
                background-color: magenta;
            }
            .layer-b-child {
                top: 0;
                left: 140px;
                background-color: blue;
            }
            .layer-c-child {
                top: 0;
                left: 280px;
                background-color: green;
            }
            .layer-d-child {
                top: 90px;
                left: 0;
                background-color: orange;
            }
            .layer-e-child {
                top: 90px;
                left: 140px;
                background-color: red;
            }
            .layer-f-child {
                top: 90px;
                left: 280px;
                background-color: turquoise;
            }
        `}</style>
    </Layer>
)

DivInLayer.propTypes = {
    stackLevel: propTypes.number.isRequired,
    children: propTypes.node,
    className: propTypes.string,
}

storiesOf('Layer', module).add('Stacked layers (pure nesting)', () => (
    <>
        <DivInLayer stackLevel={layers.alert} className="layer-a-child">
            A
            <DivInLayer stackLevel={layers.blocking} className="layer-b-child">
                B
                <DivInLayer stackLevel={4561} className="layer-c-child">
                    C
                </DivInLayer>
            </DivInLayer>
        </DivInLayer>
        <DivInLayer stackLevel={layers.blocking} className="layer-d-child">
            D
            <DivInLayer stackLevel={layers.blocking} className="layer-e-child">
                E
                <DivInLayer
                    stackLevel={layers.applicationTop}
                    className="layer-f-child"
                >
                    F
                </DivInLayer>
            </DivInLayer>
        </DivInLayer>
        <style jsx>{`
            :global(#root) {
                height: auto !important;
            }
        `}</style>
    </>
))

storiesOf('Layer', module).add('Inverse nesting', () => (
    <>
        <DivInLayer stackLevel={layers.blocking} className="layer-a-child">
            A
            <DivInLayer stackLevel={layers.alert} className="layer-b-child">
                B
                <DivInLayer stackLevel={layers.alert} className="layer-c-child">
                    C
                </DivInLayer>
            </DivInLayer>
        </DivInLayer>
        <DivInLayer stackLevel={layers.blocking} className="layer-d-child">
            D
            <DivInLayer
                stackLevel={layers.applicationTop}
                className="layer-e-child"
            >
                E
                <DivInLayer stackLevel={layers.alert} className="layer-f-child">
                    F
                </DivInLayer>
            </DivInLayer>
        </DivInLayer>
        <style jsx>{`
            :global(#root) {
                height: auto !important;
            }
        `}</style>
    </>
))
