import React, { Component, createRef } from 'react'
import propTypes from '@dhis2/prop-types'
import { storiesOf } from '@storybook/react'
import { Popper } from '../../src/Popper.js'

const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 400,
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

const PopperWithPlacement = ({ referenceElement, placement }) => (
    <Popper reference={referenceElement} options={{ placement }}>
        <div style={popperStyle}>Popper</div>
    </Popper>
)
PopperWithPlacement.propTypes = {
    placement: propTypes.string,
    referenceElement: propTypes.object,
}

storiesOf('Popper', module)
    .addDecorator(fn => <BoxWithCenteredReferenceElement renderChildren={fn} />)
    .add('Top', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="top"
        />
    ))
    .add('Top-start', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="top-start"
        />
    ))
    .add('Top-end', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="top-end"
        />
    ))
    .add('Bottom', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="bottom"
        />
    ))
    .add('Bottom-start', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="bottom-start"
        />
    ))
    .add('Bottom-end', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="bottom-end"
        />
    ))
    .add('Right', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="right"
        />
    ))
    .add('Right-start', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="right-start"
        />
    ))
    .add('Right-end', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="right-end"
        />
    ))
    .add('Left', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="left"
        />
    ))
    .add('Left-start', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="left-start"
        />
    ))
    .add('Left-end', ({ referenceElement }) => (
        <PopperWithPlacement
            referenceElement={referenceElement}
            placement="left-end"
        />
    ))
