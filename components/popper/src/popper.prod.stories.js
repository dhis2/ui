import { sharedPropTypes } from '@dhis2/ui-constants'
import { hide, offset, size } from '@floating-ui/react-dom'
import React, { useEffect, useRef } from 'react'
import { Popper } from './popper.js'
import { usePopper } from './use-popper.js'

const description = `
A tool for adding additional information or content outside of the document flow, used for example in the Tooltip or Popover components.

Built on top of [Floating UI](https://floating-ui.com/). The \`middleware\` prop accepts Floating UI middleware functions. For full control — including reading \`middlewareData\` to react to what middleware computed — use the \`usePopper\` hook directly.

\`\`\`js
import { Popper, usePopper } from '@dhis2/ui'
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

export const RTL = (args) => {
    useEffect(() => {
        document.documentElement.setAttribute('dir', 'rtl')
        return () => {
            document.documentElement.setAttribute('dir', 'ltr')
        }
    }, [])
    return (
        <div dir="rtl">
            <span>If dir=rtl, `left` and `right` placement are reversed</span>
            <Template {...args} placement="left" />
            <br />
            <Template {...args} placement="right-start" />
        </div>
    )
}

const customMiddlewareDescription = `
Demonstrates passing custom Floating UI middleware and reading the resulting
\`middlewareData\` via the \`usePopper\` hook.

- \`offset(12)\` adds 12px between the reference and popper.
- \`hide()\` writes \`middlewareData.hide.referenceHidden\` when the reference
  scrolls out of its clipping ancestor. The consumer reads this and applies
  \`visibility: hidden\` to the popper content.
- \`size()\` applies a max-height to the popper based on available space.

Scroll the dotted container to see the popper hide as its reference disappears.
Resize the window vertically to see the popper's max-height adapt.
`

const scrollContainerStyle = {
    width: 400,
    height: 200,
    overflow: 'auto',
    border: '2px dotted cadetblue',
    padding: 16,
    marginBottom: 320,
}

const scrollSpacerStyle = { height: 300 }

const customPopperStyle = {
    width: 240,
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 4,
    overflow: 'auto',
    boxSizing: 'border-box',
}

const CustomPopper = ({ reference }) => {
    const middleware = [
        offset(12),
        hide(),
        size({
            apply({ availableHeight, elements }) {
                elements.floating.style.maxHeight = `${Math.max(
                    0,
                    availableHeight - 16
                )}px`
            },
        }),
    ]
    const { refs, floatingStyles, middlewareData, placement, isPositioned } =
        usePopper({ reference, placement: 'right', middleware })

    return (
        <div
            ref={refs.setFloating}
            style={{
                ...floatingStyles,
                ...customPopperStyle,
                visibility: middlewareData.hide?.referenceHidden
                    ? 'hidden'
                    : undefined,
                opacity: isPositioned ? 1 : 0,
                transition: 'opacity 150ms',
            }}
        >
            <div>
                <strong>resolved placement:</strong> {placement}
            </div>
            <div>
                <strong>referenceHidden:</strong>{' '}
                {String(Boolean(middlewareData.hide?.referenceHidden))}
            </div>
            <p>
                This popper uses <code>offset</code>, <code>hide</code> and{' '}
                <code>size</code> middleware. The container above is scrollable;
                when the reference element scrolls out of view, the popper hides
                itself.
            </p>
        </div>
    )
}

export const CustomMiddlewareWithHook = () => {
    const ref = useRef(null)
    return (
        <div style={scrollContainerStyle}>
            <div style={scrollSpacerStyle} />
            <div style={referenceElementStyle} ref={ref}>
                Reference Element (scroll me out of view)
            </div>
            <div style={scrollSpacerStyle} />
            <CustomPopper reference={ref} />
        </div>
    )
}
CustomMiddlewareWithHook.parameters = {
    docs: {
        description: { story: customMiddlewareDescription },
        source: { type: 'code' },
    },
}
