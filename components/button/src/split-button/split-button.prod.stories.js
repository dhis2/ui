import { sharedPropTypes } from '@dhis2/ui-constants'
import { FlyoutMenu, MenuItem } from '@dhis2-ui/menu'
import { Modal, ModalContent, ModalTitle, ModalActions } from '@dhis2-ui/modal'
import React from 'react'
import { Button } from '../button/button.js'
import { ButtonStrip } from '../button-strip/button-strip.js'
import { SplitButton } from './split-button.js'

const description = `
Similar to the dropdown button, but can be triggered independently of opening the contained action list. The main action may be 'Save' and the contained actions may be "Save and add another" and "Save and open".

\`\`\`js
import { SplitButton } from '@dhis2/ui'
\`\`\`
`

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

const DropdownComponent = <span>Dropdown component</span>

export default {
    title: 'Split Button',
    component: SplitButton,
    parameters: { docs: { description: { component: description } } },
    args: {
        name: 'buttonName',
        value: 'buttonValue',
        component: DropdownComponent,
        onClick: onClick,
        children: 'Label me!',
    },
    argTypes: {
        small: { ...sharedPropTypes.sizeArgType },
        large: { ...sharedPropTypes.sizeArgType },
        primary: { ...sharedPropTypes.buttonVariantArgType },
        secondary: { ...sharedPropTypes.buttonVariantArgType },
        destructive: { ...sharedPropTypes.buttonVariantArgType },
    },
}

const Template = (args) => <SplitButton {...args} />

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = { primary: true }
Primary.parameters = {
    docs: {
        description: {
            story: `_**Note**: The dropdown components in the following examples do not appear in the right place on this page. View the following examples in the 'Canvas' tab for the correct placement._`,
        },
    },
}

export const Secondary = Template.bind({})
Secondary.args = { secondary: true }

export const Destructive = Template.bind({})
Destructive.props = { destructive: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Small = Template.bind({})
Small.args = { small: true }

export const Large = Template.bind({})
Large.args = { large: true }

export const InitialFocus = Template.bind({})
InitialFocus.args = { initialFocus: true }
// Disable this on docs page because grabbing focus repeatedly is annoying
InitialFocus.parameters = { docs: { disable: true } }

export const WithIcon = Template.bind({})
WithIcon.args = {
    children: 'Children',
    component: <div>Component</div>,
    icon: <div>Icon</div>,
}

export const RTL = (args) => (
    <div dir="rtl">
        <SplitButton {...args} />
    </div>
)
RTL.args = {
    children: 'RTL text',
}

export const ControlledOpen = (args) => {
    const [openFlyout, setOpenFlyout] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)

    const handleClick = () => {
        console.log('Main button clicked. This will not open the flyout menu.')
    }

    const handleToggle = () => {
        setOpenFlyout((prevState) => !prevState)
    }

    const component = (
        <FlyoutMenu>
            <MenuItem
                onClick={() => {
                    console.log('Console log and close flyout')
                    setOpenFlyout(false)
                }}
                label="Action 1"
            />
            <MenuItem
                onClick={() => {
                    console.log('Open modal and close flyout')
                    setOpenFlyout(false)
                    setOpenModal(true)
                }}
                label="Open modal"
            />
        </FlyoutMenu>
    )

    return (
        <div>
            <SplitButton
                {...args}
                open={openFlyout}
                onClick={handleClick}
                onToggle={handleToggle}
                component={component}
            />

            {openModal && (
                <Modal onClose={() => setOpenModal(false)}>
                    <ModalTitle>Modal</ModalTitle>
                    <ModalContent>
                        <p>Modal content</p>
                    </ModalContent>
                    <ModalActions>
                        <ButtonStrip>
                            <Button onClick={() => setOpenModal(false)}>
                                Close
                            </Button>
                        </ButtonStrip>
                    </ModalActions>
                </Modal>
            )}
        </div>
    )
}
ControlledOpen.parameters = {
    docs: {
        description: {
            story: 'This story demonstrates how the `SplitButton` can be controlled from the outside using the `open` prop and an `onToggle` handler that updates the external state.',
        },
    },
}
