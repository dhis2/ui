import React, { Component, createRef } from 'react'
import propTypes from '@dhis2/prop-types'
import { Popover } from '../Popover.js'

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
        const { paddingTop, ...popoverProps } = this.props
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
                        style={{ width: 336, height: 200 }}
                    >
                        I am in a box with width: 360px and height: 200px
                    </div>
                </Popover>
            </div>
        )
    }
}
PopperInBoxWithCenteredReferenceElement.defaultProps = {
    paddingTop: 220,
}
PopperInBoxWithCenteredReferenceElement.propTypes = {
    paddingTop: propTypes.number,
}

export default { title: 'Popover', component: Popover }

export const Default = () => <PopperInBoxWithCenteredReferenceElement />
export const Flipped = () => (
    // default viewport-height for flipped popover
    // viePort height 400px for diplaced with arrow
    <PopperInBoxWithCenteredReferenceElement paddingTop={180} />
)
export const HiddenArrow = () => (
    // viewPort height 325px
    <PopperInBoxWithCenteredReferenceElement paddingTop={130} />
)
export const NoArrow = () => (
    <PopperInBoxWithCenteredReferenceElement arrow={false} />
)
