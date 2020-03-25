import React from 'react'
import { Tooltip } from '../Tooltip.js'
import propTypes from '@dhis2/prop-types'

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

export const CustomElement = () => {
    return (
        <p>
            I am a{' '}
            <Tooltip content="Some extra info" component="p">
                paragraph
            </Tooltip>{' '}
            that contains a tooltip.
        </p>
    )
}

const Content = React.forwardRef(
    ({ children, onMouseOver, onMouseOut, ...rest }, ref) => (
        <em
            style={{ display: 'inline-block', color: 'red' }}
            ref={ref}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            {...rest}
        >
            {children}
        </em>
    )
)
Content.displayName = 'Content'
Content.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
    onMouseOut: propTypes.func,
    onMouseOver: propTypes.func,
}

export const CustomComponent = () => {
    return (
        <p>
            I am a{' '}
            <Tooltip content="Some extra info" component={Content}>
                paragraph
            </Tooltip>{' '}
            that contains a tooltip.
        </p>
    )
}
