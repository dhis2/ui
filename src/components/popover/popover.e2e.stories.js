import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import { Popover } from './popover.js'

const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: 400,
    backgroundColor: 'aliceblue',
}

const referenceElementStyle = {
    width: 100,
    height: 50,
    backgroundColor: 'cadetblue',
    textAlign: 'center',
    padding: 6,
}

class PopperInBoxWithCenteredReferenceElement extends Component {
    ref = createRef()

    render() {
        const { paddingTop, popoverHeight, popoverWidth, ...popoverProps } =
            this.props
        return (
            <div style={{ ...boxStyle, paddingTop, height: paddingTop + 100 }}>
                <div
                    style={referenceElementStyle}
                    ref={this.ref}
                    data-test="reference-element"
                >
                    Reference element
                </div>
                <Popover reference={this.ref} {...popoverProps}>
                    <div
                        data-test="popover-content"
                        style={{ width: popoverWidth, height: popoverHeight }}
                    >
                        I am in a box with width: {popoverWidth}px and height:{' '}
                        {popoverHeight}px
                    </div>
                </Popover>
            </div>
        )
    }
}
PopperInBoxWithCenteredReferenceElement.defaultProps = {
    paddingTop: 220,
    popoverHeight: 200,
    popoverWidth: 336,
}
PopperInBoxWithCenteredReferenceElement.propTypes = {
    paddingTop: PropTypes.number,
    popoverHeight: PropTypes.number,
    popoverWidth: PropTypes.number,
}

window.onClickOutside = window.Cypress && window.Cypress.cy.stub()

export default { title: 'Popover', component: Popover }

export const Default = () => <PopperInBoxWithCenteredReferenceElement />

export const Flipped = () => (
    // default viewport-height for flipped popover
    // viePort height 400px for diplaced with arrow
    <PopperInBoxWithCenteredReferenceElement paddingTop={160} />
)

export const HiddenArrow = () => (
    // viewPort height 325px
    <PopperInBoxWithCenteredReferenceElement paddingTop={110} />
)

export const NoArrow = () => (
    <PopperInBoxWithCenteredReferenceElement arrow={false} />
)

export const WithOnClickOutside = () => (
    <PopperInBoxWithCenteredReferenceElement
        onClickOutside={window.onClickOutside}
    />
)

export const PlacementTop = () => (
    <PopperInBoxWithCenteredReferenceElement
        popoverHeight={40}
        popoverWidth={180}
        paddingTop={50}
        placement="top"
    />
)

export const PlacementRight = () => (
    <PopperInBoxWithCenteredReferenceElement
        popoverHeight={60}
        popoverWidth={130}
        paddingTop={50}
        placement="right"
    />
)

export const PlacementBottom = () => (
    <PopperInBoxWithCenteredReferenceElement
        popoverHeight={40}
        popoverWidth={180}
        paddingTop={50}
        placement="bottom"
    />
)

export const PlacementLeft = () => (
    <PopperInBoxWithCenteredReferenceElement
        popoverHeight={60}
        popoverWidth={130}
        paddingTop={50}
        placement="left"
    />
)

export const ShiftedArrow = () => (
    <PopperInBoxWithCenteredReferenceElement
        popoverHeight={160}
        popoverWidth={130}
        paddingTop={1}
        placement="left"
    />
)
