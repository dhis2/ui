import React, { Component, createRef } from 'react'
import propTypes from '@dhis2/prop-types'
import { Popper } from '../../src/Popper.js'

const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 400,
    marginBottom: 1000,
    backgroundColor: 'aliceblue',
}

const referenceElementStyle = {
    width: 130,
    height: 50,
    backgroundColor: 'cadetblue',
    textAlign: 'center',
    padding: 6,
}

const popperStyle = {
    width: 110,
    height: 30,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    padding: 6,
}

class BoxWithCenteredReferenceElement extends Component {
    ref = createRef()

    render() {
        const { renderChildren } = this.props
        return (
            <div className="box" style={boxStyle}>
                <div
                    className="reference-element"
                    style={referenceElementStyle}
                    ref={this.ref}
                >
                    Reference element
                </div>
                {renderChildren({ referenceElement: this.ref })}
            </div>
        )
    }
}
BoxWithCenteredReferenceElement.propTypes = {
    renderChildren: propTypes.func,
}

export default {
    title: 'Popper',
    component: Popper,
    decorators: [
        storyFN => <BoxWithCenteredReferenceElement renderChildren={storyFN} />,
    ],
}

/* eslint-disable react/prop-types */
export const Top = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="top">
        <div style={popperStyle}>Top</div>
    </Popper>
)
export const TopStart = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="top-start">
        <div style={popperStyle}>Top start</div>
    </Popper>
)
export const TopEnd = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="top-end">
        <div style={popperStyle}>Top end</div>
    </Popper>
)
export const Bottom = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="bottom">
        <div style={popperStyle}>Bottom</div>
    </Popper>
)
export const BottomStart = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="bottom-start">
        <div style={popperStyle}>Bottom start</div>
    </Popper>
)
export const BottomEnd = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="bottom-end">
        <div style={popperStyle}>Bottom end</div>
    </Popper>
)
export const Right = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="right">
        <div style={popperStyle}>Right</div>
    </Popper>
)
export const RightStart = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="right-start">
        <div style={popperStyle}>Right start</div>
    </Popper>
)
export const RightEnd = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="right-end">
        <div style={popperStyle}>Right end</div>
    </Popper>
)
export const Left = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="left">
        <div style={popperStyle}>Left</div>
    </Popper>
)
export const LeftStart = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="left-start">
        <div style={popperStyle}>Left start</div>
    </Popper>
)
export const LeftEnd = ({ referenceElement }) => (
    <Popper reference={referenceElement} placement="left-end">
        <div style={popperStyle}>Left end</div>
    </Popper>
)
export const ElementRef = () => {
    const anchor = document.createElement('div')
    document.body.appendChild(anchor)

    return (
        <Popper reference={anchor} placement="left-end">
            <div style={popperStyle}>Left end</div>
            <style jsx>{`
                :global(.reference-element) {
                    display: none !important;
                }
            `}</style>
        </Popper>
    )
}
export const VirtualElementRef = () => {
    const virtualElement = {
        getBoundingClientRect: () => ({
            width: 0,
            height: 0,
            top: 100,
            right: 0,
            bottom: 0,
            left: 200,
            x: 200,
            y: 100,
        }),
    }

    return (
        <Popper reference={virtualElement} placement="left-end">
            <div style={popperStyle}>Left end</div>
            <style jsx>{`
                :global(.reference-element) {
                    display: none !important;
                }
            `}</style>
        </Popper>
    )
}
