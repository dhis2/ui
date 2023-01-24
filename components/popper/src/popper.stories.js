import { sharedPropTypes } from '@dhis2/ui-constants'
import React, { useRef } from 'react'
import { Popper } from './popper.js'

const description = `
A tool for adding additional information or content outside of the document flow, used for example in the Tooltip or Popover components.

Since it's built using [Popper.js](https://popper.js.org/docs/v2/) and [react-popper](https://popper.js.org/react-popper/), some of that functionality can be accessed through the props of this component, like modifiers.

\`\`\`js
import { Popper } from '@dhis2/ui'
\`\`\`

_**Note**: Some of the stories may not look right on this page. View those examples in the 'Canvas' tab instead._
`

export default {
    title: 'Popper',
    component: Popper,
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        placement: { ...sharedPropTypes.popperPlacementArgType },
        reference: { ...sharedPropTypes.popperReferenceArgType },
    },
}

const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 400,
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

const Template = (args) => {
    const ref = useRef(null)

    return (
        <div className="box" style={boxStyle}>
            <div
                className="reference-element"
                style={referenceElementStyle}
                ref={ref}
            >
                Reference Element
            </div>
            <Popper {...args} reference={ref}>
                <div style={popperStyle}>{args.placement}</div>
            </Popper>
        </div>
    )
}

export const Top = Template.bind({})
Top.args = { placement: 'top' }

export const TopStart = Template.bind({})
TopStart.args = { placement: 'top-start' }

export const TopEnd = Template.bind({})
TopEnd.args = { placement: 'top-end' }

export const Bottom = Template.bind({})
Bottom.args = { placement: 'bottom' }

export const BottomStart = Template.bind({})
BottomStart.args = { placement: 'bottom-start' }

export const BottomEnd = Template.bind({})
BottomEnd.args = { placement: 'bottom-end' }

export const Right = Template.bind({})
Right.args = { placement: 'right' }

export const RightStart = Template.bind({})
RightStart.args = { placement: 'right-start' }

export const RightEnd = Template.bind({})
RightEnd.args = { placement: 'right-end' }

export const Left = Template.bind({})
Left.args = { placement: 'left' }

export const LeftStart = Template.bind({})
LeftStart.args = { placement: 'left-start' }

export const LeftEnd = Template.bind({})
LeftEnd.args = { placement: 'left-end' }

export const ElementRef = (args) => {
    const anchor = document.createElement('div')
    document.body.appendChild(anchor)

    return (
        <div className="box" style={{ ...boxStyle, marginBottom: '500px' }}>
            <Popper {...args} reference={anchor}>
                <div style={popperStyle}>{args.placement}</div>
            </Popper>
        </div>
    )
}
ElementRef.args = { placement: 'left-end' }
ElementRef.parameters = { docs: { source: { type: 'code' } } }

export const VirtualElementRef = (args) => {
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
        <div className="box" style={{ ...boxStyle, marginBottom: '500px' }}>
            <Popper {...args} reference={virtualElement}>
                <div style={popperStyle}>{args.placement}</div>
            </Popper>
        </div>
    )
}
VirtualElementRef.args = { placement: 'left-end' }
VirtualElementRef.parameters = { docs: { source: { type: 'code' } } }
