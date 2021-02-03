import React from 'react'
import { Tooltip } from './Tooltip.js'

export default {
    title: 'Tooltip',
    component: Tooltip,
    decorators: [
        storyFn => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 500,
                    height: 300,
                }}
            >
                <div style={{ width: 300, height: 100 }}>{storyFn()}</div>
            </div>
        ),
    ],
}

export const DefaultPlacementTop = () => (
    <p>
        I am a <Tooltip content="Some extra info">paragraph</Tooltip> that
        contains a tooltip.
    </p>
)

export const PlacementRight = () => (
    <p>
        I am a{' '}
        <Tooltip placement="right" content="Some extra info">
            paragraph
        </Tooltip>{' '}
        that contains a tooltip.
    </p>
)

export const PlacementBottom = () => (
    <p>
        I am a{' '}
        <Tooltip placement="bottom" content="Some extra info">
            paragraph
        </Tooltip>{' '}
        that contains a tooltip.
    </p>
)

export const PlacementLeft = () => (
    <p>
        I am a{' '}
        <Tooltip placement="left" content="Some extra info">
            paragraph
        </Tooltip>{' '}
        that contains a tooltip.
    </p>
)

export const CustomElementViaTagProp = () => {
    return (
        <p>
            I am a{' '}
            <Tooltip content="Some extra info" tag="em">
                paragraph
            </Tooltip>{' '}
            that contains a tooltip.
        </p>
    )
}

export const CustomBuiltInComponent = () => {
    return (
        <p>
            I am a{' '}
            <Tooltip content="Some extra info">
                {({ ref, onMouseOver, onMouseOut }) => (
                    <span
                        ref={ref}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                    >
                        paragraph
                        <style jsx>{`
                            span {
                                color: green;
                                text-decoration: underline;
                            }
                        `}</style>
                    </span>
                )}
            </Tooltip>{' '}
            that contains a tooltip.
        </p>
    )
}

export const CustomComponent = () => {
    return (
        <p>
            I am a{' '}
            <Tooltip content="Some extra info">
                {({ ref, onMouseOver, onMouseOut }) => (
                    <span
                        ref={ref}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                    >
                        <button>paragraph</button>
                        <style jsx>{`
                            span {
                                display: inline-flex;
                            }
                        `}</style>
                    </span>
                )}
            </Tooltip>{' '}
            that contains a Button with a tooltip.
        </p>
    )
}

export const HidesWhenOutOfFrame = args => (
    <div
        style={{
            height: '250px',
            padding: '1rem',
            overflow: 'scroll',
            border: '1px solid #43cbcb',
        }}
    >
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <Tooltip {...args}>
            <div style={{ height: '80px', border: '1px solid grey' }}>
                {
                    "I am a rectangle that contains a tooltip that hides when I'm obscured from view"
                }
            </div>
        </Tooltip>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
        <p>{"I'm an extra paragraph"}</p>
    </div>
)
HidesWhenOutOfFrame.args = { content: 'Some extra info' }
