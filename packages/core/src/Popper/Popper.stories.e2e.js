import React, { Component, createRef } from 'react'
import propTypes from '@dhis2/prop-types'

import { Popper } from './Popper.js'

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
    width: 100,
    height: 50,
    backgroundColor: 'cadetblue',
    textAlign: 'center',
    padding: 6,
}

const popperStyle = {
    width: 80,
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

const PopperWithStyledContent = ({ referenceElement, placement }) => (
    <Popper reference={referenceElement} placement={placement} className="test">
        <div style={popperStyle}>Popper</div>
    </Popper>
)
PopperWithStyledContent.propTypes = {
    placement: propTypes.string,
    referenceElement: propTypes.object,
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
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="top"
    />
)
export const TopStart = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="top-start"
    />
)
export const TopEnd = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="top-end"
    />
)
export const Bottom = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="bottom"
    />
)
export const BottomStart = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="bottom-start"
    />
)
export const BottomEnd = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="bottom-end"
    />
)
export const Right = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="right"
    />
)
export const RightStart = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="right-start"
    />
)
export const RightEnd = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="right-end"
    />
)
export const Left = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="left"
    />
)
export const LeftStart = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="left-start"
    />
)
export const LeftEnd = ({ referenceElement }) => (
    <PopperWithStyledContent
        referenceElement={referenceElement}
        placement="left-end"
    />
)
