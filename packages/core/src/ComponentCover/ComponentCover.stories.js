import React from 'react'
import { ComponentCover } from './ComponentCover.js'
import { CircularLoader, CenteredContent } from '../index.js'

export default {
    title: 'Components/Core/ComponentCover',
    component: ComponentCover,
    decorators: [
        storyFn => (
            <div>
                {storyFn()}
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

export const Default = () => (
    <>
        <ComponentCover />

        <h1>Text behind the cover</h1>
        <p>Lorem ipsum</p>
    </>
)

export const Translucent = () => (
    <>
        <ComponentCover translucent />

        <h1>Text behind the cover</h1>
        <p>Lorem ipsum</p>
    </>
)

export const WithClickHandler = () => (
    <>
        <ComponentCover onClick={() => alert('Cover was clicked')} />

        <h1>Text behind the cover</h1>
        <p>Lorem ipsum</p>
    </>
)

export const NonBlocking = () => (
    <>
        <ComponentCover translucent pointerEvents="none" />

        <h1>Text behind the cover</h1>
        <p>
            You can still select this text because the cover has pointer-event:
            none.
        </p>
    </>
)

export const WithCenteredContentCircularLoader = () => (
    <>
        <ComponentCover translucent>
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        </ComponentCover>

        <h1>Text behind the cover</h1>
        <p>Lorem ipsum</p>
    </>
)
