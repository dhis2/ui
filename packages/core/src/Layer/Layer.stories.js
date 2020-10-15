import React from 'react'
import { CircularLoader, CenteredContent } from '../index.js'
import { Layer } from './Layer.js'

export default {
    title: 'Layer',
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
