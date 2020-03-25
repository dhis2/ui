import React from 'react'
import { Tooltip } from '../Tooltip.js'
import { Button } from '../Button.js'

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
                        <Button>paragraph</Button>
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
