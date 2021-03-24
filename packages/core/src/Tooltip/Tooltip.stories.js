import React from 'react'
import { Tooltip } from './Tooltip.js'

const subtitle = 'Displayed when a user hovers over the element'

const description = `
Tooltips only display when a user hovers over an element. Do not use tooltips for critical or important information, users may not find the information or it may completely unavailable to mobile users. Information provided in tooltips should be supplementary or provide helpful context. Icon buttons can use tooltips to inform the user of their action. Never put important information or actions inside a tooltip.

- Common usage of a tooltip is to expand on the displayed information when the user hovers over the element.
- Do not place actions inside a tooltip, they would be hidden from the user and difficult to click.
- Only text can be displayed in a tooltip. A popover can be used for rich information.
- Limit the text inside a tooltip to a single, short sentence.
- Do not repeat information in a tooltip, provide extra relevant, useful information.

By default the tooltip should display above the hovered element. Alternatively, a tooltip may be displayed underneath or to the side of an element if there is limited space.

\`\`\`js
import { Tooltip } from '@dhis2/ui'
\`\`\`

_**Note**: The tooltips may not be placed correctly on this page. View the demos in the 'Canvas' tab for correct placement._
`

export default {
    title: 'Data Display/Tooltip',
    component: Tooltip,
    parameters: {
        componentSubtitle: subtitle,
        docs: {
            description: { component: description },
            source: { type: 'code' },
        },
    },
    decorators: [
        story => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 500,
                    height: 200,
                }}
            >
                <div style={{ width: 400, height: 100 }}>{story()}</div>
            </div>
        ),
    ],
    args: { content: 'Some tooltip content here' },
}

const Template = args => (
    <p>
        Mouse over <Tooltip {...args}>[these words]</Tooltip> to open a tooltip.
    </p>
)

export const DefaultPlacementTop = Template.bind({})

export const PlacementRight = Template.bind({})
PlacementRight.args = { placement: 'right' }
PlacementRight.parameters = {
    docs: {
        description: {
            story: `_**Note:** The tooltips may not be placed correctly on this page. View the demos in the 'Canvas' tab for correct placement._`,
        },
    },
}

export const PlacementBottom = Template.bind({})
PlacementBottom.args = { placement: 'bottom' }

export const PlacementLeft = Template.bind({})
PlacementLeft.args = { placement: 'left' }

export const ConfigurableOpenAndCloseDelays = args => (
    <p>
        <Tooltip {...args}>
            The tooltip that opens when this content is moused over opens with 0
            open or close delay
        </Tooltip>
    </p>
)
ConfigurableOpenAndCloseDelays.args = {
    content: 'Some extra info',
    openDelay: 0,
    closeDelay: 0,
}

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

export const CustomBuiltInComponent = args => {
    return (
        <p>
            Mouse over{' '}
            <Tooltip {...args}>
                {({ ref, onMouseOver, onMouseOut }) => (
                    <span
                        ref={ref}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                    >
                        these words
                        <style jsx>{`
                            span {
                                color: green;
                                text-decoration: underline;
                            }
                        `}</style>
                    </span>
                )}
            </Tooltip>{' '}
            to open a tooltip.
        </p>
    )
}

export const CustomComponent = args => {
    return (
        <p>
            Mouse over{' '}
            <Tooltip {...args}>
                {({ ref, onMouseOver, onMouseOut }) => (
                    <span
                        ref={ref}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                    >
                        <button>this button</button>
                        <style jsx>{`
                            span {
                                display: inline-flex;
                            }
                        `}</style>
                    </span>
                )}
            </Tooltip>{' '}
            to open a tooltip.
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
        data-test="hiding-and-flipping-container"
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
