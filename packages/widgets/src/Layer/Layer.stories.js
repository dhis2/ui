import React from 'react'
import { Layer } from './Layer.js'
import { CircularLoader, CenteredContent } from '../index.js'

export default {
    title: 'Component/Widget/Layer',
    component: Layer,
}

export const Default = () => (
    <>
        <Layer />

        <h1>Text behind the layer</h1>
        <p>Lorem ipsum</p>
    </>
)

export const Translucent = () => (
    <>
        <Layer translucent />

        <h1>Text behind the layer</h1>
        <p>Lorem ipsum</p>
    </>
)

export const WithClickHandler = () => (
    <>
        <Layer onClick={() => alert('layer was clicked')} />

        <h1>Text behind the layer</h1>
        <p>Lorem ipsum</p>
    </>
)

export const NonBlocking = () => (
    <>
        <Layer translucent pointerEvents="none" />

        <h1>Text behind the layer</h1>
        <p>
            You can still select this text because the layer has pointer-event:
            none.
        </p>
    </>
)

export const WithCenteredContentCircularLoader = () => (
    <>
        <Layer translucent>
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        </Layer>

        <h1>Text behind the layer</h1>
        <p>Lorem ipsum</p>
    </>
)
