import { elevations, sharedPropTypes } from '@dhis2/ui-constants'
import React, { useRef } from 'react'
import { Popover } from './popover.js'

const subtitle = `Useful to give a user more information or possible actions without disrupting a page or flow`

const description = `
Popovers are similar to tooltips: they are for displaying extra information, but popovers are intended for richer information and actions.

Popovers are triggered by hovering or tapping on an element. Clicking on a element keeps the popover open until the user clicks or interacts elsewhere on the page.

Popovers can contain information in the form of rich markup, as well as actions. Critical actions, or the only action on a page, should not be hidden inside a popover.

Before using a popover, consider that some users may never see the information contained within. If that is a problem, display the information right on the page instead. Do not use a popover for content that is essential to the user experience or application.

See more about Popovers at [Design System: Popover](https://github.com/dhis2/design-system/blob/master/molecules/popover.md).

\`\`\`js
import { Popover } from '@dhis2/ui'
\`\`\`

_**Note**: Due to the full-page interaction of this component, only one representative example in an iframe sandbox is shown here. See more (interactive) examples in the 'Canvas' tab._
`

export default {
    title: 'Popover',
    component: Popover,
    parameters: {
        componentSubtitle: subtitle,
        docs: {
            description: { component: description },
            // Contain the popovers in iframes in the docs page
            inlineStories: false,
            iframeHeight: '500px',
            // Disable stories in docs page by default to use one representative example
            disable: true,
        },
    },
    // Handles weird treatment of non-literal args (`elevation: elevations.e200`)
    args: { ...Popover.defaultProps },
    argTypes: {
        reference: { ...sharedPropTypes.popperReferenceArgType },
        placement: { ...sharedPropTypes.popperPlacementArgType },
    },
}

const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: 400,
    paddingTop: 280,
    backgroundColor: 'aliceblue',
}

const referenceElementStyle = {
    width: 100,
    height: 50,
    backgroundColor: 'cadetblue',
    textAlign: 'center',
    padding: 6,
}

const Template = (args) => {
    const ref = useRef(null)

    return (
        <div style={boxStyle}>
            <div style={referenceElementStyle} ref={ref}>
                Reference element
            </div>
            <Popover {...args} reference={ref}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur purus ut faucibus pulvinar elementum.
                    Dignissim diam quis enim lobortis scelerisque fermentum dui
                    faucibus. Rhoncus aenean vel elit scelerisque mauris
                    pellentesque. Non sodales neque sodales ut etiam sit amet.
                    Volutpat sed cras ornare arcu dui. Quis imperdiet massa
                    tincidunt nunc pulvinar sapien et ligula. Convallis posuere
                    morbi leo urna molestie at. Mauris cursus mattis molestie a
                    iaculis at.
                </div>
            </Popover>
        </div>
    )
}

export const Default = Template.bind({})
Default.parameters = {
    docs: {
        // Enable this story for the docs page
        disable: false,
        // Show source, including 'ref' hooks
        source: { type: 'code' },
    },
}

export const NoArrow = Template.bind({})
NoArrow.args = { arrow: false }

export const Customization = Template.bind({})
Customization.args = {
    arrow: true,
    className: 'custom-classname',
    dataTest: 'custom-data-test-id',
    elevation: elevations.e200,
    maxWidth: 400,
    placement: 'bottom-start',
    onClickOutside: () => console.log('backdrop was clicked...'),
}
