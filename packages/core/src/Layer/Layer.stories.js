import React from 'react'
import { CircularLoader, CenteredContent } from '../index.js'
import { Layer } from './Layer.js'

export default {
    title: 'Helpers/Layer',
    component: Layer,
    /**
     * `inlineStories: false` renders these layers in iframes instead of inline.
     * This fixes an issue where all the layers on the docs page render on top
     * of eachother, each covering the whole screen.
     * There is a performance tradeof, and they are slow to load.
     */
    parameters: {
        docs: {
            inlineStories: false,
            iframeHeight: '180px',
            description: {
                component: 'These stories may take some time to load.',
            },
        },
    },
    argTypes: {
        translucent: {
            name: 'translucent',
            type: 'boolean',
            description: 'Applies a translucent opacity to the layer',
            table: {
                type: { summary: 'bool' },
            },
            control: {
                type: 'boolean',
            },
        },
    },
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
